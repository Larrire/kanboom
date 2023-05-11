import { Card } from "@/types/card"
import { Column } from "@/types/column"
import { Draggable, DroppableProvided } from "react-beautiful-dnd"

type KanbanColumnProps = {
  data: Column,
  provided: DroppableProvided
}

export const KanbanColumn = (props: KanbanColumnProps) => {
  const {provided, data} = props

  return (
    <div style={{width: '300px'}} ref={provided.innerRef} {...provided.droppableProps}>
      <div className="card mb-3 border-top border-danger">
        <div className="card-body">
          <h4>{data.columnName}</h4>
        </div>
      </div>

      <div>
        {renderCards(data.cards)}
      </div>
      {provided.placeholder}
    </div>
  )
}

const renderCards = (items: Card[]) => {
  if( !Boolean(items) ) return null

  return (
    items.map((item, index) => {
      return (
        <Draggable
          key={item.id.toString()}
          draggableId={item.id.toString()}
          index={index}>
          {(provided2) => (
            <div className="card mb-3" ref={provided2.innerRef} {...provided2.draggableProps} {...provided2.dragHandleProps}>
              <div className="card-body">
                <h5>{item.title}</h5>
              </div>
            </div>
          )}
        </Draggable>
      )
    })
  )
}