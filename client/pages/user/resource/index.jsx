import axios from 'axios';
import {
  Grid,
  Button,
  Modal,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
  TextField,
  MenuItem,
  Select,
  CircularProgress,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { HiSearch, HiPlus } from 'react-icons/hi';
import { AiOutlineClear } from 'react-icons/ai';
import { MdHowToVote } from 'react-icons/md';
import { Toaster } from 'react-hot-toast';

import AxiosMethod from '../../../src/axios/AxiosMethod';
import Resource from '../../../src/components/private/resource/resource';
import Vote from '../../../src/components/private/resource/Vote';
import UserLayout from '../../../src/components/layout/UserLayout';
import {
  API_AddResource,
  API_GetResource,
  API_GetTopic,
  API_Vote,
  API_VoteResource,
} from '../../../src/routes/apiRoute';
import { getAccountID } from '../../../src/helpers/account';
import {
  getFromLocalStorage,
  setInLocalStorage,
} from '../../../src/helpers/localStorage';

export default function Topic() {
  //state
  const [selectedSortValue, setSelectedSortValue] = useState('Sort From');
  const [selectedTopic, setSelectedTopic] = useState('-1');
  const [topicData, setTopicData] = useState([]);
  const [resourceData, setResourceData] = useState([]);
  const [filteredresourceData, setFilteredResourceData] = useState([]);
  const [link, setLink] = useState('');
  const [clickedResourceForVote, setClickedResourceForVote] = useState('');
  const [clickedCategoryForVote, setClickedCategoryForVote] = useState('');
  const [customResult, setCustomResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);

  //handler
  const changeSelectHandler = (e) => {
    setSelectedSortValue(e.target.value);
    sortResource(e.target.value);
  };
  const handleTopicSelect = (selected) => {
    setSelectedTopic(selected);
  };
  const handleResourceLinkInput = (link) => {
    setLink(link);
  };
  const getTopicName = (id) => {
    const topic = topicData.find((topic) => topic._id === id);
    console.log(topic);
    return topic?.name;
  };
  const getMaxVote = (vote, topicID, resourceID) => {
    console.log(vote, topicID, resourceID);
    let max = vote.beginner;
    let type = 'Beginner';
    if (max < vote.intermediate) {
      max = vote.intermediate;
      type = 'Intermediate';
    }
    if (max < vote.advance) {
      max = vote.advance;
      type = 'Advance';
    }

    if (max === 0) type = 'No Vote';
    return (
      <Vote
        handleVoteModal={handleVoteModal}
        voteType={type}
        voteCount={max}
        topic={getTopicName(topicID)}
        resourceID={resourceID}
      />
    );
  };

  const searchResourceInDatabase = (searchInput) => {
    setFilteredResourceData(resourceData);
    if (searchInput.length > 0) {
      const searchResult = resourceData.filter((resource) => {
        if (
          resource.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
          resource.description
            ?.toLowerCase()
            .includes(searchInput.toLowerCase())
        ) {
          return resource;
        }
      });
      setFilteredResourceData(searchResult);
      if (searchResult.length === 0) {
        getSearchResultFromOutside(searchInput);
      } else {
        setCustomResult(false);
      }
    } else {
      setFilteredResourceData(resourceData);
    }
  };

  const sortResource = (type) => {
    setFilteredResourceData(resourceData);
    if (type == 'Sort From') {
      return;
    }
    let beginner = resourceData.filter(
      (resource) =>
        resource.vote.beginner > resource.vote.intermediate &&
        resource.vote.beginner > resource.vote.advance
    );
    let intermediate = resourceData.filter(
      (resource) =>
        resource.vote.intermediate > resource.vote.beginner &&
        resource.vote.intermediate > resource.vote.advance
    );
    let advance = resourceData.filter(
      (resource) =>
        resource.vote.advance > resource.vote.intermediate &&
        resource.vote.advance > resource.vote.beginner
    );

    if (beginner.length || intermediate.length || advance.length) {
      let data;
      if (type === 'beginner') {
        data = [...beginner, ...intermediate, ...advance];
      } else if (type === 'intermediate') {
        data = [...intermediate, ...advance, ...beginner];
      } else {
        data = [...advance, ...intermediate, ...beginner];
      }
      setFilteredResourceData(data);
    } else {
      setFilteredResourceData(resourceData);
    }
  };

  const shapePublicApiData = (result) => {
    const data = [];
    for (let i = 0; i < result.length; i++) {
      data.push({
        image: result[i].image.url,
        description: result[i].description,
        title: result[i].title,
        link: result[i].url,
      });
    }
    setFilteredResourceData(data);
    console.log(data);
  };

  const getSearchResultFromOutside = (searchInput) => {
    var options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
      params: {
        q: searchInput,
        pageNumber: '1',
        pageSize: '10',
        autoCorrect: 'true',
      },
      headers: {
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'x-rapidapi-key': 'f4387ba9d0msh17d7eff9c34b946p10de38jsn17052119f9ad',
      },
    };
    setLoading(true);

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCustomResult(true);
        const data = response.data;
        console.log(data.value);
        if (data.value.length) {
          shapePublicApiData(response.data.value);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        toast.error('An error occured');
      });
  };

  //modal state
  const [voteOpen, setVoteOpen] = useState(false);
  const [addResourceModalOpen, setAddResourceModal] = useState(false);

  //modal handler
  const handleVoteModal = (resourceID) => {
    setVoteOpen(!voteOpen);
    setClickedResourceForVote(resourceID);
  };
  const handleAddResourceModal = () => {
    setAddResourceModal(!addResourceModalOpen);
  };

  //API
  const getTopic = async () => {
    setLoading(true);
    const response = await AxiosMethod.getData(API_GetTopic);
    setLoading(false);
    console.log(response);
    setTopicData(response.data);
  };

  const getResource = async () => {
    setLoading(true);
    const response = await AxiosMethod.getData(API_GetResource);
    setLoading(false);
    console.log(response);
    setResourceData(response.data);
    setFilteredResourceData(response.data);
  };

  const addResource = async () => {
    setLoading(true);
    setToastStatus(true);
    const data = {
      link,
      topicID: selectedTopic,
      userID: getAccountID(),
    };
    await AxiosMethod.postData(
      API_AddResource,
      data,
      'Successfully Added Topic'
    );
    setLoading(false);
    handleAddResourceModal();
    getResource();
  };

  const addVote = async () => {
    setLoading(true);
    setToastStatus(true);
    const data = {
      resourceID: clickedResourceForVote,
      userID: getAccountID(),
      type: clickedCategoryForVote,
    };
    console.log(data);
    const response = await AxiosMethod.postData(
      API_VoteResource,
      data,
      'Successfully Added Vote'
    );

    // const user = getFromLocalStorage('user');
    // user.votedResources.push({ resourceID: clickedResourceForVote });
    // setInLocalStorage('user', user);

    console.log(response);
    setLoading(false);
    handleVoteModal();
    getResource();
  };

  useEffect(() => {
    getTopic();
    getResource();
  }, []);

  return (
    <UserLayout>
      {toastStatus && <Toaster position="top-center" reverseOrder={false} />}
      <div className="title-with-btn-container">
        <h2 className="title">Resources</h2>
        <Button
          variant="contained"
          className="purple"
          startIcon={<HiPlus />}
          onClick={handleAddResourceModal}
        >
          Add Resource
        </Button>
      </div>
      <Grid container alignItems="center">
        <Grid item xs={10} md={9}>
          <div className="search-box-container">
            <input
              contained
              fullWidth
              variant="outlined"
              placeholder="Search resources"
              onKeyDown={(e) => {
                if (e.target.value.length > 0 && e.key === 'Enter') {
                  searchResourceInDatabase(e.target.value);
                } else {
                  setFilteredResourceData(resourceData);
                  setCustomResult(false);
                }
              }}
            />
            <HiSearch />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <select
            labelId="sort-label"
            value={selectedSortValue}
            onChange={changeSelectHandler}
            className="custom-select-box"
          >
            <option value="Sort From">Sort From</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
          </select>
        </Grid>
      </Grid>

      <center>{loading && <CircularProgress />}</center>
      <Grid container spacing={2}>
        {topicData.length > 0 &&
          filteredresourceData.map((resource) => {
            return (
              <Grid item>
                <Grid container>
                  <Grid item xs={2}>
                    {!customResult &&
                      getMaxVote(resource.vote, resource.topicID, resource._id)}
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Resource
                      title={resource.title}
                      description={resource.description}
                      imgURL={resource.image}
                      link={resource.link}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
      </Grid>

      <Modal
        open={voteOpen}
        onClose={handleVoteModal}
        aria-labelledby="add-vote-modal"
      >
        <div className="modal-container">
          <div className="modal-body">
            <FormLabel component="legend">Category</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              onChange={(e) => {
                setClickedCategoryForVote(e.target.value);
              }}
            >
              <FormControlLabel
                value="Beginner"
                control={<Radio />}
                label="Beginner"
              />
              <FormControlLabel
                value="Intermediate"
                control={<Radio />}
                label="Intermediate"
              />
              <FormControlLabel
                value="Advance"
                control={<Radio />}
                label="Advance"
              />
              {/* <Button startIcon={<AiOutlineClear />} /> */}
            </RadioGroup>
            <center>
              <Button
                variant="contained"
                color="primary"
                startIcon={<MdHowToVote />}
                onClick={() => {
                  addVote();
                }}
                disabled={!clickedCategoryForVote}
              >
                Vote
              </Button>
            </center>
          </div>
        </div>
      </Modal>

      <Modal
        open={addResourceModalOpen}
        onClose={handleAddResourceModal}
        aria-labelledby="add-resource-modal"
      >
        <div className="modal-container">
          <div className="modal-body">
            <TextField
              required
              fullWidth
              label="Resource Link"
              placeholder="Enter Resource Link"
              variant="outlined"
              onChange={(e) => {
                handleResourceLinkInput(e.target.value);
              }}
            />
            <Select
              required
              variant="outlined"
              fullWidth
              value={selectedTopic}
              onChange={(e) => {
                handleTopicSelect(e.target.value);
              }}
            >
              <MenuItem value={'-1'}>Select Resource</MenuItem>
              {topicData.map((topic) => {
                return <MenuItem value={topic._id}>{topic.name}</MenuItem>;
              })}
            </Select>
            <center>
              <Button
                variant="contained"
                color="primary"
                startIcon={<HiPlus />}
                onClick={addResource}
                disabled={selectedTopic === '-1' || !link}
              >
                Add
              </Button>
            </center>
          </div>
        </div>
      </Modal>
    </UserLayout>
  );
}
