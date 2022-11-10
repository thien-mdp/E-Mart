import {useState} from "react";
import {ThemeProvider} from "styled-components";
import Aos from "./Aos";
import AppRoutes from "./routes";

function App() {
  const theme = {};
  return (
    <ThemeProvider theme={theme}>
      <Aos />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
