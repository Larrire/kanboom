import { Board } from "@/types/board";

export const boardMock: Board = {
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
                "title": "First Card",
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