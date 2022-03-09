import "./App.css";
import ThemeProvider from "./context/ThemeProvider";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider />
    </div>
  );
};

export default App;
