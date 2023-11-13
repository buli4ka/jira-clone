import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_CARD } from 'api/mutations';

const CardTab = ({ columns }) => {
  const [createCard] = useMutation(CREATE_CARD);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [columnTitle, setColumnTitle] = useState('');

  const handleTitleChange = ({ target: { value } }) => {
    setTitle(value);
  };
  const handleDescriptionChange = ({ target: { value } }) => {
    setDescription(value);
  };

  const handleColumnChange = ({ target: { value } }) => {
    setColumnTitle(value);
  };

  const handleSubmit = async () => {
    await createCard({
      variables: {
        input: {
          title, description, columnTitle
        }
      }
    });
  };

  return (<div className="flex flex-col gap-5 h-full">
    <span className="font-semibold text-2xl">Add Card</span>
    <Paper className="p-5 flex-col h-full flex gap-5 justify-between">
      <TextField fullWidth label="Title" variant="standard" value={title} onChange={handleTitleChange}/>
      <TextField fullWidth label="Description" variant="standard" value={description} onChange={handleDescriptionChange}/>
      <FormControl>
        <InputLabel id="column-select-label">Column</InputLabel>
        <Select label="Column" value={columnTitle} onChange={handleColumnChange} fullWidth variant="standard"
                labelId="column-select-label">
          {columns?.map(({ columnTitle }) => <MenuItem value={columnTitle} key={columnTitle}>{columnTitle}</MenuItem>)}
        </Select>
      </FormControl>
      <div className="mt-10 flex justify-end">
        <Button variant="outlined" onClick={handleSubmit} disabled={!title}>Submit</Button>
      </div>
    </Paper>
  </div>);
};

export default CardTab;
