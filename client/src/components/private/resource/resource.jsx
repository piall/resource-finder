import Link from 'next/link';
import { Card, CardMedia, CardContent } from '@material-ui/core';

export default function Resource({ link, imgURL, title, description }) {
  return (
    <Link href={link}>
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
    </Link>
  );
}
