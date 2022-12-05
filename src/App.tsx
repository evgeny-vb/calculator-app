import {ThemeProvider} from "styled-components";
import Calculator from "./components/calculator/Calculator";
import {GlobalStyles} from "./GlobalStyles";
import UiState from "./store/uiState";
import {observer} from "mobx-react-lite";

const App = observer(() => {

  return (
    <ThemeProvider theme={UiState.theme}>
      <GlobalStyles/>
      <Calculator/>
    </ThemeProvider>
  )
})

export default App
