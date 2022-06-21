import styles from "./styles.module.css";

interface BannerProps {
  quote: string;
}

function Banner({ quote }: BannerProps) {
  const image = {
    backgroundImage: `url(https://i0.wp.com/institutoagro.com.br/wp-content/uploads/reflorestamento-instituto-agro-01.jpg?fit=1024%2C534&ssl=1)`,
  };

  return (
    <p style={image} className={styles.quote}>
      {quote}
    </p>
  );
}

export { Banner };
