import React, { Component } from "react";
import GridItem from "./GridItem";

class GridList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
            {this.props.gridItems.map((item) => {
              return <GridItem key={item.key} gridItem={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default GridList;
