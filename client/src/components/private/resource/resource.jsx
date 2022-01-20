import { Card, CardMedia, CardContent } from '@material-ui/core';

export default function Resource({ link, imgURL, title, description }) {
  return (
    <a href={link} target="_blank">
      <Card className="resource-card-container">
        <CardMedia className="image-container">
          <img src={imgURL} alt="icon" />
        </CardMedia>
        <CardContent className="content">
          <h4>{title}</h4>
          <p>{description}</p>
          <p className="link">{link}</p>
        </CardContent>
      </Card>
    </a>
  );
}
