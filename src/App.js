import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import SearchBar from "./components/SearchBar";
// CSS styles
// import styles from './App.module.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchBar />
      {/* Add other components here */}
    </ThemeProvider>
  );
}

export default App;
