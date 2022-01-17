import { useState } from 'react';
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
import { rows } from './dummyData';

export default function Topic() {
  //modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  //modal handler
  const handleDeleteModal = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  return (
    <AdminLayout>
      <h2 className="page-title">Resources</h2>
      <TableContainer className="custom-table-container" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>URL</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Added By</TableCell>
              <TableCell>
                {/* <HiOutlineTrash onClick={handleDeleteModal} /> */}
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  <a href={row.url} target="_blank">
                    {row.url}
                  </a>
                </TableCell>
                <TableCell>{row.topic}</TableCell>
                <TableCell>{row.addedBy}</TableCell>
                <TableCell>
                  <Button>
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
