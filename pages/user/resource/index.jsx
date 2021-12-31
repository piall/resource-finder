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
import { AiOutlineClear } from 'react-icons/ai';
import { MdHowToVote } from 'react-icons/md';

import Resource from '../../../src/components/private/resource/resource';
import Vote from '../../../src/components/private/resource/Vote';
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

      <Grid container spacing={2}>
        <Grid item>
          <Grid container>
            <Grid item xs={2}>
              <Vote
                handleVoteModal={handleVoteModal}
                voteType={'Beginner'}
                voteCount={100}
                topic={'JS'}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <Resource
                title={'Beginner JS'}
                description={`From beginner to novice in JS`}
                imgURL={
                  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
                }
                link={'https://www.javascriptbeginners.com'}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item xs={2}>
              <Vote
                handleVoteModal={handleVoteModal}
                voteType={'Advance'}
                voteCount={0}
                topic={'Python'}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <Resource
                title={'Advance python'}
                description={`Learn from the industry expert`}
                imgURL={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png'
                }
                link={'https://www.py.com'}
              />
            </Grid>
          </Grid>
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
