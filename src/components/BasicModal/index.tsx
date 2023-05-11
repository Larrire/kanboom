import { Children, PropsWithChildren } from "react"
import { Button, Modal } from "react-bootstrap"
import { X as XIcon } from "react-bootstrap-icons"

export type BasicModalProps = PropsWithChildren & {
  show: boolean,
  handleClose: () => void
}

export const BasicModal = (props: BasicModalProps) => {
  const { show, handleClose, children } = props

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className="pt-3 pb-5 px-4">
        <header className="d-flex justify-content-end pt-2 pb-4">
          <Button variant="" onClick={handleClose} className="p-0">
            <XIcon size={30}/>
          </Button>
        </header>

        {children}
      </Modal.Body>
    </Modal>
  )
}