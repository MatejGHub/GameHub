import { Grid, GridItem } from "@chakra-ui/react";
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
import { useGames } from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid
        templateColumns="repeat(3, 1fr)"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {games.map((game) => {
          return (
            <GridItem key={game.id}>
              <Card maxW="sm">
                <CardBody>
                  <Image src={game.background_image} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{game.name}</Heading>
                    <Text>{game.released}</Text>
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
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default GameGrid;
