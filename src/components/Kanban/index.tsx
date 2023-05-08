import { useState } from "react";
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from "./StrictModeDroppable";

export default function Kanban() {

  const finalSpaceCharacters = [
    {
      title: 'First column',
      items: [
        {
          id: 'gary',
          name: 'Gary Goodspeed',
          thumb: '/images/gary.png'
        },
        {
          id: 'cato',
          name: 'Little Cato',
          thumb: '/images/cato.png'
        },
        {
          id: 'kvn',
          name: 'KVN',
          thumb: '/images/kvn.png'
        },
        {
          id: 'mooncake',
          name: 'Mooncake',
          thumb: '/images/mooncake.png'
        },
        {
          id: 'quinn',
          name: 'Quinn Ergon',
          thumb: '/images/quinn.png'
        }
      ]
    },
    {
      title: 'Second column',
      items: [
        {
          id: 'PHP',
          name: 'PHP',
          thumb: '2/images/gary.png'
        },
        {
          id: 'JAVASCRIPT',
          name: 'JAVASCRIPT',
          thumb: '2/images/cato.png'
        },
        {
          id: 'COBOL',
          name: 'COBOL',
          thumb: '2/images/kvn.png'
        },
        {
          id: 'TYPESCRIPT',
          name: 'TYPESCRIPT',
          thumb: '2/images/mooncake.png'
        },
        {
          id: 'PYTHON',
          name: 'PYTHON',
          thumb: '2/images/quinn.png'
        }
      ]
    },
  ]
  
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const originColumn = parseInt(result.source.droppableId)
    const originIndex = result.source.index

    const desinationColumn = parseInt(result.destination.droppableId)
    const desinationIndex = result.destination.index

    // @ts-ignore
    const items = Array.from(characters);

    const [reorderedItem] = items[originColumn].items.splice(originIndex, 1);
    items[desinationColumn].items.splice(desinationIndex, 0, reorderedItem);

    updateCharacters(items);
  }
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>

      <div style={{display: 'flex', gap: '30px'}}>
        { characters.map( (item, index) => (
          <StrictModeDroppable
            key={`droppableIndex${index}`}
            droppableId={index.toString()}
          >
            {(provided) => (
              <div style={{width: '300px'}} ref={provided.innerRef} {...provided.droppableProps}>
                <div className="card mb-3 border-top border-danger">
                  <div className="card-body">
                    <h4>{item.title}</h4>
                  </div>
                </div>

                <div>
                  {renderCards(item.items)}
                </div>
              </div>
            )}
          </StrictModeDroppable>
        ))}
      </div>

      {/* <StrictModeDroppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {characters.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}>
                {(provided2) => (
                  <div ref={provided2.innerRef} {...provided2.draggableProps} {...provided2.dragHandleProps}>
                    {item.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>

      <StrictModeDroppable droppableId="droppable2">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{border: '1px solid red', padding: '24px'}}></div>
        )}
      </StrictModeDroppable> */}
    </DragDropContext>
  )
}

const renderCards = (items: any) => (
  items.map((item: any, index: any) => (
    <Draggable
      key={item.id}
      draggableId={item.id}
      index={index}>
      {(provided2) => (
        <div className="card mb-3" ref={provided2.innerRef} {...provided2.draggableProps} {...provided2.dragHandleProps}>
          <div className="card-body">
            <h5>{item.name}</h5>
          </div>
        </div>
      )}
    </Draggable>
  ))
)
  