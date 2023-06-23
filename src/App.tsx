import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatfrom, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectedGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatfrom?.name}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatfrom}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
