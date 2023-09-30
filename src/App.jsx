import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import HomeView from './Views/HomeView';

const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<HomeView />}/>
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
