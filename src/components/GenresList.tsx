import useGenres from "../hooks/useGenres";
import { Image, Text, List, ListItem, HStack, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenresList = () => {
  const { genres, isLoading } = useGenres();

  return (
    <>
      <List>
        {isLoading && <Spinner />}
        {genres.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack>
              <Image
                borderRadius={8}
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
