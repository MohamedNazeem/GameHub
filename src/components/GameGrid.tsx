import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, errors, loading } = useGames(gameQuery);
  return (
    <div>
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {errors && <Text>{errors}</Text>}
      {games.length == 0 && (
        <Text fontSize="2xl" fontWeight="bold" paddingTop="15rem">
          Oopss no games found :/
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
