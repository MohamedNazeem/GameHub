import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} marginY={3}>
          <HStack>
            <Image boxSize="32px" borderRadius={3} src={g.image_background} />
            <Button
              variant="link"
              fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(g)}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
