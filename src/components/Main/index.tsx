import { ThemeProvider } from 'styled-components';

import {
  Container,
} from './styles';

import theme from '@/theme';
import GlobalStyles from '@/theme/global-styles';

import SignUp from '@/components/SignUp';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <SignUp />
      </Container>
    </ThemeProvider>
  );
};

export default Main;
