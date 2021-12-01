import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from './redux/configureStore';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/*' element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
