export type BoardApi = {
  "id": Number,
  "created_at": Number,
  "boardName": string,
  "Creator": Number,
  "accessList": Number[],
  "Columns": {"columns": Column[]}[]
}

type Column = {
  "id": Number,
  "created_at": Number,
  "board_id": Number,
  "Cards": Card[][],
  "columnName": string,
  "columnIndex": Number,
  "columnColor": string,
  "_cardcount": Number
}

type Card = {
  "id": Number,
  "created_at": Number,
  "title": string,
  "scoreComplexity": Number,
  "scoreTime": Number,
  "cardOwner": Number,
  "cardIndex": Number
}