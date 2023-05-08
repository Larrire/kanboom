import { GetServerSideProps } from "next"

export default function Get(props: {data: Data}) {

  return <div>{props.data.id}</div>
}

type Data = {
  id: string
}

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {

  return {
    props: {
      data: context.req.id
    },
  }
}
