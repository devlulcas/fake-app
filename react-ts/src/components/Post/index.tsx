import { Link } from "react-router-dom";
import { ProfilePicture } from "../ProfilePicture";
import styles from "./styles.module.css";

interface PostProps {
  title: string;
  content: string;
  userId: number;
  postId: number;
}

function Post({ content, title, userId, postId }: PostProps) {
  const pictureDescription = `image de perfil do usuário nº ${userId}`;

  const pictureBaseUrl = import.meta.env.VITE_PICTURE_API;

  // A imagem de perfil do usuário
  const pictureUrl = `${pictureBaseUrl}/${userId}.svg`;

  // A url para o perfil do usuário
  const userProfileUrl = `user/${userId}`;

  // A url do post no perfil do usuário
  const postUrl = `${userProfileUrl}/${postId}`;

  return (
    <article className={styles.container}>
      <Link to={userProfileUrl}>
        <ProfilePicture url={pictureUrl} alt={pictureDescription} />
      </Link>

      <Link to={postUrl}>
        <section className={styles.content}>
          <h4>{title}</h4>
          <p>{content}</p>
        </section>
      </Link>
    </article>
  );
}

export { Post };
