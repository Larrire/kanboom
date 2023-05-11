import { BasicModal } from "@/components/BasicModal"
import { boardService } from "@/services/board"
import { FormEvent, PropsWithChildren, useState } from "react"
import { Button } from "react-bootstrap"

type BasicModalProps = PropsWithChildren & {
  show: boolean,
  handleClose: () => void
}

export const NewBoardModal = (props: BasicModalProps) => {
  const {show, handleClose} = props

  const [name, setName] = useState('');

  const onClose = () => {
    handleClose()
    setName('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if( !Boolean(name.trim()) ) return

    const formData = { boardName: name }

    boardService.post(formData)
  }

  return (
    <BasicModal show={show} handleClose={onClose}>
      <h2 className="modal-title mb-3">Criar novo quadro</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} name="name" type="text" className="form-control mb-3" placeholder="nome do quadro"/>
        
        <Button type="submit" variant="" className="form-control p-2 btn-blue">
          <b>criar quadro</b>
        </Button>
      </form>
    </BasicModal>
  )
}