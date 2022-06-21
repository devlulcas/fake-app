import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../../components/Comment";
import { Loading } from "../../components/Loading";
import { Post } from "../../components/Post";
import { Title } from "../../components/Title";
import { useFetch } from "../../hooks/useFetch";
import { CommentResponse } from "../../types/api/commentResponse.api";
import { PostResponse } from "../../types/api/postResponse.api";
import { UserResponse } from "../../types/api/userResponse.api";
import { fisherShuffle } from "../../utils/fisherShuffle";
import styles from "./styles.module.css";

function PostPage() {
  const { postId } = useParams();
  const baseApiUrl = import.meta.env.VITE_PLACEHOLDER_API;

  const postUrl = `${baseApiUrl}/posts/${postId}`;

  const { data, error, loading } = useFetch<PostResponse>(postUrl);

  const userUrl = `${baseApiUrl}/users/${data?.userId}`;

  const { data: user } = useFetch<UserResponse>(userUrl);

  const commentsUrl = `${postUrl}/comments`;

  const { data: commentsData } = useFetch<CommentResponse[]>(commentsUrl);

  const [comments, setComments] = useState<CommentResponse[]>([]);

  useEffect(() => {
    const shuffledComments = fisherShuffle(commentsData ?? []);
    setComments(shuffledComments);
  }, [commentsData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <strong>{error.message}</strong>;
  }

  return (
    <>
      <header className={styles.post}>
        <Title>Postagem de {user?.name}</Title>
      </header>

      <Post
        userId={data?.userId ?? 0}
        body={data?.body ?? ""}
        id={data?.id ?? 0}
        title={data?.title ?? ""}
      />

      <section>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <Comment {...comment} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export { PostPage };
