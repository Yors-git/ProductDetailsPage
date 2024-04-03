import { colors, fonts } from '@styles';
import styled from 'styled-components';
import Search from '@assets/Icons/Search';
import Hamburger from '@assets/Icons/Hamburger';
import Dropdown from '@assets/Icons/Dropdown';
import Heart from '@assets/Icons/Heart';
import Cart from '@assets/Icons/Cart';
import BadgeCount from '@components/Badge';
import UserIcon from '@assets/Icons/UserIcon';
import HeartMobile from '@assets/Icons/HeartMobile';
import CartMobile from '@assets/Icons/CartMobile';

const CenterBarContainer = styled.div`
	display: flex;
	padding: 50px 40px 50px 58px;
	max-height: 150px;
	@media (max-width: 576px) {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		padding: 0;
		height: 77px;
	}
`;

const Brand = styled.p`
	${fonts.secondary700};
	color: ${colors.darkBlue};
	font-size: 48px;
	line-height: 50.35px;
	margin: 0;
	@media (max-width: 576px) {
		${fonts.main600};
		font-size: 16px;
		line-height: 19.36px;
		margin: 44px auto 0;
	}
`;

const BrandDot = styled.span`
	color: ${colors.red};
	@media (max-width: 576px) {
	}
`;

const HamburgerMenu = styled.button`
	display: none;
	@media (max-width: 576px) {
		margin: 27px 16px 0;
		display: block;
		background-color: ${colors.red};
		border: none;
		width: 40px;
		height: 40px;
		padding-top: 4px;
	}
`;

const SearchForm = styled.form`
	display: flex;
	flex-direction: row;
	position: relative;
	align-items: center;
	width: fit-content;
	@media (max-width: 576px) {
		display: none;
	}
`;

const SearchInput = styled.input`
	flex-grow: 1;
	background-color: ${colors.white};
	border: 1px solid ${colors.clearGrey};
	color: ${colors.lightGrey};
	${fonts.main300};
	font-size: 18px;
	padding: 12px 80px 12px 15px;
	height: 76px;
	width: 449px;
	margin-left: 145px;
	box-sizing: border-box;
	@media (max-width: 1200px) {
		margin-left: 40px;
		width: 300px;
	}
`;

const SearchButton = styled.button`
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
	height: 66px;
	width: 63px;
	padding: 21px 20px 21px 19px;
	border: none;
	background-color: ${colors.darkGrey};
	color: ${colors.white};
	font-size: 17px;
`;

const CategoriesLoginContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: ${colors.white};
	border: 1px solid ${colors.clearGrey};
	padding: 0 28px 0 24px;
	width: 100%;
	max-width: 476px;
	min-width: 200px;
	white-space: nowrap;
	justify-content: space-between;
	box-sizing: border-box;
	@media (max-width: 576px) {
		display: none;
	}
`;

const CategoriesLoginText = styled.p`
	${fonts.main300};
	color: ${colors.darkBlue};
	margin: 0;
	padding-right: 9px;
`;

const GenericTextContainer = styled.div`
	display: flex;
`;

const LoginSignupDivider = styled.p`
	color: ${colors.clearGrey};
	margin: 0 9px 0 0;
`;

const IconsContainerDesktop = styled.div`
	display: flex;
	align-items: center;
	margin-left: 39px;
	gap: 17px;
	@media (max-width: 576px) {
		display: none;
	}
`;

const IconsContainerMobile = styled.span`
	display: none;
	@media (max-width: 576px) {
		display: flex;
		margin: 44px 16px 0 0;
		justify-content: end;
		gap: 6px;
	}
`;

const CartBadgeContainer = styled.div`
	position: relative;
`;

const CartMobileSpan = styled.span`
	position: relative;
	margin-left: 8px;
`;

const CenterBar = () => {
	return (
		<CenterBarContainer>
			<HamburgerMenu>
				<Hamburger />
			</HamburgerMenu>
			<Brand>
				Needus<BrandDot>.</BrandDot>
			</Brand>
			<SearchForm>
				<SearchInput placeholder='Search Products' />
				<SearchButton>
					<Search />
				</SearchButton>
			</SearchForm>
			<CategoriesLoginContainer>
				<GenericTextContainer>
					<CategoriesLoginText>All Categories</CategoriesLoginText>
					<Dropdown color={colors.darkBlue} />
				</GenericTextContainer>
				<GenericTextContainer>
					<CategoriesLoginText>Login</CategoriesLoginText>
					<LoginSignupDivider> | </LoginSignupDivider>
					<CategoriesLoginText>Signup</CategoriesLoginText>
				</GenericTextContainer>
			</CategoriesLoginContainer>
			<IconsContainerDesktop>
				<Heart />
				<CartBadgeContainer>
					<Cart />
					<BadgeCount unreadCount={6} />
				</CartBadgeContainer>
			</IconsContainerDesktop>
			<IconsContainerMobile>
				<Search color={colors.black} boxSize={20} stroke-width={0.5} />
				<UserIcon />
				<HeartMobile />
				<CartMobileSpan>
					<CartMobile />
					<BadgeCount unreadCount={6} small />
				</CartMobileSpan>
			</IconsContainerMobile>
		</CenterBarContainer>
	);
};

export default CenterBar;
