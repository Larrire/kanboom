import { Card } from "./card"

export type Column = {
  "id": Number,
  "created_at": Number,
  "board_id": Number,
  "cards": Card[],
  "columnName": string,
  "columnIndex": Number,
  "columnColor": string,
  "_cardcount": Number
}