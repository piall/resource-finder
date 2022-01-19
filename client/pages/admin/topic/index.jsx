import Link from 'next/link';
import { useState } from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import { HiPlus, HiPencil, HiOutlineTrash } from 'react-icons/hi';
import AdminLayout from '../../../src/components/layout/AdminLayout';
import Topics from '../../../src/components/private/topic/Topics';

export default function Topic() {
  const [addTopicModalOpen, setAddTopicModal] = useState(false);
  const [topicName, setTopicName] = useState('');
  const [image, setImage] = useState('');

  const handleTopicModal = () => {
    setAddTopicModal(!addTopicModalOpen);
  };

  const addTopic = async () => {};

  return (
    <AdminLayout>
      <div className="title-with-btn-container">
        <h2 className="title">Topics</h2>
        <Button
          variant="contained"
          className="purple"
          startIcon={<HiPlus />}
          onClick={handleTopicModal}
        >
          Add Topic
        </Button>
      </div>

      <Topics />

      <Modal
        open={addTopicModalOpen}
        onClose={handleTopicModal}
        aria-labelledby="add-topic-modal"
      >
        <div className="modal-container">
          <div className="modal-body">
            <TextField
              required
              fullWidth
              label="Topic Name"
              placeholder="Enter Topic Name"
              variant="outlined"
              onChange={(e) => {
                setTopicName(e.target.value);
              }}
            />

            <TextField
              required
              fullWidth
              variant="outlined"
              type="file"
              onChange={(e) => {
                setTopicName(e.target.value);
              }}
            />
            <center>
              <Button
                variant="contained"
                color="primary"
                startIcon={<HiPlus />}
                onClick={addTopic}
              >
                Add
              </Button>
            </center>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
}
