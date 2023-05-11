import { Column } from "./column"

export type Board = {
  "id": Number,
  "created_at": Number,
  "columns": Column[],
  "boardName": string,
  "Creator": Number,
  "accessList": Number[]
}