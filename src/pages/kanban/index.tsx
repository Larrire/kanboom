import { KanbanBloc } from "@/bloc/Kanban";
import { Kanban } from "@/components/Kanban";
import { DashBoard } from "@/layout";
import { boardMock } from "@/mocks/board";

export default function Board() {
  
  return (
    <DashBoard>
      <div className="App">
        <h1>Final Space Characters</h1>
        <KanbanBloc board={boardMock} View={Kanban}/>
      </div>
    </DashBoard>
  )
}