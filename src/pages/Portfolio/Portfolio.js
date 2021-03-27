import React, {useState} from "react";
import './Portfolio.css'
import {Grid, Tab, Tabs} from "@material-ui/core";

const Portfolio = () => {

    const [tabValue,setTabValue] = useState('All')

  return (
      <Grid container className={'section pb_45 pt_45'}>
        <Grid item className={'section_title mb-30'}>
          <span></span>
          <h6 className={'section_title_text'}>Portfolio </h6>
        </Grid>


        {/*Tabs */}
        <Grid item xs={12} >
            <Tabs value={tabValue} indicatorColor={'white'} className={'custom_tabs'} onCharge={(event,newValue) => setTabValue(newValue)}>
                <Tab label={'All'} value={'All'} className={tabValue == 'All' ? 'customTabs_item_active' : 'customTabs_item'} />
            </Tabs>

        </Grid>
      </Grid>
  );
};

export default Portfolio;
