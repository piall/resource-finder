import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
} from '@material-ui/core';
import { HiOutlineTrash } from 'react-icons/hi';

import AdminLayout from '../../../src/components/layout/AdminLayout';
import {
  API_DeleteResource,
  API_GetResource,
  API_GetTopic,
  API_GetUser,
} from '../../../src/routes/apiRoute';
import AxiosMethod from '../../../src/axios/AxiosMethod';
import { Toaster } from 'react-hot-toast';

export default function Topic() {
  const [resourceData, setResourceData] = useState([]);
  const [clickedResource, setClickedResource] = useState();
  const [users, setUsers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);
  //modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  //modal handler
  const handleDeleteModal = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  const getResource = async () => {
    setLoading(true);
    const response = await AxiosMethod.getData(API_GetResource);
    setLoading(false);
    console.log(response);
    setResourceData(response.data);
  };

  const getUser = async () => {
    setLoading(true);
    const response = await AxiosMethod.getData(API_GetUser);
    setLoading(false);
    console.log(response);
    setUsers(response.data);
  };

  const getTopic = async () => {
    setLoading(true);
    const response = await AxiosMethod.getData(API_GetTopic);
    setLoading(false);
    console.log(response);
    setTopics(response.data);
  };

  const getTopicName = (id) => {
    console.log(id, topics);
    const topic = topics.find((topic) => topic._id === id);
    return topic ? topic.name : '';
  };

  const getUserEmail = (id) => {
    console.log(id);

    const user = users.find((user) => user._id === id);
    console.log(user);
    return user ? user.email : '';
  };

  const deleteResource = async () => {
    setLoading(true);
    setToastStatus(true);
    await AxiosMethod.deleteData(
      `${API_DeleteResource}/${clickedResource}`,
      'Deleted'
    );
    setLoading(false);
    getResource();
    handleDeleteModal();
  };

  useEffect(() => {
    getResource();
    getUser();
    getTopic();
  }, []);

  return (
    <AdminLayout>
      {toastStatus && <Toaster position="top-center" reverseOrder={false} />}
      <h2 className="page-title">Resources</h2>
      <TableContainer className="custom-table-container" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>URL</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Added By</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 &&
              topics.length > 0 &&
              resourceData.map((resource) => (
                <TableRow key={resource._id}>
                  <TableCell>{resource.title}</TableCell>
                  <TableCell>
                    <a href={resource.link} target="_blank">
                      {resource.link}
                    </a>
                  </TableCell>
                  <TableCell>{getTopicName(resource.topicID)}</TableCell>
                  <TableCell>{getUserEmail(resource.userID)}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setClickedResource(resource._id);
                      }}
                    >
                      <HiOutlineTrash onClick={handleDeleteModal} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={deleteModalOpen}
        onClose={handleDeleteModal}
        aria-labelledby="delete-modal"
      >
        <div className="modal-container">
          <div className="modal-body">
            <p>Continue to delete?</p>
            <div className="btn-container">
              <Button
                variant="contained"
                className="danger"
                onClick={() => {
                  deleteResource();
                }}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                className="purple"
                onClick={handleDeleteModal}
              >
                No
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
}
