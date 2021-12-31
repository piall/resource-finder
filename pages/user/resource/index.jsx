import {
  Grid,
  Button,
  Modal,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
} from '@material-ui/core';
import { useState } from 'react';

import { HiSearch } from 'react-icons/hi';
import { MdHowToVote } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';
import Resource from '../../../src/components/private/resource/resource';
import UserLayout from '../../../src/components/layout/UserLayout';

export default function Topic() {
  //state
  const [selectedSortValue, setSelectedSortValue] = useState('Sort By');

  //handler
  const changeSelectHandler = (e) => {
    setSelectedSortValue(e.target.value);
  };

  //modal state
  const [voteOpen, setVoteOpen] = useState(false);

  //modal handler
  const handleVoteModal = () => {
    setVoteOpen(!voteOpen);
  };

  return (
    <UserLayout>
      <Grid container alignItems="center">
        <Grid item xs={10} md={9}>
          <div className="search-box-container">
            <input
              contained
              fullWidth
              variant="outlined"
              placeholder="Search resources"
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
            <option value="Sort By">Sort By</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
          </select>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={2}>
          <div className="resource-left-container">
            <Button
              variant="contained"
              color="primary"
              startIcon={<MdHowToVote />}
              onClick={handleVoteModal}
            >
              Vote
            </Button>
            <p>Beginner (100)</p>
            <p>JS</p>
          </div>
        </Grid>
        <Grid item xs={12} md={10}>
          <Resource
            title={'lorem'}
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit`}
            imgURL={
              'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            }
            link={'https://www.lorem.com'}
          />
        </Grid>
      </Grid>

      <Modal
        open={voteOpen}
        onClose={handleVoteModal}
        aria-labelledby="add-vote-modal"
      >
        <div className="modal-container">
          <div className="modal-body">
            <FormLabel component="legend">Category</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                value="beginner"
                control={<Radio />}
                label="Beginner"
              />
              <FormControlLabel
                value="intermediate"
                control={<Radio />}
                label="Intermediate"
              />
              <FormControlLabel
                value="advance"
                control={<Radio />}
                label="Advance"
              />
              <Button startIcon={<AiOutlineClear />} />
            </RadioGroup>
            <center>
              <Button
                variant="contained"
                color="primary"
                startIcon={<MdHowToVote />}
              >
                Vote
              </Button>
            </center>
          </div>
        </div>
      </Modal>
    </UserLayout>
  );
}
