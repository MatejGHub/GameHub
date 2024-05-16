import { SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "../components/GameCardSkeleton";
import useData from "../hooks/useData";

const GameGrid = (selectedGenre: any) => {
  const { data, error, isLoading } = useData("/games");
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        padding={5}
        gridGap={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => {
            return <GameCardSkeleton key={skeleton} />;
          })}
        {data.map((game: any) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
