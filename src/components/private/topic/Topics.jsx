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
            voteCount="100"
            resourceCount="1"
          />
        </Link>
      </Grid>
      <Grid item>
        <Link href="/user/resource/python">
          <TopicCard
            imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
            voteCount="0"
            resourceCount="1"
          />
        </Link>
      </Grid>
    </Grid>
  );
}
