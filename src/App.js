import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import theme from './theme';

import SearchResults from './components/searchResults';
import MyImages from './components/myImages';
import AppBar from './components/appBar'




function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} themeMode='dark' full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>

            <AppBar  showSidebar={showSidebar} setShowSidebar={setShowSidebar} mobile={Boolean(size === 'small')}>
              
            </AppBar>

            <Box direction={size !== 'small' ? 'row' : 'column'} flex overflow={{ horizontal: 'hidden' }}>
              <Collapsible direction={size !== 'small' ? "horizontal" : "vertical"} open={showSidebar} >
                <MyImages mobile={Boolean(size === 'small')} />
              </Collapsible>
              <Box flex align='center' justify='center' overflow={{ vertical: 'scroll' }}>
                <SearchResults />
              </Box>
            </Box>

          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
