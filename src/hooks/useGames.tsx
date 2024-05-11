import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  parent_platforms: { platform: Platform }[];
  rating: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGamesData {
  count: number;
  results: Game[];
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGamesData>("/games", { signal: controller.signal })
      .then((response) => {
        {
          setGames(response.data.results);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, setGames, error, setError, setIsLoading, isLoading };
};
