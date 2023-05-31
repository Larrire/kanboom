import { Button, ButtonProps } from "react-bootstrap"

export const BlueButton = (props: ButtonProps) => {
  // const classes = 'd-flex align-items-center text-white border-0'

  return (
    <Button variant="primary" {...props} className={`btn-blue ${props.className}`}/>
  )
}