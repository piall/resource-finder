import { Card, CardContent, CardMedia } from '@material-ui/core';

export default function TopicCard({ imageURL, topicName }) {
  return (
    <Card className="topic-card-container">
      <CardMedia className="image-container">
        <img src={imageURL} alt="topic icon" />
      </CardMedia>
      <CardContent className="content">
        <h3>{topicName}</h3>
      </CardContent>
    </Card>
  );
}
