import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Banner } from "../components/Banner";
import { Title } from "../components/Title";
import { fisherShuffle } from "../utils/fisherShuffle";
import { PostResponse } from "../types/api/postResponse.api";
import { PostList } from "../components/PostList";

// O resultado de getServerSideProps é inferido de forma "forçada"
type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

// O resultado de getServerSideProps e getStaticProps é passado auto-magicamente para a página
export default function HomePage({ data }: HomePageProps) {
  return (
    <>
      <Banner quote={"Lorem"} />
      <Title>Posts recentes</Title>
      <PostList posts={data} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Dizendo ao NextJS para guardar essa resposta por um tempo, ao invés de rodar a requisição novamente o tempo todo
  context.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  // Como o NextJS vai executar esse código no backend (graças ao NodeJS) nós temos acessoas APIs do Node
  const postsUrl = process.env.PLACEHOLDER_API + "/posts";

  // Caso um erro seja lançado pelo request o NextJS vai renderizar a página 500.tsx
  const response = await fetch(postsUrl);
  const data = await response.json();

  // Embaralhando os posts e fazendo o casting dos dados para que recebam o tipo correto
  const shuffledPosts = fisherShuffle(data) as PostResponse[];

  // Retornando um objeto {props} com os dados do request
  return {
    props: {
      data: shuffledPosts,
    },
  };
}
