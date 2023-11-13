import React, { useState } from 'react';
import { Modal, Tab, Tabs } from '@mui/material';
import { TABS } from 'constants/tabs';
import CardTab from 'components/create-modal/card-tab/card-tab';
import ColumnTab from 'components/create-modal/column-tab/column-tab';
import { useQuery } from '@apollo/client';
import { GET_COLUMN_TITLES } from 'api/queries';


const CreateModal = ({ onOpen, onClose }) => {
  const [tab, setTab] = useState(TABS.CARD);
  const { data, refetch } = useQuery(GET_COLUMN_TITLES);
  const handleChange = (e, value) => {
    setTab(value);
  };

  const onCloseModal = async () => {
    await refetch();
    onClose();
  };

  return (<Modal
    open={onOpen}
    onClose={onCloseModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className="w-1/2 h-1/2 absolute bg-white translate-x-1/2 translate-y-1/2 ">
      <Tabs variant="fullWidth"
            value={tab}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary">
        <Tab className="flex-1" label="Create Card" value={TABS.CARD}></Tab>
        <Tab className="flex-1" label="Create Column" value={TABS.COLUMN}></Tab>
      </Tabs>
      <div className="m-5 h-4/5">
        {tab === TABS.CARD ? <CardTab columns={data?.getColumns}/> : <ColumnTab/>}
      </div>
    </div>
  </Modal>);
};

export default CreateModal;
