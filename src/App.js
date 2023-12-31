import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import NewsCard from './components/NewsCard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import { QueryClient, QueryClientProvider } from 'react-query'; 

const queryClient = new QueryClient(); 

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Container maxWidth="md"><NewsCard /></Container>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
