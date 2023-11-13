import React, { useState } from 'react';

const Column = ({ children, board, onDrop }) => {
  const [extraStyle, setExtraStyle] = useState('');

  const onDragOverHandler = (e) => {
    e.preventDefault();
    setExtraStyle('bg-gray-100');
  };

  const onDragLeaveEndHandler = () => {
    setExtraStyle('');
  };
  const onDropHandler = async (e) => {
    e.preventDefault();
    await onDrop({ columnTitleTo: board.columnTitle });
    onDragLeaveEndHandler();
  };

  return (

    <div className={`p-3 border-x-2 flex flex-col min-w-200 ${extraStyle}`}>
    <span className="border-y-2 text-center py-2 font-semibold">{board.columnTitle}</span>
    {children}
    <div className="flex-1" onDragOver={onDragOverHandler} onDragEnd={onDragLeaveEndHandler}
         onDragLeave={onDragLeaveEndHandler} onDrop={onDropHandler}/>
  </div>);
};

export default Column;
