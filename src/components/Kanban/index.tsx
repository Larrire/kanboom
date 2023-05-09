import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from "../StrictModeDroppable";
import { ViewProps } from "@/bloc/Kanban";
import { Card } from '@/types/card';

export const Kanban = ({handleOnDragEnd, columns}: ViewProps) => {
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div style={{display: 'flex', gap: '30px'}}>
        { columns.map( (item, index) => (
          <StrictModeDroppable
            key={`droppableIndex${index}`}
            droppableId={index.toString()}
          >
            {(provided) => (
              <div style={{width: '300px'}} ref={provided.innerRef} {...provided.droppableProps}>
                <div className="card mb-3 border-top border-danger">
                  <div className="card-body">
                    <h4>{item.columns[0].columnName}</h4>
                  </div>
                </div>

                <div>
                  {renderCards(item.columns[0].Cards)}
                </div>
              </div>
            )}
          </StrictModeDroppable>
        ))}
      </div>
    </DragDropContext>
  )
}

const renderCards = (items: Card[][]) => (
  items.map((item, index) => {
    const data = item[0]
    
    return (
      <Draggable
        key={data.id.toString()}
        draggableId={data.id.toString()}
        index={index}>
        {(provided2) => (
          <div className="card mb-3" ref={provided2.innerRef} {...provided2.draggableProps} {...provided2.dragHandleProps}>
            <div className="card-body">
              <h5>{data.title}</h5>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
))
  