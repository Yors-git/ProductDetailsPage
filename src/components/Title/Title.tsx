import { colors, fonts } from '@styles';
import styled from 'styled-components';

const MainContainer = styled.div`
	background-color: ${colors.coolGrey};
	display: flex;
	width: 100vw;
	flex-direction: column;
	height: 256px;
	align-items: center;
	@media (max-width: 576px) {
		height: 72px;
	}
`;

const TitleText = styled.h1`
	${fonts.main500};
	color: ${colors.darkBlue};
	line-height: 48.41px;
	font-size: 40px;
	margin: 82px 0 0;
	@media (max-width: 576px) {
    margin: 17px 0 0;
		font-size: 18px;
		line-height: 21.78px;
	}
`;

const Subtitle = styled.h5`
	${fonts.main300};
	color: ${colors.darkBlue};
	line-height: 32px;
	font-size: 18px;
	letter-spacing: 2px;
  margin: 20px 0 0;
	@media (max-width: 576px) {
		line-height: 12.1px;
		font-size: 10px;
    margin: 5px 0 0;
	}
`;

const Title = () => {
	return (
		<MainContainer>
			<TitleText>TV COLLECTION</TitleText>
			<Subtitle>HOME / PRODUCT / TV COLLECTION</Subtitle>
		</MainContainer>
	);
};

export default Title;
