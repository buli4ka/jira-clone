import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import CreateModal from 'components/create-modal/create-modal';

const Create = ({ Icon }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (<div>
    <IconButton
      onClick={handleOpen}
      data-testid="kpi-icon-button"
    >
      <Icon color="primary"/>
    </IconButton>
   <CreateModal onClose={handleClose} onOpen={open} />

  </div>);
};

export default Create;
