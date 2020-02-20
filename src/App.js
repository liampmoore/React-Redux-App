import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import { Menu } from 'grommet-icons';
import theme from './theme';

import SearchResults from './components/searchResults';
import MyImages from './components/myImages';


const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} themeMode='dark' full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>

            <AppBar justify='start'>
              <Button icon={<Menu />} onClick={() => { setShowSidebar(!showSidebar) }} />
              <Heading level='3' margin='none'>Search Unsplash</Heading>
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
