import { MantineProvider, Text, Title } from "@mantine/core";
import { Login } from "../components/Auth";
import { renderPage } from "../components/utils/utils";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Login />
    </MantineProvider>
  );
}

renderPage(<App />, false);
