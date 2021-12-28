import { useState } from 'react';
import {
  Button,
  Modal,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
} from '@material-ui/core';
import { MdHowToVote } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';

export default function AuthorDetails() {
  //modal state
  const [voteOpen, setVoteOpen] = useState(false);

  //modal handler
  const handleVoteModal = () => {
    setVoteOpen(!voteOpen);
  };

  return (
    <div className="page-container-scroll">
      <div className="page-container">
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
        <div className="articles-container">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          perspiciatis quis aspernatur, repellendus amet veniam voluptas minima
          perferendis adipisci dolores praesentium enim nesciunt! Soluta iusto
          voluptatum unde, id quia ut.
        </div>

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
              >
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
      </div>
    </div>
  );
}
