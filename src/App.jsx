import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";
import { StyledToast } from "./styles/toast";

const App = () => {
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <StyledToast autoClose={4000} />

      <RoutesMain />
    </div>
  );
};

export default App;
