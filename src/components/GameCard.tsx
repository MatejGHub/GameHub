import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  ButtonGroup,
  Stack,
  Heading,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "../components/PlatformIconList";
import GameRating from "./GameRating";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card maxW="sm" borderRadius={"10px"} overflow={"hidden"} width="350px">
        <Image
          src={getCroppedImageUrl(game.background_image)}
          h={"200px"}
          objectFit={"cover"}
        />
        <CardBody paddingTop={0}>
          <Stack mt="6" spacing="3">
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(10, 1fr)"
            >
              <GridItem colSpan={9}>
                <Heading size="md">{game.name}</Heading>
              </GridItem>
              <GridItem colSpan={1}>
                <GameRating game={game} />
              </GridItem>
            </Grid>
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
