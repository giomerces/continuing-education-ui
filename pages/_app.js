import { QueryClientProvider } from "react-query";
import { queryClient } from "src/services/queryClient";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MaterialUiThemeProvider } from "@mui/material/styles";
import store from "src/reduxStore";
import { theme } from "src/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MaterialUiThemeProvider theme={theme}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Provider>
      </MaterialUiThemeProvider>
    </ThemeProvider>
  );
}
