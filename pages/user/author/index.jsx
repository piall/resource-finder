import { useState } from 'react';
import { Grid, Button, Modal, TextField } from '@material-ui/core';
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
        <div className="btn-container">
          <Button
            variant="contained"
            color="primary"
            startIcon={<HiPlus />}
            onClick={handleAddAuthorModal}
          >
            Add Author
          </Button>
          <Button
            variant="contained"
            className="danger"
            startIcon={<HiOutlineTrash />}
          >
            Delete Author
          </Button>
        </div>

        <div className="authors-container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className="author-container">
                <img src="https://v4.mui.com/static/ads-in-house/tidelift.png" />
                <h2>Md. Pial Ahamed</h2>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="author-container">
                <img src="https://v4.mui.com/static/ads-in-house/tidelift.png" />
                <h2>Md. Pial Ahamed</h2>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="author-container">
                <img src="https://v4.mui.com/static/ads-in-house/tidelift.png" />
                <h2>Md. Pial Ahamed</h2>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="author-container">
                <img src="https://v4.mui.com/static/ads-in-house/tidelift.png" />
                <h2>Md. Pial Ahamed</h2>
              </div>
            </Grid>
          </Grid>
        </div>

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
