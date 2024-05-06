import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Button,
  ButtonGroup,
  Stack,
  Heading
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

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
            <Text color="blue.600" fontSize="2xl">
              $19.99
            </Text>
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
