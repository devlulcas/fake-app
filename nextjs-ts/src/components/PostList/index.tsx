import { Post } from "../../components/Post";
import styles from "./styles.module.css";
import { PostResponse } from "../../types/api/postResponse.api";

interface PostListProps {
  posts: PostResponse[];
}

function PostList({ posts }: PostListProps) {
  return (
    <ul className={styles.postList}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Post
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
