import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const setUserData = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      password !== "" &&
      name !== undefined &&
      password !== undefined &&
      name !== null &&
      password !== null
    ) {
      localStorage.setItem("userName", name);
    }
  };


  return (
    <>
      <form className="res-form" onSubmit={setUserData}>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn" onClick={setUserData}>
          <NavLink  className="btn btn-primary" to="/myuser">
            Submit
          </NavLink>
        </button>
      </form>
      <div class="print-name my-5">
        <h2 className="display-4 text-center">{name}</h2>
      </div>
    </>
  );
}


export default Home;