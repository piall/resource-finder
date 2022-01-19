import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Modal, TextField, Grid } from '@material-ui/core';
import { HiPlus, HiPencil, HiOutlineTrash } from 'react-icons/hi';
import AdminLayout from '../../../src/components/layout/AdminLayout';
import Topics from '../../../src/components/private/topic/Topics';
import AxiosMethod from '../../../src/axios/AxiosMethod';
import { API_AddTopic, API_GetTopic } from '../../../src/routes/apiRoute';
import TopicCard from '../../../src/components/private/topic/TopicCard';
import { Toaster } from 'react-hot-toast';

export default function Topic() {
  const [addTopicModalOpen, setAddTopicModal] = useState(false);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);
  const [topics, setTopics] = useState([]);

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
    getTopic();
  };

  const getTopic = async () => {
    setLoading(true);
    const response = await AxiosMethod.getData(API_GetTopic);
    setLoading(false);
    console.log(response);
    setTopics(response.data);
  };

  useEffect(() => {
    getTopic();
  }, []);

  return (
    <AdminLayout>
      {toastStatus && <Toaster position="top-center" reverseOrder={false} />}
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

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {topics.map((topic) => {
          return (
            <Grid item>
              <TopicCard
                imageURL={topic.icon}
                voteCount="100"
                resourceCount="1"
                topicName={topic.name}
              />
            </Grid>
          );
        })}
      </Grid>

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
                disabled={!name || !icon}
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
