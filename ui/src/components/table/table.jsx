import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MOVE_CARD } from 'api/mutations';
import Column from 'components/column/column';
import { CardDnd } from 'components/card-dnd/card-dnd';
import { Paper } from '@mui/material';


const Table = ({
  refetch,
  boards,
               }) => {
  const [move] = useMutation(MOVE_CARD);
  const [dragCard, setDragCard] = useState();

  const onMove = async ({ columnTitleTo, cardAfterId }) => {

    if (!dragCard || dragCard?.columnTitleFrom === columnTitleTo) return;
    await move({
      variables: {
        input: {
          columnTitleFrom: dragCard?.columnTitleFrom, cardId: dragCard?.cardId, columnTitleTo, cardAfterId,
        }
      }
    });

    setDragCard(null);
    await refetch();
  };
  return (
    (<Paper className="inline-flex my-5 overflow-x-auto">
        {boards?.map((board) => <Column board={board} key={board.columnTitle} onDrop={onMove}>
          <div>{board.cards.map((card) => <CardDnd
            key={card.id}
            description={card.description}
            title={card.title}
            board={board}
            card={card}
            onSelect={setDragCard}
            onDrop={onMove}

          />)}</div>
        </Column>)}

      </Paper>
  ));
};

export default Table;
