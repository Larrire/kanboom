import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from "../Droppable";
import { KanbanColumn } from '../KanbanColumn/index';
import { Board } from '@/config/types/board';
import { useKanban } from '@/hooks/useKanban';
import styles from './styles.module.css'

export type KanbanProps = {
  board: Board
}

export const Kanban = ({board}: KanbanProps) => {
  const { columns, handleOnDragEnd } = useKanban(board.columns)

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className={styles.kanbanContainer}>
          <Droppable droppableId='boardDroppable' direction='horizontal' type='COLUMN'>
            { (provided) => (
              <div className={styles.columnsContainer} ref={provided.innerRef} {...provided.droppableProps}>
                { columns?.map( (item, index) => (
                  <KanbanColumn key={`key-column-${item.id}`} index={index} data={item} boardName={board.boardName}/>
                ))}
                <div style={{width: '325px', borderTop: '1px solid gray'}}>Opa</div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  )
}
