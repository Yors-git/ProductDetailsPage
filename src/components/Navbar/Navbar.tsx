import styled from 'styled-components';
import TopBar from './TopBar';
import CenterBar from './CenterBar';
import BottomBar from './BottomBar';

const MainNavbarContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

const Navbar = () => {
  return (
    <MainNavbarContainer>
      <TopBar />
      <CenterBar />
      <BottomBar />
    </MainNavbarContainer>
  )
}

export default Navbar