import React from "react";
import './Resume.css';
import {Grid, Typography} from "@material-ui/core";
import resumeData from "../../utils/resumeData";

const Resume = () => {
  return (

      <>
        {/* About me*/}

        <Grid container className=''>
            <Grid item className='section_title' >
                <span></span>
                <h6>About Me</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography className={'aboutme_text'}>{resumeData.about}</Typography>
            </Grid>
        </Grid>


          {/* Educational And Experiences*/}
        <Grid container className='section'></Grid>

        {/* Services*/}

        <Grid container className='section'></Grid>

        {/*Skills*/}

        <Grid container className='section'></Grid>

        {/*Contact*/}

        <Grid container className='section'></Grid>


      </>



  );
};

export default Resume;
