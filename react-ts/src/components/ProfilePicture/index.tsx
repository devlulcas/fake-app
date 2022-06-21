import { createElement, HTMLAttributes } from "react";
import { FiAnchor } from "react-icons/fi";
import { IconType } from "../../types/IconType";
import styles from "./styles.module.css";

interface ProfilePictureProps {
  url: string;
  alt: string;
}

function ProfilePicture({ alt, url }: ProfilePictureProps) {
  return (
    <div className={styles.container}>
      <img src={url} alt={alt} />
    </div>
  );
}

export { ProfilePicture };
