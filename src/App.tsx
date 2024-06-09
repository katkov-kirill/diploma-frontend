import './App.css';

import { Route, Routes } from 'react-router-dom';
import { SignIn, SignUp, Welcome } from './components/pages';

import Box from '@mui/material/Box';
import { LanguageBar } from '@components/modules';
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack>
      <LanguageBar />
      <Box width="100%">
        <Routes>
          <Route path="welcome" element={<Welcome />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </Box>
    </Stack>
  );
}

export default App;
