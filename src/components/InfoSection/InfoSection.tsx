import Tabs from '@components/Tabs';
import styled from 'styled-components';
import Related from '@components/Related';

const MainContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 20px 0;
	@media (min-width: 576px) {
		margin: 0 20px 0;
	}
`;

const InfoSection = () => {
	return (
		<MainContainer>
			<Tabs />
			<Related />
		</MainContainer>
	);
};

export default InfoSection;
