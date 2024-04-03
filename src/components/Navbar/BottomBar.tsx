import { colors, fonts } from '@styles';
import styled from 'styled-components';
import Bullets from '@assets/Icons/Bullets';
import Dropdown from '@assets/Icons/Dropdown';
import headphones from '@assets/images/headphones.png';

const MainContainer = styled.div`
	display: flex;
	height: 76px;
	align-items: center;
	flex-grow: 1;
	@media (max-width: 576px) {
		display: none;
	}
`;

const AllCategories = styled.div`
	background-color: ${colors.red};
	display: flex;
	align-items: center;
	min-width: 371px;
	flex-grow: 1;
	height: 76px;
	justify-content: center;
	gap: 17px;
`;

const AllCategoriesText = styled.p`
	margin: 0 10px;
	color: ${colors.white};
	${fonts.main500};
	line-height: 29.05;
	font-size: 24px;
  @media (max-width: 1200px) {
		font-size 18px;
	}
`;

const MenuItems = styled.div`
	background-color: ${colors.darkGrey};
	border-right: 1px solid ${colors.white};
	display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 771px;
	flex-grow: 1;
	width: 100%;
	height: 76px;
	padding: 0 88px 0 129px;
	@media (max-width: 1200px) {
		padding: 0 20px;
	}
`;

const ItemText = styled.p`
	margin: 0;
	${fonts.main400};
	font-size: 16px;
	line-height: 19.36px;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${colors.white};
	gap: 8px;
	margin-right: 20px;
`;

const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: ${colors.darkGrey};
	border-left: 1px solid ${colors.white};
	height: 76px;
	min-width: 298px;
	flex-grow: 1;
`;

const ContactImage = styled.img`
	margin: 0 25px 0 20px;
`;

const ContactText1 = styled.p`
	margin: 0;
	color: ${colors.white};
	${fonts.main300};
	line-height: 18.15px;
	font-size: 15px;
`;

const ContactText2 = styled.p`
	margin: 0;
	color: ${colors.white};
	${fonts.main500};
	line-height: 21.78px;
	font-size: 18px;
`;

const menuItems = ['HOME', 'ABOUT', 'PRODUCT', 'PAGES', 'CONTACT'];

const BottomBar = () => {
	return (
		<MainContainer>
			<AllCategories>
				<Bullets />
				<AllCategoriesText>All Categories</AllCategoriesText>
				<Dropdown width={15} height={7.5} />
			</AllCategories>
			<MenuItems>
				{menuItems.map((item, index) => (
					<Item key={index}>
						<ItemText>{item}</ItemText>
						<Dropdown />
					</Item>
				))}
			</MenuItems>
			<ContactContainer>
				<ContactImage src={headphones} alt='Contact' />
				<div>
					<ContactText1>Contact Us 24/7</ContactText1>
					<ContactText2>+12012987481</ContactText2>
				</div>
			</ContactContainer>
		</MainContainer>
	);
};

export default BottomBar;
