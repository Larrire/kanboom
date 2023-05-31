import { Column } from "./column"

export type Board = {
  "id": number,
  "created_at": number,
  "columns": Column[],
  "boardName": string,
  "Creator": number,
  "accessList": number[]
}