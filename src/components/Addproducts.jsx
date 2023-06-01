import React, { useState } from "react";

function Addproducts(props) {
    const [produsts , setProducts] = useState("");
  return (
    <>
      <div id="container">
        <div className="inputProfile">
          <label>Tilte</label><br />
          <input className="form-control input" type="text"/>
          <br />
          <label>Image URL</label><br />
          <input
            className="form-control input"
          />
          <br />
          <label>Price</label> <br />
          <input
            className="form-control input"
          />
          <label className="textarea">Description</label><br />
          <textarea form-control name="status" cols="70" rows="10" ></textarea>
        </div>
      </div>
    </>
  );
}

export default Addproducts;
