import useData from "./useData";

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

export const useGames = () => {
  useData<Game[]>("/games");
};
