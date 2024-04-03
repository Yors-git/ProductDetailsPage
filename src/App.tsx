import Navbar from '@components/Navbar';
import Title from '@components/Title';
import DetailsSection from '@components/DetailsSection';
import InfoSection from '@components/InfoSection';
import SubscribeForm from '@components/SubscribeForm';
import styled from 'styled-components';
import Footer from '@components/Footer';

const AppContainer = styled.div`
	display: flex;
	max-width: 100vw;
	flex-direction: column;
	justify-content: center;
  margin-bottom: 100px;
	@media (min-width: 576px) {
		justify-content: center;
		align-items: center;
    margin-bottom: 0px;
	}
`;

const App = () => {
	return (
		<AppContainer>
			<Navbar />
			<Title />
			<DetailsSection />
      <InfoSection />
      <SubscribeForm />
      <Footer />
		</AppContainer>
	);
};

export default App;
