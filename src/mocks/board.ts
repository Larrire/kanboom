import { Board } from "@/config/types/board";
import { clearData } from "@/utils/clearBoardApiData";
import { boardApiMock } from "./boardApi";

export const boardMock: Board = clearData(boardApiMock)

export const boardsMock = [
  {id: 1, boardName: 'Quadro 1'},
  {id: 1, boardName: 'Quadro 2'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 4'},
  {id: 1, boardName: 'Quadro 5'},
  {id: 1, boardName: 'Quadro 6'},
  {id: 1, boardName: 'Quadro 7'},
  {id: 1, boardName: 'Quadro 8'},
  {id: 1, boardName: 'Quadro 9'},
  {id: 1, boardName: 'Quadro 10'},
  {id: 1, boardName: 'Quadro 11'},
  {id: 1, boardName: 'Quadro 12'},
  {id: 1, boardName: 'Quadro 13'},
]
