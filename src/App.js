import React, { useState } from 'react';
import {
  Box,
  Collapsible,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import theme from './theme';

import SearchResults from './components/searchResults';
import MyImages from './components/myImages';
import AppBar from './components/appBar'

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));


function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
