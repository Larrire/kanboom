import { Card as CardType } from "@/config/types/card"
import { Draggable } from "react-beautiful-dnd"
import styles from './styles.module.css'
import { Alarm, Gear } from "react-bootstrap-icons"
import Image from "next/image"

type Props = {
  data: CardType,
  index: number,
  columnName: string,
  boardName: string
}

export const Card = (props: Props) => {
  const {data, index, boardName, columnName} = props

  const responsible = {
    name: 'Marcus Oliveira',
    image: null
  }

  return (
    <Draggable
      draggableId={`CARD-${data.id}`}
      index={index}>
      {(provided2) => (
        <article className={`card ${styles['kanban-card']}`} ref={provided2.innerRef} {...provided2.draggableProps} {...provided2.dragHandleProps}>
          <div className={`card-body ${styles['card-body']}`}>
            <p className={styles['kanban-card__top-info']}>{boardName} / {columnName}</p>
            <p className={styles['kanban-card__title']}>{data.title}</p>

            <section className={styles['kanban-card__efforts']}>
              <div className={styles['kanban-card__effort-item']}>
                <Gear size={17}/>
                <span>{data.scoreComplexity}</span>
              </div>
              <div className={styles['kanban-card__effort-item']}>
                <Alarm size={17}/>
                <span>{data.scoreTime}</span>
              </div>
            </section>

            <div className={styles['kanban-card__responsible']}>
              <div className={styles['kanban-card__responsible-image']}>
                {responsible.image ? (
                  <Image src={responsible.image} width={30} height={30} alt="User image"/>
                ) : (
                  <>{responsible.name[0]}</>
                )}
              </div>
              <div className={styles['kanban-card__responsible-name']}>
                {responsible.name}
              </div>
            </div>
          </div>
        </article>
      )}
    </Draggable>
  )
}