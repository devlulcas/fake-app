import { useParams } from "react-router-dom";
import { PostResponse } from "../../types/api/postResponse.api";
import { PostList } from "../../components/PostList";
import { ProfilePicture } from "../../components/ProfilePicture";
import { Title } from "../../components/Title";
import { useFetch } from "../../hooks/useFetch";
import styles from "./styles.module.css";
import { UserResponse } from "../../types/api/userResponse.api";
import { Loading } from "../../components/Loading";

function UserPage() {
  const { id } = useParams();
  const baseApiUrl = import.meta.env.VITE_PLACEHOLDER_API;

  const userUrl = `${baseApiUrl}/users/${id}`;
  const postsUrl = `${userUrl}/posts`;

  const { data, error, loading } = useFetch<UserResponse>(userUrl);

  const {
    data: posts,
    error: postError,
    loading: postLoading,
  } = useFetch<PostResponse[]>(postsUrl);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <strong>{error.message}</strong>;
  }

  return (
    <>
      <header className={styles.profile}>
        <Title>{data?.name}</Title>

        <ProfilePicture
          alt={`foto de ${data?.username}`}
          userId={data?.id ?? 0}
        />

        <blockquote>
          <p>{data?.email}</p>
        </blockquote>
      </header>

      <PostList
        posts={posts ?? []}
        loading={postLoading}
        error={postError?.message}
      />
    </>
  );
}

export { UserPage };
