import styles from "./styles.module.css";

interface CommentProps {
  title: string;
  content: string;
  email: number;
}

function Comment({ content, title, email }: CommentProps) {
  return (
    <article className={styles.container}>
      <p className={styles.email}>{email}</p>
      <h4 className={styles.title}>{title}</h4>
      <p>{content}</p>
    </article>
  );
}

export { Comment };
