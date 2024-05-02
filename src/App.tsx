import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

("536fe7b4b41d40688b68b6b9144c55db APIKEY");

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem bg="pink.300" area={"aside"}>
            Aside
          </GridItem>
        </Show>
        <GridItem bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
