import { Card as CardType } from "@/config/types/card"
import { Column as ColumnType } from "@/config/types/column"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { cssVar } from "@/utils/cssVar"
import { PropsWithChildren } from "react"
import { Card } from "../Card"
import styles from './styles.module.css'

type ColumnProps = PropsWithChildren & {
  data: ColumnType,
  index: number,
  boardName: string
}

export const Column = (props: ColumnProps) => {
  const { data, index, boardName } = props

  const headerStyle = cssVar({'--border-color': data.columnColor})

  return (
    <Draggable draggableId={`${data.columnName}-${index}`} index={index}>
      {(provided) => (
        <section className={styles.container} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <header className={`card card--column-header ${styles['card--column-header']}`} style={headerStyle}>
            <div className={`card-body  ${styles['card-body']}`}>{data.columnName}</div>
          </header>

          <Droppable droppableId={`${data.columnName}-${index}`} type="CARD">
            {(provided) => (
              <div className={styles.column} ref={provided.innerRef} {...provided.droppableProps}>
                <div>
                  {renderCards(data.cards, data.columnName, boardName)}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </section>
      )}
    </Draggable>
  )
}

export const renderCards = (items: CardType[], columnName: string, boardName: string) => {
  if( !Boolean(items) ) return null

  return (
    items.map((item, index) => (
      <Card
        key={`key-card-${item.id}`}
        data={item}
        index={index}
        columnName={columnName}
        boardName={boardName}
      />
    ))
  )
}