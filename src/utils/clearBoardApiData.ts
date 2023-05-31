import { BoardApi } from "@/config/types/api/boardApi"
import { Board } from "@/config/types/board"
import { Column } from "@/config/types/column"

export const clearData = (board: BoardApi) => {
  const newColumns: Column[] =  board.Columns.map( column => {
    const columnData = column.columns[0]

    return {...columnData, cards: columnData.Cards[0] || []}
  })

  const newData: Board = {...board, columns: newColumns}

  return newData
}