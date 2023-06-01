import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products(props) {
  return (
    <div className="containerProducts">
      <Card style={{ width: "18rem" }}>
        <h5>Harry Potter</h5>
        <Card.Img
          variant="top"
          src="https://cdn.baoquocte.vn/stores/news_dataimages/2022/112022/05/20/loat-phim-harry-potter-bat-ngo-tro-lai-rap-chieu-sau-11-nam-vang-bong-20221105203536.jpg?rt=20221105203537"
          className="cartImg"
        />
        <Card.Body>
          <Card.Title className="price">$12</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="containerBtn">
            <Button className="btnAdd1">Add to cart</Button>
            <Button className="btnDetail">Details</Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <h5>Harry Potter</h5>
        <Card.Img
          variant="top"
          src="https://cdn.baoquocte.vn/stores/news_dataimages/2022/112022/05/20/loat-phim-harry-potter-bat-ngo-tro-lai-rap-chieu-sau-11-nam-vang-bong-20221105203536.jpg?rt=20221105203537"
          className="cartImg"
        />
        <Card.Body>
          <Card.Title className="price">$12</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="containerBtn">
            <Button className="btnAdd1">Add to cart</Button>
            <Button className="btnDetail">Details</Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <h5>Harry Potter</h5>
        <Card.Img
          variant="top"
          src="https://cdn.baoquocte.vn/stores/news_dataimages/2022/112022/05/20/loat-phim-harry-potter-bat-ngo-tro-lai-rap-chieu-sau-11-nam-vang-bong-20221105203536.jpg?rt=20221105203537"
          className="cartImg"
        />
        <Card.Body>
          <Card.Title className="price">$12</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="containerBtn">
            <Button className="btnAdd1">Add to cart</Button>
            <Button className="btnDetail">Details</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Products;
