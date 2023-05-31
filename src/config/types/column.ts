import { Card } from "./card"

export type Column = {
  "id": number,
  "created_at": number,
  "board_id": number,
  "cards": Card[],
  "columnName": string,
  "columnIndex": number,
  "columnColor": string,
  "_cardcount": number
}