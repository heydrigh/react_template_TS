import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import Routes from "./routes/index";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
