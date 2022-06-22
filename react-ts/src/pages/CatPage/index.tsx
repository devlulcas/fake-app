import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import styles from "./styles.module.css";

interface CatPageProps {}

function CatPage(props: CatPageProps) {
  const catApi = import.meta.env.VITE_CAT_API;

  const [catUrl, setCatUrl] = useState();

  const [reloadCounter, setReloadCounter] = useState(1);

  useEffect(() => {
    const getCat = async () => {
      const response = await fetch(catApi + "/cat?json=true");
      const json = await response.json();
      setCatUrl(json.url);
    };

    getCat();
  }, [reloadCounter, catApi]);

  return (
    <div className={styles.container}>
      <div className={styles.catContainer}>
        <img
          className={styles.catImage}
          src={`${catApi}/${catUrl}`}
          alt="cat"
        />
      </div>

      <div className={styles.controls}>
        <Button onClick={() => setReloadCounter((value) => value + 1)}>
          BUSCAR NOVO GATINHO
        </Button>

        <p>JÁ GERAMOS {reloadCounter} GATINHOS HOJE</p>
      </div>
    </div>
  );
}

export { CatPage };
