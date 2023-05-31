import { Card } from "@/config/types/card"
import { Column } from "@/config/types/column"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { cssVar } from "@/utils/cssVar"
import { PropsWithChildren } from "react"
import { KanbanCard } from "../KanbanCard"
import styles from './styles.module.css'

type KanbanColumnProps = PropsWithChildren & {
  data: Column,
  index: number,
  boardName: string
}

export const KanbanColumn = (props: KanbanColumnProps) => {
  const { data, index, boardName } = props

  const headerStyle = cssVar({'--border-color': data.columnColor})

  return (
    <Draggable draggableId={`${data.columnName}-${index}`} index={index}>
      {(provided) => (
        <div className={styles.column} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <header className={`card card--column-header ${styles['card--column-header']}`} style={headerStyle}>
            <div className={`card-body  ${styles['card-body']}`}>{data.columnName}</div>
          </header>

          <Droppable droppableId={`${data.columnName}-${index}`} type="CARD">
            {(provided) => (
              <section style={{minHeight: '90%', paddingTop: '16px'}} ref={provided.innerRef} {...provided.droppableProps}>
                <div>
                  {renderCards(data.cards, data.columnName, boardName)}
                </div>
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export const renderCards = (items: Card[], columnName: string, boardName: string) => {
  if( !Boolean(items) ) return null

  return (
    items.map((item, index) => (
      <KanbanCard
        key={`key-card-${item.id}`}
        data={item}
        index={index}
        columnName={columnName}
        boardName={boardName}
      />
    ))
  )
}