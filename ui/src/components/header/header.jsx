import React from 'react';
import { Paper } from '@mui/material';
import Widget from 'components/header/components/widget/widget';
import AddIcon from '@mui/icons-material/Add';
import Face from '@mui/icons-material/Face';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Create from 'components/header/components/create/create';

const Header = () => {
  return (
    <Paper className="w-full h-14 mb-5 mt-3 px-3 flex items-center justify-between">
    <div className="max-h-10">
      <img className="object-contain h-10"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Jira_%28Software%29_logo.svg/2560px-Jira_%28Software%29_logo.svg.png"
           alt="Logo"/>
    </div>
    <div className="flex gap-4">
      <Create Icon={AddIcon}/>
      <Widget Icon={CalendarMonth}/>
      <Widget Icon={Face}/>
    </div>
  </Paper>);
};

export default Header;
