import Link from 'next/link';
import { Grid } from '@material-ui/core';

import Navbar from '../../src/components/private/user/Navbar';
import Topics from '../../src/components/private/topic/Topics';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page-container-scroll">
        <div className="page-container">
          <div className="center-container">
            <Topics />
          </div>
        </div>
      </div>
    </>
  );
}
