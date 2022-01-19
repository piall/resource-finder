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
  API_DisableUser,
  API_GetResource,
  API_GetTopic,
  API_GetUser,
} from '../../../src/routes/apiRoute';
import AxiosMethod from '../../../src/axios/AxiosMethod';
import { Toaster } from 'react-hot-toast';

export default function Account() {
  const [users, setUsers] = useState([]);
  const [clickedUser, setClickedUser] = useState('');
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

  const disableUser = async () => {
    setLoading(true);
    setToastStatus(true);
    const response = await AxiosMethod.postData(
      API_DisableUser,
      {
        id: clickedUser,
      },
      'Disabled'
    );
    handleDeleteModal();
    setLoading(false);
    getUser();
    console.log(response);
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
              <TableCell>Status</TableCell>
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
                  {user.accountDisabled ? 'Disabled' : 'Active'}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      setClickedUser(user._id);
                    }}
                    disabled={user.accountDisabled}
                  >
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
              <Button
                variant="contained"
                className="danger"
                onClick={() => {
                  disableUser();
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
