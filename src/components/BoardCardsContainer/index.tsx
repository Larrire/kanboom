import { BoardCard } from "../BoardCard"
import styles from './styles.module.css'

type BoardsContainerProps = {
  boards: {
    id: number,
    boardName: string
  }[]
}

export const BoardsContainer = (props: BoardsContainerProps) => {
  const { boards } = props

  return (
    <div className={styles.boardsContainer}>
      {boards.map( (board, index) => (
        <BoardCard board={board} key={index}/>
      ))}
    </div>
  )
}