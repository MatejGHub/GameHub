import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  ButtonGroup,
  Stack,
  Heading
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "../components/PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card maxW="sm" borderRadius={"10px"} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">{game.name}</Heading>
            <PlatformIconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
          </Stack>
        </CardBody>

        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default GameCard;
