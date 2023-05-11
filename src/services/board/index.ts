import { clearData } from "@/utils/clearBoardApiData"

export const boardService = {
  get: async (id: string) => fetch(`https://x8ki-letl-twmt.n7.xano.io/api:zbSMGp0X/board/${id}`)
    .then( response => response.json() )
    .then( data => clearData(data) )
}