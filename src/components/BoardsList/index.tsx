import { Card } from "./components/Card"
import styles from './styles.module.css'

type BoardsListProps = {
  boards: {
    id: number,
    boardName: string
  }[]
}

export const BoardsList = (props: BoardsListProps) => {
  const { boards } = props

  return (
    <div className={styles.container}>
      {boards.map( (board, index) => (
        <Card board={board} key={index}/>
      ))}
    </div>
  )
}