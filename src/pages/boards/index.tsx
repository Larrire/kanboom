import { BoardsList } from "@/components/BoardsList"
import { PrimaryButton } from "@/components/Buttons"
import { NewBoardModal } from "@/components/Modals/NewBoard"
import { DashBoard } from "@/layout"
import { boardsMock } from "@/mocks/board"
import { useState } from "react"
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
          <PrimaryButton onClick={handleShow} style={{gap: '8px'}}>
            <Plus size={28}/><b>criar quadro</b>
          </PrimaryButton>
        </div>
      </div>

      <BoardsList boards={boardsMock}/>

      <NewBoardModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default function Index() {
  return DashBoard(Content)
}