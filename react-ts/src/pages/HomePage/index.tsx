import { Loading } from "../../components/Loading";
import { Banner } from "../../components/Banner";
import { Post } from "../../components/Post";
import { Title } from "../../components/Title";
import { useFetch } from "../../hooks/useFetch";
import { fisherShuffle } from "../../utils/fisherShuffle";
import { useEffect, useState } from "react";
import { PostResponse } from "../../types/api/postResponse.api";
import { PostList } from "../../components/PostList";


function HomePage() {
  const postsUrl = import.meta.env.VITE_PLACEHOLDER_API + "/posts";

  const { data, error, loading } = useFetch<PostResponse[]>(postsUrl);

  const [posts, setPosts] = useState<PostResponse[]>([])

  useEffect(() => {
    const shuffledPosts = fisherShuffle(data ?? []);
    setPosts(shuffledPosts);
  }, [data]);

  return (
    <>
      <Banner quote={"Lorem"} />
      <Title>Posts recentes</Title>
      <PostList posts={posts} loading={loading} error={error?.message} />
    </>
  );
}

export { HomePage };
