import { BoardsContainer } from "@/components/BoardCardsContainer"
import { DashBoard } from "@/layout"
import { boardsMock } from "@/mocks/board"
import { useState } from "react"
import { Plus } from "react-bootstrap-icons"

function Content() {
  const [show, setShow] = useState(true)
  
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="page-title">Meus quadros</h1>
        <div>
          <button
            className="btn btn-info p-2 font-weight-bold text-white d-flex align-items-center"
            data-toggle="modal"
            data-target="#modalExemplo"
          >
            <Plus size={28}/><span className="pl-5">criar quadro</span>
          </button>
        </div>
      </div>
      <BoardsContainer boards={boardsMock}/>

      <div className={`modal ${show && 'show'}`} id="modalExemplo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Título do modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary">Salvar mudanças</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Index() {return(
  <DashBoard>
    <Content/>
  </DashBoard>
)}