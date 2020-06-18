import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import "../App.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    boxShadow: "1px 1px 1px #9E9E9E",
  },
});

function GridItem({ gridItem }) {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Card className={classes.root} variant="outlined">
        <CardMedia>
          <div
            className="image"
            dangerouslySetInnerHTML={{ __html: gridItem.media_tag }}
          />
        </CardMedia>

        <CardContent>
          <Typography align="left" display="inline" variant="caption">
            <div
              className="caption"
              dangerouslySetInnerHTML={{ __html: gridItem.caption }}
            />
          </Typography>
        </CardContent>

        <Divider />

        <CardActions>
          <Button variant="outlined" color="primary" size="small">
            <a className="url" href={gridItem.url} rel="noopener">
              URL
            </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default GridItem;
