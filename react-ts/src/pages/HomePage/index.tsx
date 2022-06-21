import { Loading } from "../../components/Loading";
import { Banner } from "../../components/Banner";
import { Post } from "../../components/Post";
import { Title } from "../../components/Title";
import { useFetch } from "../../hooks/useFetch";
import styles from "./styles.module.css";
import { fisherShuffle } from "../../utils/fisherShuffle";

type PostResponse = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function HomePage() {
  const postsBaseUrl = import.meta.env.VITE_PLACEHOLDER_API + "/posts";

  const { data, error, loading } = useFetch<PostResponse[]>(postsBaseUrl);

  const posts = fisherShuffle(data ?? []);

  const postItems = posts.map((post) => {
    return (
      <li>
        <Post
          key={post.id}
          postId={post.id}
          userId={post.userId}
          title={post.title}
          content={post.body}
        />
      </li>
    );
  });

  return (
    <>
      <Banner quote={"Lorem"} />
      <Title>Posts recentes</Title>
      {loading ? <Loading /> : <ul className={styles.postList}>{postItems}</ul>}
    </>
  );
}

export { HomePage };
