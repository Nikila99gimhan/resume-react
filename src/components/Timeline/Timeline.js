import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import "./Timeline.css";
import { Title } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const CostomTimeline = ({ title }) => {
  return (
    <Timeline className={"timeline"}>
      {/*Item Header */}
      <TimelineItem className={"timeline_firstitem"}>
        <TimelineSeparator>
          <TimelineDot className={"timelinee_dot_header"} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {/*Remaining Items */}
        <TimelineSeparator>
          <TimelineDot className={"timelinee_dot"} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CostomTimeline;
