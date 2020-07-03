import React from "react";

import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

import "../App.css";

function GridItem({ gridItem }) {
  return (
    <div className="col mb-4">
      <div className="card-container">
        <Card>
          <div
            className="img"
            dangerouslySetInnerHTML={{ __html: gridItem.media_tag }}
          />
          <Card.Body>
            <Card.Text>
              <div
                className="caption"
                dangerouslySetInnerHTML={{ __html: gridItem.caption }}
              />
            </Card.Text>
            <Button variant="outline-primary" size="sm">
              <a className="url" href={gridItem.url} rel="noopener">
                URL
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default GridItem;
