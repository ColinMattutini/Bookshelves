import Reacct, { useState } from "react";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.homepage}>
      <div>
        <h2>Bookshelves</h2>
        <h2>Currently Reading</h2>
      </div>
    </div>
  );
};

export default Homepage;
