import { useState } from 'react';
import {
  Button,
  Modal,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
  Grid,
} from '@material-ui/core';
import { MdHowToVote } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';
import ArticleResource from '../../../src/components/private/resource/ArticleResource';
import UserLayout from '../../../src/components/layout/PublicLayout';

export default function AuthorDetails() {
  //modal state
  const [voteOpen, setVoteOpen] = useState(false);

  //modal handler
  const handleVoteModal = () => {
    setVoteOpen(!voteOpen);
  };

  return (
    <UserLayout>
      <center>
        <h3>Articles by author</h3>
      </center>
      <Button
        variant="contained"
        color="primary"
        startIcon={<MdHowToVote />}
        onClick={handleVoteModal}
      >
        Vote Author
      </Button>

      <div className="author-articles">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ArticleResource
              title={'lorem'}
              description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit`}
              imgURL={
                'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
              }
              link={'https://www.lorem.com'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ArticleResource
              title={'lorem'}
              description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit`}
              imgURL={
                'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
              }
              link={'https://www.lorem.com'}
            />
          </Grid>
        </Grid>
      </div>

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
