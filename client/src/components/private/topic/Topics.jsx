import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { API_GetTopic } from '../../../routes/apiRoute';
import AxiosMethod from '../../../axios/AxiosMethod';

import TopicCard from './TopicCard';

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);

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
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {topics.map((topic) => {
        return (
          <Grid item>
            <Link href="/user/resource/js">
              <TopicCard imageURL={topic.icon} topicName={topic.name} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
