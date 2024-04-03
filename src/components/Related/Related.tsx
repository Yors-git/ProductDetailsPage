import { colors, fonts } from '@styles';
import styled from 'styled-components';
import Card from '@components/Card';
import tv1 from '@assets/images/other1.png';
import tv2 from '@assets/images/other2.png';
import tv3 from '@assets/images/other3.png';
import tv4 from '@assets/images/other4.png';
import Ellipse from '@assets/Icons/Ellipse';

const tvArray = [
	{
		tagText: 'NEW',
		tagColor: colors.green,
		isFavorite: true,
		imageUrl: tv1,
		text: 'Sony BRAVIA XR Android TV',
		price: '$800.22',
		offer: '$1000.66'
	},
	{
		tagText: '-10%',
		tagColor: colors.red,
		isFavorite: false,
		imageUrl: tv2,
		text: 'Mi P1 Smart Android HD TV',
		price: '$400.00'
	},
	{
		tagText: 'HOT',
		tagColor: colors.yellow,
		isFavorite: false,
		imageUrl: tv3,
		text: 'Konka OLED Android Tv',
		price: '$700.00'
	},
	{
		tagText: '2 Years Warranty',
		tagColor: colors.purple,
		isFavorite: false,
		imageUrl: tv4,
		text: 'TCL Roku Android Tv',
		price: '$800.00'
	}
];

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	@media (min-width: 576px) {
		margin: 100px 0 0;
	}
`;

const Title = styled.h4`
	${fonts.main500};
	line-height: 21.78px;
	font-size: 18px;
	color: ${colors.black};
	margin: 10px 0 16px;
	text-align: center;
	@media (min-width: 576px) {
		color: ${colors.darkBlue};
		line-height: 38.73px;
		font-size: 32px;
		margin: 10px 0 66px;
	}
`;

const CardsContainer = styled.div`
	display: flex;
	gap: 24px;
	justify-content: center;
	align-items: center;
	@media (min-width: 576px) {
		height: 530px;
	}
`;

const EllipseContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin: 28px 0 0;
	gap: 6px;
	@media (min-width: 576px) {
		margin: 53px 0 0;
		gap: 8px;
	}
`;

const Related = () => {
	const isMobile = window.innerWidth < 576;
	const adjustedTvArray = isMobile ? tvArray.slice(0, -2) : tvArray;
	return (
		<MainContainer>
			<Title>Related Products</Title>
			<CardsContainer>
				{adjustedTvArray.map(tv => (
					<Card
						tagText={tv.tagText}
						tagColor={tv.tagColor}
						onFavoriteToggle={() => {}}
						isFavorite={tv.isFavorite}
						imageUrl={tv.imageUrl}
						text={tv.text}
						price={tv.price}
						offer={tv.offer}
					/>
				))}
			</CardsContainer>
			<EllipseContainer>
				{Array.from({ length: 5 }).map((_, index) => (
					<Ellipse
						color={index === 0 ? colors.red : colors.iconGrey}
						size={isMobile ? 6 : 14}
						key={index}
					/>
				))}
			</EllipseContainer>
		</MainContainer>
	);
};

export default Related;
