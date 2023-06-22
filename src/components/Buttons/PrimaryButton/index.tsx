import { Button, ButtonProps } from "react-bootstrap"
import styles from './styles.module.css'

export const PrimaryButton = (props: ButtonProps) => {
  const classes = `${styles.button} ${props.className}`

  return (
    <Button variant="primary" {...props} className={classes}/>
  )
}