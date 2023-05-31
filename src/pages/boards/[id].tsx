import { Kanban } from '@/components/Kanban';
import { Spinner } from '@/components/Spinner';
import { DashBoard } from '@/layout';
import { boardKeys } from '@/reactQuery/board';
import { boardService } from '@/services/board';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { boardMock } from '@/mocks/board';
import styles from './styles.module.css'

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
    <section className={styles.boardContainer}>
      <h1 className='page-title mb-4'>{boardMock.boardName}</h1>
      <Kanban board={board}/>
    </section>
  )
}

export default function Details() {return(
  <DashBoard>
    <Content/>
  </DashBoard>
)}