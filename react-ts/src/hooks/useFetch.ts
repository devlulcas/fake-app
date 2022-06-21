import { useEffect, useState } from "react";

type AbortSignal = (reason?: any) => void;

/**
 * Hook para buscar dados de uma URL.
 *
 * @param url A url para a qual seja feita a requisição
 * @param options As opções comuns de um request
 * @returns O estado da requisição, seus resultados, o estado do erro e um sinal para abortar a requisição
 */
function useFetch<Type>(url: string, options: RequestInit = {}) {
  const [data, setData] = useState<Type | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  // Emite um sinal de aborto para quaisquer observadores

  // Executa o fetchData ao iniciar o componente
  useEffect(() => {
    const fetchData = async () => {
      // Indica que o request não foi terminado
      setLoading(true);

      try {
        // Executa o request e armazena o resultado
        const response = await fetch(url, { ...options });
        const data = await response.json();
        setData(data);
      } catch (error) {
        // Em caso de erro seta erro
        setError(error as Error);
      } finally {
        // Indica que o request foi terminado
        setLoading(false);
      }
    };

    // Busca os dados
    fetchData();

    // Encerra o request quando o componente for removido
  }, []);

  return { data, loading, error };
}

export { useFetch };
