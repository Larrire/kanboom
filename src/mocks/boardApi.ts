import { BoardApi } from "@/config/types/api/boardApi";

export const boardApiMock: BoardApi = {
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
                "id": 3,
                "created_at": 1683239788680,
                "title": "Implementar criação de novo artigo",
                "scoreComplexity": 2,
                "scoreTime": 2,
                "cardOwner": 1,
                "cardIndex": 1
              },
              {
                "id": 4,
                "created_at": 1683239888680,
                "title": "Implementar edição de artigo",
                "scoreComplexity": 3,
                "scoreTime": 2,
                "cardOwner": 1,
                "cardIndex": 2
              },
              {
                "id": 5,
                "created_at": 1683239988680,
                "title": "Implementar exclusão de artigo",
                "scoreComplexity": 2,
                "scoreTime": 2,
                "cardOwner": 1,
                "cardIndex": 3
              },
              {
                "id": 6,
                "created_at": 1683249988680,
                "title": "Criar tabela de autores no banco de dados",
                "scoreComplexity": 2,
                "scoreTime": 2,
                "cardOwner": 1,
                "cardIndex": 3
              },
              {
                "id": 7,
                "created_at": 1683249988680,
                "title": "Implementar listagem de autores",
                "scoreComplexity": 2,
                "scoreTime": 2,
                "cardOwner": 1,
                "cardIndex": 3
              },
              {
                "id": 8,
                "created_at": 1683249988680,
                "title": "Implementar criação de novo autor",
                "scoreComplexity": 2,
                "scoreTime": 2,
                "cardOwner": 1,
                "cardIndex": 3
              },
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
          "Cards": [
            [
              {
                "id": 2,
                "created_at": 1683239688680,
                "title": "Implementar listagem de artigos",
                "scoreComplexity": 1,
                "scoreTime": 2,
                "cardOwner": 1,
                "cardIndex": 0
              }
            ]
          ],
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
          "Cards": [
            [
              {
                "id": 1,
                "created_at": 1683239688680,
                "title": "Criar tabela de artigos no banco de dados",
                "scoreComplexity": 1,
                "scoreTime": 1,
                "cardOwner": 1,
                "cardIndex": 0
              }
            ]
          ],
          "columnName": "Done",
          "columnIndex": 3,
          "columnColor": "green",
          "_cardcount": 0
        }
      ]
    },
    {
      "columns": [
        {
          "id": 4,
          "created_at": 1683239679119,
          "board_id": 1,
          "Cards": [],
          "columnName": "Revisão",
          "columnIndex": 2,
          "columnColor": "orange",
          "_cardcount": 0
        }
      ]
    },
    {
      "columns": [
        {
          "id": 5,
          "created_at": 1683239679119,
          "board_id": 1,
          "Cards": [],
          "columnName": "Validação",
          "columnIndex": 2,
          "columnColor": "red",
          "_cardcount": 0
        }
      ]
    },
    {
      "columns": [
        {
          "id": 6,
          "created_at": 1683239679120,
          "board_id": 1,
          "Cards": [],
          "columnName": "Validação 2",
          "columnIndex": 2,
          "columnColor": "red",
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