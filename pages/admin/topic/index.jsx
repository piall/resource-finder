import { Button } from '@material-ui/core';
import { HiPlus, HiPencil, HiOutlineTrash } from 'react-icons/hi';

export default function Topic() {
  return (
    <div className="page-container-scroll">
      <div className="page-container">
        <div className="btn-container">
          <Button variant="contained" className="purple" startIcon={<HiPlus />}>
            Add Topic
          </Button>
          <Button variant="contained" color="primary" startIcon={<HiPencil />}>
            Edit Topic
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<HiOutlineTrash />}
          >
            Delete Topic
          </Button>
        </div>
      </div>
    </div>
  );
}
