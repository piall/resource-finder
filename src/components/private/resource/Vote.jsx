import { Button } from '@material-ui/core';
import { MdHowToVote } from 'react-icons/md';

export default function Vote({ handleVoteModal, voteType, voteCount, topic }) {
  return (
    <div className="resource-left-container">
      <Button
        variant="contained"
        color="primary"
        startIcon={<MdHowToVote />}
        onClick={handleVoteModal}
      >
        Vote
      </Button>
      <p>
        {voteType} ({voteCount})
      </p>
      <p>{topic}</p>
    </div>
  );
}
