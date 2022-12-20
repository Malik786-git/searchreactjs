import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const ResList = () => {
  const [restuarant, setRestuarant] = useState([]);
  const [loadmore, setLoadMore] = useState(5);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=${loadmore}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].id) {
          setLoading(false);
          setRestuarant(data);
        } else {
          setLoading(false);
          console.log("error");
        }
      });
  }, [loadmore]);

  console.log(restuarant);

  return (
    <div>
      <div className="search">
        <input
          className="form-control shadow-none"
          list="datalistOptions"
          id="searchid"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Type to search..."
        />
        <label htmlFor="searchid">
        <i class="fa fa-search" for='searchid' aria-hidden="true"></i>
        </label>
        {/* <button className="btn btn-success">search</button> */}
      </div>
      <h1 className="display-1 text-center">Avalaible Shop's</h1>
      {restuarant !== undefined &&
      restuarant !== null &&
      restuarant !== "" &&
      restuarant.length > 0
        ? restuarant
            .filter((data) => data.title.toLowerCase().includes(searchInput.toLocaleLowerCase()))
            .map((item) => (
              // <p style={{color:"red"}}>{item.title}</p>
              <Card
                style={{ width: "36rem" }}
                className="my-3 mx-auto bg-success text-light shop-card"
              >
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-warning">
                    Price: ${item.price}
                  </Card.Subtitle>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            ))
        : ""}
      {loading == true ? 
      <div className="spinner">
      <div className="spinner-border" role="status"></div> 
      </div>
      
      : ""}
    </div>
  );
};

export default ResList;
