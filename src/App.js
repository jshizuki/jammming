import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import SearchBar from "./components/SearchBar";
// CSS styles
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <ThemeProvider theme={theme}>
        <div className={styles.bg}>
        <p className={styles.header}>
          Ja<span style={{ color: "#ff0000" }}>mmm</span>ing
        </p>
          <SearchBar />
        </div>

        {/* Add other components here */}
      </ThemeProvider>
    </div>
  );
}

export default App;
