'use client'
import { KanbanBloc } from '@/bloc/Kanban';
import { Kanban } from '@/components/Kanban';
import { DashBoard } from '@/layout';
import { boardKeys } from '@/reactQuery/board';
import { boardService } from '@/services/board';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export default function Get() {
  const router = useRouter();
  const boardId = router.query.id

  const { data, isLoading } = useQuery({
    // @ts-ignore
    queryKey: boardKeys.detail(boardId),
    queryFn: () => boardService.get(boardId as string),
    enabled: Boolean(boardId),
  })

  console.log(data)

  if ( isLoading || !Boolean(data) ) return <h1>Loading</h1>

  return (
    <DashBoard>
      <p>Board: {router.query.id}</p>

      <KanbanBloc board={data} View={Kanban}/>
    </DashBoard>
  )
}
