import { CommentResponse } from "../../types/api/commentResponse.api";
import styles from "./styles.module.css";

function Comment({ body, email, name }: CommentResponse) {
  return (
    <article className={styles.container}>
      <p className={styles.email}>{email}</p>
      <h4 className={styles.title}>{name}</h4>
      <p>{body}</p>
    </article>
  );
}

export { Comment };
