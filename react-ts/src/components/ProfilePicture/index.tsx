import { createElement, HTMLAttributes } from "react";
import { FiAnchor } from "react-icons/fi";
import { IconType } from "../../types/IconType";
import styles from "./styles.module.css";

interface ProfilePictureProps {
  userId: number;
  alt: string;
}

function ProfilePicture({ alt, userId }: ProfilePictureProps) {
  const pictureBaseUrl = import.meta.env.VITE_PICTURE_API;

  // A imagem de perfil do usuário
  const pictureUrl = `${pictureBaseUrl}/${userId}.svg`;

  return (
    <div className={styles.container}>
      <img src={pictureUrl} alt={alt} />
    </div>
  );
}

export { ProfilePicture };
