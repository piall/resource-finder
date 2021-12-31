import { useState } from 'react';
import Link from 'next/link';
import { Grid, Button, Modal, TextField } from '@material-ui/core';
import { HiPlus, HiPencil, HiOutlineTrash } from 'react-icons/hi';
import UserLayout from '../../../src/components/layout/UserLayout';

export default function Topic() {
  //modal state
  const [addAuthorOpen, setAddAuthorOpen] = useState(false);

  //modal handler
  const handleAddAuthorModal = () => {
    setAddAuthorOpen(!addAuthorOpen);
  };

  return (
    <UserLayout>
      <div className="btn-container">
        <Button
          variant="contained"
          color="primary"
          startIcon={<HiPlus />}
          onClick={handleAddAuthorModal}
        >
          Add Author
        </Button>
      </div>

      <div className="authors-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Link href="/user/author/1">
              <div className="author-container">
                <img src="https://source.unsplash.com/1600x900/?boy" />
                <h2>Md. Pial Ahamed</h2>
                <p>0 vote</p>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="author-container">
              <img src="https://source.unsplash.com/1600x900/?girl" />
              <h2>Sadie W. Ramos</h2>
              <p>233 votes</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="author-container">
              <img src="https://source.unsplash.com/1600x900/?old" />
              <h2>Doris W. Blount</h2>
              <p>50 votes</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="author-container">
              <img src="https://source.unsplash.com/1600x900/?anime" />
              <h2>Kyra</h2>
              <p>0 vote</p>
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
    </UserLayout>
  );
}
