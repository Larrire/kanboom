import styles from './styles.module.css'

type BoardCardProps = {
  board: {
    id: number,
    boardName: string
  }
}

export const BoardCard = (props: BoardCardProps) => {
  const { id, boardName } = props.board

  return (
    <a href={`/boards/${id}`}>
      <div className={`card ${styles.board}`}>
        <div className="card-body">
          {boardName}
        </div>
      </div>
    </a>
  )
}