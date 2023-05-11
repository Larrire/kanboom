import { BoardsContainer } from "@/components/BoardCardsContainer"
import { NewBoardModal } from "@/components/Modals/NewBoard"
import { DashBoard } from "@/layout"
import { boardsMock } from "@/mocks/board"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { Plus } from "react-bootstrap-icons"

function Content() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="page-title mb-4">Meus quadros</h1>
        <div>
          <Button variant="" onClick={handleShow} className="d-flex align-items-center text-white btn-blue">
            <Plus size={28}/><span className="pl-5"><b>criar quadro</b></span>
          </Button>
        </div>
      </div>

      <BoardsContainer boards={boardsMock}/>

      <NewBoardModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default function Index() {return(
  <DashBoard>
    <Content/>
  </DashBoard>
)}