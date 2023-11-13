import React, { useState } from 'react';

export const CardDnd = ({
                          title, description, card, onSelect, onDrop, board,
                        }) => {
  const [extraStyle, setExtraStyle] = useState('');

  const onDragOverHandler = (e) => {
    e.preventDefault();
    setExtraStyle('bg-gray-100');
  };

  const onDragLeaveEndHandler = () => {
    setExtraStyle('');
  };

  const onDragStartHandler = (e, card, board) => {
    onSelect({ cardId: card.id, columnTitleFrom: board.columnTitle });
    setExtraStyle('opacity-100');

  };
  const onDropHandler = async (e, card, board) => {
    e.preventDefault();
    await onDrop({ cardAfterId: card.id, columnTitleTo: board.columnTitle });
  };

  return (<div
    className={`m-2 rounded px-2 py-1 border cursor-grab ${extraStyle}`}
    draggable
    onDragOver={onDragOverHandler}
    onDragLeave={onDragLeaveEndHandler}
    onDragEnd={onDragLeaveEndHandler}
    onDragStart={(e) => onDragStartHandler(e, card, board)}
    onDrop={(e) => onDropHandler(e, card, board)}>
    <div className="border-b-2 text-2xl py-1 w-64">
      <span>{title}</span>
    </div>
    <div className="py-1">
      <span className="line-clamp-3">
        {description}
      </span>
    </div>

  </div>);
};




