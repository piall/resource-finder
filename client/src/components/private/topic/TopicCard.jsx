import { Card, CardContent, CardMedia } from '@material-ui/core';

export default function TopicCard({
  imageURL,
  topicName,
  voteCount,
  resourceCount,
}) {
  return (
    <Card className="topic-card-container">
      <CardMedia className="image-container">
        <img src={imageURL} alt="topic icon" />
      </CardMedia>
      <CardContent className="content">
        <h3>{topicName}</h3>
        {/* <p>{voteCount} vote</p>
        <p>{resourceCount} resources</p> */}
      </CardContent>
    </Card>
  );
}
