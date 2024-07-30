import './App.css';

import { Route, Routes } from 'react-router-dom';
import { SignIn, SignUp, Welcome } from '@components/pages';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Home from '@components/pages/Home';
import { Layout } from '@components/layout';

function App() {
  return (
    <Stack>
      <Box width="100%">
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </Box>
    </Stack>
  );
}

export default App;
