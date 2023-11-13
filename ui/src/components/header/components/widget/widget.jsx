import React, { useState } from 'react';
import { IconButton, Popover } from '@mui/material';

const Widget = ({Icon}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<div>
    <IconButton
      onClick={handleOpen}
      data-testid="kpi-icon-button"
    >
      <Icon color="primary" />
    </IconButton>
    <Popover
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      PaperProps={{ sx: { overflow: 'visible' } }}
    >
      <div className="w-44 h-44 p-5 font-semibold">
        <span>Some Logic could be added</span>
      </div>

    </Popover>
    </div>);
};

export default Widget;
