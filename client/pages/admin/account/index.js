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
import { AiOutlineStop } from 'react-icons/ai';

import AdminLayout from '../../../src/components/layout/AdminLayout';
import {
  API_GetResource,
  API_GetTopic,
  API_GetUser,
} from '../../../src/routes/apiRoute';
import AxiosMethod from '../../../src/axios/AxiosMethod';

export default function Account() {
  const [resourceData, setResourceData] = useState([]);
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

  const getUser = async () => {
    setLoading(true);
    const response = await AxiosMethod.getData(API_GetUser);
    setLoading(false);
    console.log(response);
    setUsers(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AdminLayout>
      {toastStatus && <Toaster position="top-center" reverseOrder={false} />}
      <h2 className="page-title">Accounts</h2>
      <TableContainer className="custom-table-container" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>
                {/* <HiOutlineTrash onClick={handleDeleteModal} /> */}
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.isUser ? 'User' : 'Admin'}</TableCell>
                <TableCell>
                  <Button>
                    <AiOutlineStop onClick={handleDeleteModal} />
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
            <p>Continue to disable?</p>
            <div className="btn-container">
              <Button variant="contained" className="danger">
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
