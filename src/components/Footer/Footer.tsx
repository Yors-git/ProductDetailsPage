import styled from 'styled-components';
import { colors, fonts } from '@styles';
import Location from '@assets/Icons/Location';
import Phone from '@assets/Icons/Phone';

const footerListsData = [
	{
		title: 'INFORMATION',
		content: [
			'About',
			'Delivery information',
			'Privacy Policy',
			'Sales',
			'Terms & Conditions',
			'EMI Payment'
		]
	},
	{
		title: 'ACCOUNT',
		content: [
			'My Account',
			'My Orders',
			'Returns',
			'Shipping',
			'Wishlist',
			'Account Details'
		]
	},
	{
		title: 'STORE',
		content: ['Affiliate', 'Discounts', 'Sale', 'Contact', 'All Collections']
	}
];

const MainContainer = styled.div`
	display: flex;
	min-height: 253px;
	background-color: ${colors.darkGrey};
	flex-direction: column;
	padding: 39px 32px 20px;
	justify-content: space-between;
	@media (min-width: 576px) {
		min-height: 613px;
		padding: 58px 40px 89px 80px;
		position: relative;
	}
`;

const ColumnsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
	@media (min-width: 576px) {
		flex-direction: row;
	}
`;

const FirstColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		margin: 0 24px 29px 80px;
		width: 328px;
	}
`;
const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		margin: 0 0 0 50px;
	}
`;
const LastColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		margin: 0 0 0 64px;
	}
`;

const ColumnTitle = styled.h4`
	margin: 0;
	${fonts.main500};
	font-size: 10px;
	line-height: 12.1px;
	color: ${colors.white};
	text-decoration: underline;
  @media (min-width: 576px) {
    font-size: 24px;
    line-height: 29.05px;
    text-decoration: none;
`;

const ColumnContent = styled.div`
	display: none;
	@media (min-width: 576px) {
		display: flex;
		flex-direction: column;
	}
`;

const ColumnText = styled.p`
	display: flex;
	align-items: center;
	margin: 29px 0 0;
	color: ${colors.white};
	${fonts.main400};
	font-size: 18px;
	line-height: 30px;
`;

const ColumnList = styled.ul`
	display: none;
	@media (min-width: 576px) {
		display: flex;
		list-style-type: none;
		flex-direction: column;
		padding: 0;
		margin: 29px 0;
		gap: 13px;
	}
`;

const ColLi = styled.li`
	${fonts.main400};
	font-size: 18px;
	line-height: 21.78px;
	color: ${colors.white};
`;

const Copyright = styled.p`
	${fonts.main400};
	font-size: 12px;
	line-height: 14.52px;
	color: ${colors.white};
	margin: 0;
	text-align: center;
	@media (min-width: 576px) {
		font-size: 15px;
		line-height: 18.15px;
	}
`;

const HR = styled.hr`
	display: none;
	@media (min-width: 576px) {
		display: block;
		position: absolute;
		left: 80px;
		right: 0;
		border: none;
		height: 1px; /* Height of the HR */
		background-color: ${colors.white50};
		bottom: 200px;
	}
`;

const Footer = () => {
	return (
		<MainContainer>
			<ColumnsContainer>
				<FirstColumnContainer>
					<ColumnTitle>ABOUT US</ColumnTitle>
					<ColumnContent>
						<ColumnText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
							laoreet.
						</ColumnText>
					</ColumnContent>
				</FirstColumnContainer>
				{footerListsData.map((lis, i) => {
					return (
						<ColumnContainer key={i}>
							<ColumnTitle>{lis.title}</ColumnTitle>
							<ColumnList>
								{lis.content.map(el => (
									<ColLi>{el}</ColLi>
								))}
							</ColumnList>
						</ColumnContainer>
					);
				})}

				<LastColumnContainer>
					<ColumnTitle>CONTACT US</ColumnTitle>
					<ColumnContent>
						<ColumnText>
							If you have any query, please contact us needus24@gmail.com
						</ColumnText>
						<ColumnText>
							<Location />
							California, USA
						</ColumnText>
						<ColumnText>
							<Phone />
							+12012987481
						</ColumnText>
					</ColumnContent>
				</LastColumnContainer>
			</ColumnsContainer>
			<HR />
			<Copyright>Copyright 2023 All Right Reserved</Copyright>
		</MainContainer>
	);
};

export default Footer;
