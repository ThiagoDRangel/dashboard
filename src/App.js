import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Bar from './pages/Bar';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex' }}>
          <main className="content">
            <Switch>
              <Route path="/bar" element={<Bar />} />
            </Switch>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;

