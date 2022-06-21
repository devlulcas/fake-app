import { Link } from "react-router-dom";
import { ProfilePicture } from "../ProfilePicture";
import { PostResponse } from "../../types/api/postResponse.api";
import styles from "./styles.module.css";

function Post({ body, title, userId, id }: PostResponse) {
  const pictureDescription = `image de perfil do usuário nº ${userId}`;

  // A url para o perfil do usuário
  const userProfileUrl = `/user/${userId}`;

  // A url do post no perfil do usuário
  const postUrl = `${userProfileUrl}/${id}`;

  return (
    <article className={styles.container}>
      <Link to={userProfileUrl}>
        <ProfilePicture userId={userId} alt={pictureDescription} />
      </Link>

      <Link to={postUrl}>
        <section className={styles.body}>
          <h4>{title}</h4>
          <p>{body}</p>
        </section>
      </Link>
    </article>
  );
}

export { Post };
