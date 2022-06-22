import Image from "next/image";
import styles from "./styles.module.css";

interface ProfilePictureProps {
  userId: number;
  alt: string;
}

function ProfilePicture({ alt, userId }: ProfilePictureProps) {
  const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE_API;

  // A imagem de perfil do usuário
  const pictureUrl = `${pictureBaseUrl}/${userId}.svg`;
  console.log(pictureUrl);

  return (
    <div className={styles.container}>
      <Image src={pictureUrl} alt={alt} width={150} height={150} />
    </div>
  );
}

export { ProfilePicture };
