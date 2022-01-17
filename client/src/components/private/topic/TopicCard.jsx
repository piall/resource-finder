import { Card, CardContent, CardMedia } from '@material-ui/core';

export default function TopicCard({ imageURL, voteCount, resourceCount }) {
  return (
    <Card className="topic-card-container">
      <CardMedia className="image-container">
        <img src={imageURL} alt="topic icon" />
      </CardMedia>
      <CardContent className="content">
        <p>{voteCount} vote</p>
        <p>{resourceCount} resources</p>
      </CardContent>
    </Card>
  );
}
