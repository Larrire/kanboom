import { clearData } from "@/utils/clearBoardApiData"
import axios from '../../config/axios'

export const boardService = {
  get: async (id: string) => axios.get(`/board/${id}`)
    .then( response => clearData(response.data) ),
    
  post: async (formData: any) => axios.post(`/board`, formData)
    .then( response => clearData(response.data) )
}