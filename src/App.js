import Container from '@mui/material/Container';

import { Header } from './components';
import AppRouter from './links/AppRouter';


function App() {
  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        <AppRouter/>
      </Container>
    </>
  );
}


export default App;
