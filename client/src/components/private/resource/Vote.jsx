import { Button } from '@material-ui/core';
import { MdHowToVote } from 'react-icons/md';
import { getFromLocalStorage } from '../../../helpers/localStorage';

export default function Vote({
  handleVoteModal,
  voteType,
  voteCount,
  topic,
  resourceID,
}) {
  const voteStatus = () => {
    const user = getFromLocalStorage('user');
    if (user) {
      const found = user.votedResources.find(
        (resource) => resource.resourceID === resourceID
      );
      return found ? true : false;
    }
    return false;
  };

  return (
    <div className="resource-left-container">
      <Button
        variant="contained"
        color="primary"
        startIcon={<MdHowToVote />}
        onClick={() => {
          handleVoteModal(resourceID);
        }}
        disabled={voteStatus()}
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
