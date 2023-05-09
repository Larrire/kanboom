'use client'
import { useState } from "react";
import { Board } from "@/types/board";
import { Column } from "@/types/column";

export type ViewProps = {
  handleOnDragEnd: (result: any) => void,
  columns: {columns: Column[]}[]
}

type Props = {
  board: Board,
  View: (props: ViewProps) => JSX.Element,
}

export const KanbanBloc = ({board, View}: Props) => {
  const [columns, updateColumns] = useState(board.Columns);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const originColumn = parseInt(result.source.droppableId)
    const originIndex = result.source.index

    const desinationColumn = parseInt(result.destination.droppableId)
    const desinationIndex = result.destination.index

    // @ts-ignore
    const items = Array.from(columns);

    const [reorderedItem] = items[originColumn].columns[0].Cards.splice(originIndex, 1);
    items[desinationColumn].columns[0].Cards.splice(desinationIndex, 0, reorderedItem);

    updateColumns(items);
  }

  const viewProps = { handleOnDragEnd, columns }

  return (
    <View {...viewProps}/>
  )
}