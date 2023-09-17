import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from "./components/Droppable";
import { Column } from './components/Column/index';
import { Board } from '@/config/types/board';
import { useKanban } from '@/hooks/useKanban';
import { KanbanAddColumnButton } from './components/AddColumnButton';
import styles from './styles.module.css'

export type KanbanProps = {
  board: Board,
  onClickAddColumn: () => void
}

export const Kanban = ({ board, onClickAddColumn }: KanbanProps) => {
  const { columns, handleOnDragEnd } = useKanban(board.columns)

  const renderedColumns = columns?.map( (item, index) => (
    <Column key={`key-column-${item.id}`} index={index} data={item} boardName={board.boardName}/>
  ))

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className={styles.kanbanContainer}>
          <Droppable droppableId='boardDroppable' direction='horizontal' type='COLUMN'>
            { (provided) => (
              <div className={styles.columnsContainer} ref={provided.innerRef} {...provided.droppableProps}>
                {renderedColumns}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* <KanbanAddColumnButton onClick={onClickAddColumn}/> */}
        </div>
      </DragDropContext>
    </>
  )
}
