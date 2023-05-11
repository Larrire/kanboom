import { BoardApi } from "@/types/api/boardApi";
import { Board } from "@/types/board";
import { clearData } from "@/utils/clearBoardApiData";

const boardApiMock: BoardApi = {
  "id": 1,
  "created_at": 1683239626976,
  "Columns": [
    {
      "columns": [
        {
          "id": 1,
          "created_at": 1683239651645,
          "board_id": 1,
          "Cards": [
            [
              {
                "id": 1,
                "created_at": 1683239688680,
                "title": "Lançar o nitro",
                "scoreComplexity": 0,
                "scoreTime": 0,
                "cardOwner": 1,
                "cardIndex": 0
              }
            ]
          ],
          "columnName": "To Do",
          "columnIndex": 0,
          "columnColor": "blue",
          "_cardcount": 0
        }
      ]
    },
    {
      "columns": [
        {
          "id": 2,
          "created_at": 1683239655522,
          "board_id": 1,
          "Cards": [],
          "columnName": "Doing",
          "columnIndex": 1,
          "columnColor": "yellow",
          "_cardcount": 0
        }
      ]
    },
    {
      "columns": [
        {
          "id": 3,
          "created_at": 1683239659119,
          "board_id": 1,
          "Cards": [],
          "columnName": "Done",
          "columnIndex": 2,
          "columnColor": "green",
          "_cardcount": 0
        }
      ]
    }
  ],
  "boardName": "bTest",
  "Creator": 1,
  "accessList": [
    1
  ]
}

export const boardsMock = [
  {id: 1, boardName: 'Quadro 1'},
  {id: 1, boardName: 'Quadro 2'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
  {id: 1, boardName: 'Quadro 3'},
]

export const boardMock: Board = clearData(boardApiMock)