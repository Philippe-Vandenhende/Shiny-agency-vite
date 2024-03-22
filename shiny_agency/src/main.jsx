import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey/Survey';
import Header from './components/Header';
import Error from './components/Error';
import Freelances from './pages/Freelances';
import Results from './pages/Results';
import { SurveyProvider, ThemeProvider } from './utils/context';
import Footer from './components/Footer';
import GlobalStyle from './utils/style/GlobalStyle';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <SurveyProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/survey/:questionNumber' element={<Survey />} />
          <Route path='/results' element={<Results />} />
          <Route path='/Freelances' element={<Freelances />} />
          <Route path='*' element={<Error />} />
        </Routes>
        </SurveyProvider>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
