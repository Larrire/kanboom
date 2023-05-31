export type BoardApi = {
  "id": number,
  "created_at": number,
  "boardName": string,
  "Creator": number,
  "accessList": number[],
  "Columns": {"columns": Column[]}[]
}

type Column = {
  "id": number,
  "created_at": number,
  "board_id": number,
  "Cards": Card[][],
  "columnName": string,
  "columnIndex": number,
  "columnColor": string,
  "_cardcount": number
}

type Card = {
  "id": number,
  "created_at": number,
  "title": string,
  "scoreComplexity": number,
  "scoreTime": number,
  "cardOwner": number,
  "cardIndex": number
}