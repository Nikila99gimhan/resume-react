import { Typography } from "@material-ui/core";
import React from "react";
import myImage from "../../assets/images/profile.jpg";
import CostomTimeline from "../Timeline/Timeline";

import "./Profile.css";

const Portfolio = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Sam</Typography>
        <Typography className="title">Title</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="" />
      </figure>
      <div className="profile_information">
        <CostomTimeline />
        <br />
        <button>my Button</button>
      </div>
    </div>
  );
};

export default Portfolio;
