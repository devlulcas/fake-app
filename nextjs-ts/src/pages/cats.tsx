import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import styles from "../styles/pages/Cats.module.css";

export default function CatPage() {
  const catApi = process.env.NEXT_PUBLIC_CAT_API;

  const [catUrl, setCatUrl] = useState("cat/5ac0b74b61d533000f42c523");

  const [reloadCounter, setReloadCounter] = useState(1);

  useEffect(() => {
    const getCat = async () => {
      const response = await fetch(catApi + "/cat?json=true");
      const json = await response.json();
      setCatUrl(json.url);
    };

    getCat();
  }, [reloadCounter, catApi]);

  console.log(`${catApi}/${catUrl}`);

  return (
    <div className={styles.container}>
      <div className={styles.catContainer}>
        <Image
          width={500}
          height={500}
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
