import React from "react";
import Grid from "@material-ui/core/Grid";
import GridItem from "./GridItem";

function GridList(props) {
  return (
    <div>
      <br></br>
      <Grid container spacing={2}>
        {props.gridItems.map((item) => {
          return <GridItem key={item.key} gridItem={item} />;
        })}
      </Grid>
    </div>
  );
}

export default GridList;
