import { Loading } from "../../components/Loading";
import { Banner } from "../../components/Banner";
import { Post } from "../../components/Post";
import { Title } from "../../components/Title";
import { useFetch } from "../../hooks/useFetch";
import styles from "./styles.module.css";
import { fisherShuffle } from "../../utils/fisherShuffle";
import { useEffect, useState } from "react";
import { PostResponse } from "../../types/api/postResponse.api";

interface PostListProps {
  posts: PostResponse[];
  loading?: boolean;
  error?: string;
}

function PostList({ posts, loading, error }: PostListProps) {
  if (loading) return <Loading />;
  if (error) return <strong>{error}</strong>;

  return (
    <ul className={styles.postList}>
      {posts.map((post) => {
        return (
          <li>
            <Post
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          </li>
        );
      })}
    </ul>
  );
}

export { PostList };
