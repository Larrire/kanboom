import { BoardApi } from "@/types/api/boardApi"
import { Board } from "@/types/board"

export const clearData = (board: BoardApi) => {
  const newColumns =  board.Columns.map( column => {
    const columnData = column.columns[0]

    return {...columnData, cards: columnData.Cards[0] || []}
  })

  const newData: Board = {...board, columns: newColumns}

  return newData
}