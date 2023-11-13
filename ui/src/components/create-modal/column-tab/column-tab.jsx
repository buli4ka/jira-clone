import React, { useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_COLUMN } from 'api/mutations';

const ColumnTab = () => {
  const [createCard] = useMutation(CREATE_COLUMN);

  const [columnTitle, setColumnTitle] = useState('');

  const handleTitleChange = ({target: {value}}) => {
    setColumnTitle(value);
  }

  const handleSubmit = async () => {
    await createCard({
      variables: {
        input: {
          columnTitle
        }
      }
    });
  }
  return (
    <div className="flex flex-col gap-5 h-full">
      <span className="font-semibold text-2xl">Add Column</span>
      <Paper className="p-5 flex flex-col h-full justify-between">
        <div className="my-5">
          <TextField fullWidth label="Title" variant="standard" value={columnTitle} onChange={handleTitleChange}/>
        </div>
        <div className="mt-10 flex justify-end">
          <Button variant="outlined" onClick={handleSubmit} disabled={!columnTitle}>Submit</Button>
        </div>
      </Paper>
    </div>)
};

export default ColumnTab;
