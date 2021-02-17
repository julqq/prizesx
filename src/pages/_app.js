import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import { Provider } from "next-auth/client";

const GlobalStyle = createGlobalStyle`
  body {
		font-family: 'Comfortaa', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		background-color: #E2E0DE;
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
				<title>PrizesX</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<link
					href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Provider session={pageProps.session}>
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</>
	);
}
