'use client'
import { useState } from "react";
import { Board } from "@/types/board";

export const useKanban = (board: Board) => {
  const [columns, updateColumns] = useState(board.columns);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const originColumn = parseInt(result.source.droppableId)
    const originIndex = result.source.index

    const desinationColumn = parseInt(result.destination.droppableId)
    const desinationIndex = result.destination.index

    const items = Array.from(columns);

    const [reorderedItem] = items[originColumn].cards.splice(originIndex, 1);
    items[desinationColumn].cards.splice(desinationIndex, 0, reorderedItem);

    updateColumns(items);
  }

  const viewProps = { handleOnDragEnd, columns }

  return viewProps
}