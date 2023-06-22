import styles from './styles.module.css'

type Props = {
  onClick: () => void
}

export const KanbanAddColumnButton = (props: Props) => {
  const { onClick } = props

  return (
    <div className={styles.button} onClick={onClick}>+ adicionar coluna</div>
  )
}