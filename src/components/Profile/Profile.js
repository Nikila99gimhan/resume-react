import { Typography } from "@material-ui/core";
import React from "react";
import myImage from "../../assets/images/profile.jpg";
import CostomTimeline, { CostomTimelineSeparator } from "../Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutLinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import "./Profile.css";
import TimelineContent from "@material-ui/lab/TimelineContent";

const CostomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CostomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <Typography>
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography>
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Portfolio = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="" />
      </figure>
      <div className="profile_information">
        <CostomTimeline icon={<PersonOutlineOutLinedIcon />}>
          <CostomTimelineItem title="Name" text={resumeData.name} />
          <CostomTimelineItem title="Title" text={resumeData.title} />
          <CostomTimelineItem title="Email" text={resumeData.email} />
        </CostomTimeline>
        <br />
        <button>my Button</button>
      </div>
    </div>
  );
};

export default Portfolio;
