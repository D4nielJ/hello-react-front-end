import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import store from './redux/configureStore';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <Router>
            <Routes>
              <Route path='/*' element={<Greeting />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
