import { Comment } from "../../../components/Comment";
import { Post } from "../../../components/Post";
import { Title } from "../../../components/Title";
import { CommentResponse } from "../../../types/api/commentResponse.api";
import { PostResponse } from "../../../types/api/postResponse.api";
import { UserResponse } from "../../../types/api/userResponse.api";
import { fisherShuffle } from "../../../utils/fisherShuffle";
import styles from "../../../styles/pages/Post.module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

type PostPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function PostPage({ user, post, comments }: PostPageProps) {
  return (
    <>
      <header className={styles.post}>
        <Title>Postagem de {user.name}</Title>
      </header>

      <Post
        userId={post.userId}
        body={post.body}
        id={post.id}
        title={post.title}
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const postId = context.params?.postId;

  const baseApiUrl = process.env.PLACEHOLDER_API;

  const postUrl = `${baseApiUrl}/posts/${postId}`;
  const postResponse = await fetch(postUrl);
  const postData = (await postResponse.json()) as PostResponse;

  const userUrl = `${baseApiUrl}/users/${postData.userId}`;
  const userResponse = await fetch(userUrl);
  const userData = (await userResponse.json()) as UserResponse;

  const commentsUrl = `${postUrl}/comments`;
  const commentsResponse = await fetch(commentsUrl);
  const commentsData = await commentsResponse.json();
  const shuffledComments = fisherShuffle(commentsData) as CommentResponse[];

  return {
    props: {
      post: postData,
      user: userData,
      comments: shuffledComments,
    },
  };
}
