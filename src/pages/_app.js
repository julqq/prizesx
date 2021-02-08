import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`



  * {
		font-family: 'Comfortaa', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
	colors: {
		primary: "#0E2431",
		gray: "#E2E0DE",
		white: "#F6F4F1",
		red: "#FC3A52",
		yellow: "#F9B248",
		black: "#000000",
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<link
					href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
