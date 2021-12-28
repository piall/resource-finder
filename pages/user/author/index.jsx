import { useState } from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import { HiPlus, HiPencil, HiOutlineTrash } from 'react-icons/hi';

export default function Topic() {
  //modal state
  const [addAuthorOpen, setAddAuthorOpen] = useState(false);
  const [voteOpen, setVoteOpen] = useState(false);

  //modal handler
  const handleAddAuthorModal = () => {
    setAddAuthorOpen(!addAuthorOpen);
  };

  return (
    <div className="page-container-scroll">
      <div className="page-container">
        <Button
          variant="contained"
          color="primary"
          startIcon={<HiPlus />}
          onClick={handleAddAuthorModal}
        >
          Add Author
        </Button>

        <Modal
          open={addAuthorOpen}
          onClose={handleAddAuthorModal}
          aria-labelledby="add-author-modal"
        >
          <div className="modal-container">
            <div className="modal-body">
              <TextField
                required
                fullWidth
                label="GitHub Handle"
                placeholder="Enter GitHub Handle"
                variant="outlined"
              />
              <center>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<HiPlus />}
                  onClick={handleAddAuthorModal}
                >
                  Add
                </Button>
              </center>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
