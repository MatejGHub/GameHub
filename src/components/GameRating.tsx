import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameRating = ({ game }: Props) => {
  return (
    <>
      <Badge
        borderRadius={2}
        ms="auto"
        colorScheme={
          game.rating < 2.5
            ? "red"
            : game.rating < 4
            ? "yellow"
            : game.rating > 4
            ? "green"
            : undefined
        }
      >
        {game.rating}
      </Badge>
    </>
  );
};

export default GameRating;
