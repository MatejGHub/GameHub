import {
  Image,
  Button,
  List,
  ListItem,
  HStack,
  Spinner
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genres } from "../hooks/useGenres";
import useData from "../hooks/useData";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useData<Genres>("/genres");

  return (
    <>
      <List paddingTop={5}>
        {isLoading && <Spinner />}
        {data.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack>
              <Image
                borderRadius={8}
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => {
                  onSelectGenre(genre);
                }}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
