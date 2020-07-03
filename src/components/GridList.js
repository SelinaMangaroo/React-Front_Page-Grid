import React from "react";
import GridItem from "./GridItem";

function GridList(props) {
  return (
    <div>
      <br></br>

      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
          {props.gridItems.map((item) => {
            return <GridItem key={item.key} gridItem={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default GridList;
