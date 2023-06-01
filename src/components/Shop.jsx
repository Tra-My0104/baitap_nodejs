import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

function Shop(props) {
  const [prodcuts, setProducts] = useState([]);

  // lấy dữ liệu từ backend sang frontend
  const loadProduct = async () => {
    try {
      const reponse = await axios.get("http://localhost:4000/api/v1/products");
      // console.log(reponse.data.data);
      setProducts(reponse.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className="containerProducts">
      {prodcuts.map((e) => (
        <Card style={{ width: "18rem" }}>
          <h5>{e.Tilte}</h5>
          <Card.Img variant="top" src={e.ImgProduct} className="cartImg" />
          <Card.Body>
            <Card.Title className="price">{e.Price}</Card.Title>
            <Card.Text>{e.Descriptions}</Card.Text>
            <Button className="btnAdd">Add to cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Shop;
