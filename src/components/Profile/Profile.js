import { Typography } from "@material-ui/core";
import React from "react";

const Portfolio = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Sam</Typography>
        <Typography className="name">Sam</Typography>
      </div>
      <figure className="profile_image">
        <img src=" " alt="" />
      </figure>
      <div className="profile_information">
        Insert Timeline
        <br />
        <button>my Button</button>
      </div>
    </div>
  );
};

export default Portfolio;
