import { IconButton, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const MuiCard = () => {
  return (<>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" aligm="left" component="span" inline >
            Shoe
          </Typography>
          <Typography gutterBottom variant="h5" component="span" align="right" inline>
            500
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Shoe ranging across all continents except Antarcticaranging across all continents except Antarctica
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Share
        </Button>
        <IconButton aria-label="Example">
          <FontAwesomeIcon icon={faEdit} />
        </IconButton>
        <IconButton aria-label="Example">
          <FontAwesomeIcon icon={faTrash} />
        </IconButton>

      </CardActions>
    </Card>
  </>);
}

export default MuiCard;