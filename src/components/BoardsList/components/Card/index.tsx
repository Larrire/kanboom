import Link from 'next/link'
import styles from './styles.module.css'

type CardProps = {
  board: {
    id: number,
    boardName: string
  }
}

export const Card = (props: CardProps) => {
  const { id, boardName } = props.board

  return (
    <Link href={`/boards/${id}`} className={styles.link}>
      <div className={`card ${styles.card}`}>
        <div className="card-body">
          {boardName}
        </div>
      </div>
    </Link>
  )
}