import { DragDropContext } from 'react-beautiful-dnd'
import { StrictModeDroppable } from "../StrictModeDroppable";
import { KanbanColumn } from './Column';
import { Board } from '@/types/board';
import { useKanban } from '@/hooks/useKanban';
import styles from './styles.module.css'

export type KanbanProps = {
  // handleOnDragEnd: (result: any) => void,
  board: Board
}

export const Kanban = ({board}: KanbanProps) => {
  const { columns } = board
  const { handleOnDragEnd } = useKanban(board)

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className={styles.kanbanContainer}>
          <div className={styles.columnsContainer}>
            { columns.map( (item, index) => (
              <StrictModeDroppable
                key={`droppableIndex${index}`}
                droppableId={index.toString()}
              >
                {(provided) => (
                  <KanbanColumn data={item} provided={provided}/>
                )}
              </StrictModeDroppable>
            ))}
          </div>
        </div>
      </DragDropContext>
    </>
  )
}
