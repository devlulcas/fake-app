import { PostResponse } from "../../../types/api/postResponse.api";
import { PostList } from "../../../components/PostList";
import { ProfilePicture } from "../../../components/ProfilePicture";
import { Title } from "../../../components/Title";
import styles from "../../../styles/pages/User.module.css";
import { UserResponse } from "../../../types/api/userResponse.api";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

type UserPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function UserPage({ user, posts }: UserPageProps) {
  return (
    <>
      <header className={styles.profile}>
        <Title>{user.name}</Title>

        <ProfilePicture
          alt={`foto de ${user.username}`}
          userId={user.id ?? 0}
        />

        <blockquote>
          <p>{user.email}</p>
        </blockquote>
      </header>

      <PostList posts={posts} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context.params);

  const id = context.params?.id;

  const baseApiUrl = process.env.PLACEHOLDER_API;

  const userUrl = `${baseApiUrl}/users/${id}`;
  const userResponse = await fetch(userUrl);
  const userData = (await userResponse.json()) as UserResponse;

  const postsUrl = `${userUrl}/posts`;
  const postsResponse = await fetch(postsUrl);
  const postsData = (await postsResponse.json()) as PostResponse[];

  return {
    props: {
      user: userData,
      posts: postsData,
    },
  };
}
