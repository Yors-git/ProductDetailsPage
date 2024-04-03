import { colors, fonts } from '@styles';
import styled from 'styled-components';
import Dropdown from '@assets/Icons/Dropdown';

const TopBarContainer = styled.nav`
	display: flex;
	width: 100%;
	background-color: ${colors.darkGrey};
	height: 60px;
	justify-content: space-between;
	@media (max-width: 576px) {
		display: none;
	}
`;

const TopBarText = styled.p`
	color: ${colors.white};
	${fonts.main300};
	line-height: 19.36px;
	margin: 20px 0 0 80px;
	font-size: 16px;
`;

const TopBarSelectosContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0 40px 0 0;
`;

const TopBarSelectors = styled.p`
	color: ${colors.white};
	${fonts.main300};
	line-height: 19.36px;
	font-size: 16px;
	padding-right: 9px;
`;

const TopBarSelectorsDivider = styled.p`
	color: ${colors.white};
	${fonts.main300};
	line-height: 19.36px;
	font-size: 16px;
	margin: 0 23px;
`;

const TopBar = () => {
	return (
		<TopBarContainer>
			<TopBarText>Welcome to Needus & Get the best product</TopBarText>
			<TopBarSelectosContainer>
				<TopBarSelectors>ENG</TopBarSelectors>
				<Dropdown />
				<TopBarSelectorsDivider> | </TopBarSelectorsDivider>
				<TopBarSelectors>USD</TopBarSelectors>
				<Dropdown />
			</TopBarSelectosContainer>
		</TopBarContainer>
	);
};

export default TopBar;
