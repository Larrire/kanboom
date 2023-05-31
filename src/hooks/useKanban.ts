'use client'
import { useState } from "react";
// import { Board } from "@/config/types/board";
import { DropResult } from "react-beautiful-dnd";
import { Column } from "@/config/types/column";

export const useKanban = (initial: Column[]) => {
  const [columns, updateColumns] = useState(initial);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const params = {columns, result}

    const items = (result.type === 'CARD')
      ? movingCard(params)
      : movingColumn(params)

    updateColumns(items);
  }

  const viewProps = { handleOnDragEnd, columns }

  return viewProps
}

type MovingParams = {
  columns: Column[],
  result: DropResult
}

const movingCard = (params: MovingParams) => {
  const {columns, result} = params

  if (!result.destination) return [] as Column[]
  
  const originColumn = parseInt(result.source.droppableId.slice(-1))
  const originIndex = result.source.index

  const desinationColumn = parseInt(result.destination.droppableId.slice(-1))
  const desinationIndex = result.destination.index

  const items = Array.from(columns);

  const [reorderedItem] = items[originColumn].cards.splice(originIndex, 1);
  items[desinationColumn].cards.splice(desinationIndex, 0, reorderedItem);

  return items
}

const movingColumn = (params: MovingParams) => {
  const {columns, result} = params

  if (!result.destination) return [] as Column[]
  
  const originIndex = result.source.index
  const desinationIndex = result.destination.index

  const items = Array.from(columns);

  const [reorderedItem] = items.splice(originIndex, 1);
  items.splice(desinationIndex, 0, reorderedItem);

  return items
}