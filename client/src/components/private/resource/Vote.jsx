import { Button } from '@material-ui/core';
import { MdHowToVote } from 'react-icons/md';

export default function Vote({
  handleVoteModal,
  voteType,
  voteCount,
  topic,
  resourceID,
}) {
  return (
    <div className="resource-left-container">
      <Button
        variant="contained"
        color="primary"
        startIcon={<MdHowToVote />}
        onClick={() => {
          handleVoteModal(resourceID);
        }}
      >
        Vote
      </Button>
      <p>
        {voteType} {voteCount !== 0 ? '(' + voteCount + ')' : ''}
      </p>
      <p>{topic}</p>
    </div>
  );
}
