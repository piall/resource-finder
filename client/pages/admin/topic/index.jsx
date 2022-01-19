import Link from 'next/link';
import { useState } from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import { HiPlus, HiPencil, HiOutlineTrash } from 'react-icons/hi';
import AdminLayout from '../../../src/components/layout/AdminLayout';
import Topics from '../../../src/components/private/topic/Topics';
import AxiosMethod from '../../../src/axios/AxiosMethod';
import { API_AddTopic } from '../../../src/routes/apiRoute';

export default function Topic() {
  const [addTopicModalOpen, setAddTopicModal] = useState(false);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);

  const handleTopicModal = () => {
    setAddTopicModal(!addTopicModalOpen);
  };

  const addTopic = async () => {
    setLoading(true);
    setToastStatus(true);
    const data = {
      name,
      icon,
    };
    const response = await AxiosMethod.postData(
      API_AddTopic,
      data,
      'Successfully Added Topic'
    );
    console.log(response);
    setLoading(false);
    handleTopicModal();
  };

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
                setName(e.target.value);
              }}
            />

            <TextField
              required
              fullWidth
              label="Image URL"
              placeholder="Enter Image URL"
              variant="outlined"
              onChange={(e) => {
                setIcon(e.target.value);
              }}
            />

            {/* <TextField
              required
              fullWidth
              variant="outlined"
              type="file"
              onChange={(e) => {
                setTopicName(e.target.value);
              }}
            /> */}
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
