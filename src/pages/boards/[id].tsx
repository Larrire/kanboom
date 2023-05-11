import { Kanban } from '@/components/Kanban';
import { Spinner } from '@/components/Spinner';
import { DashBoard } from '@/layout';
import { boardKeys } from '@/reactQuery/board';
import { boardService } from '@/services/board';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

function Content() {
  const router = useRouter();
  const boardId = router.query.id as string

  const { data: board, isLoading } = useQuery({
    queryKey: boardKeys.detail(boardId),
    queryFn: async () => await boardService.get(boardId as string),
    enabled: Boolean(boardId),
  })

  if ( isLoading || !board ) return <Spinner/>

  return (
    <>
      <p>Board: {router.query.id}</p>
      <Kanban board={board}/>
    </>
  )
}

export default function Details() {return(
  <DashBoard>
    <Content/>
  </DashBoard>
)}