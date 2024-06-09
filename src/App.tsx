import { Route, Routes } from 'react-router-dom';
import { SignIn } from './components/pages/SignIn';
import './App.css';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box width="100%" minHeight="100vh">
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </Box>
  );
}

export default App;
