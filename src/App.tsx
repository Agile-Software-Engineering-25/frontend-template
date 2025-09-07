import { BrowserRouter } from 'react-router';
import RoutingComponent from '@components/RoutingComponent/RoutingComponent';
import {
  createCustomJoyTheme,
  createCustomMuiTheme,
} from '@agile-software/shared-components';
import {
  CssBaseline,
  THEME_ID as MATERIAL_THEME_ID,
  ThemeProvider,
} from '@mui/material';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy';
import './i18n';
import { Provider } from 'react-redux';
import store from '@stores/index.ts';

const joyTheme = createCustomJoyTheme();
const muiTheme = createCustomMuiTheme();

type AppProps = {
  basename?: string;
};

/**
 * @param props - AppProps, also contains all customProps delivered from the rootUi
 */
function App(props: AppProps) {
  const { basename } = props;
  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={{ [MATERIAL_THEME_ID]: muiTheme }}>
        <JoyCssVarsProvider theme={joyTheme}>
          <BrowserRouter basename={basename ?? '/'}>
            <RoutingComponent />
          </BrowserRouter>
        </JoyCssVarsProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
