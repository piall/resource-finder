import Link from 'next/link';
import { Grid } from '@material-ui/core';

import TopicCard from './TopicCard';

export default function Topics() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <Link href="/user/resource/js">
          <TopicCard
            imageURL="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            voteCount="10"
            resourceCount="58"
          />
        </Link>
      </Grid>
    </Grid>
  );
}
