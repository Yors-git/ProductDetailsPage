import React from 'react';
import { colors, fonts } from '@styles';
import styled from 'styled-components';
import FavHeart from '@assets/Icons/FavHeart';
import Cart from '@assets/Icons/Cart';

interface ICardProps {
	buttonText?: string;
	imageUrl: string;
	isFavorite: boolean;
	onFavoriteToggle: () => void;
	tagColor: string;
	tagText: string;
	text: string;
	price: string;
	offer?: string;
}

const CardWithText = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 145px;
	height: 227px;
	box-sizing: border-box;
	@media (min-width: 576px) {
		width: 300px;
	}
`;

const CardContainer = styled.div`
	padding: 0 16px 20px;
	height: 166px;
	position: relative;
	background-color: ${colors.clearGrey};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	@media (min-width: 576px) {
		min-height: 430px;
	}
`;

const Tag = styled.div<{ tagColor: string }>`
	display: flex;
	min-width: 28px;
	width: fit-content;
	height: 11px;
	padding: 0 3px;
	background-color: ${props => props.tagColor};
	position: absolute;
	border-radius: 100px;
	top: 9px;
	left: 8px;
	${fonts.main500};
	line-height: 7.26px;
	font-size: 6px;
	color: ${colors.white};
	justify-content: center;
	align-items: center;
	@media (min-width: 576px) {
		min-width: 57px;
		top: 22px;
		left: 23px;
		height: 26px;
		line-height: 14.52px;
		font-size: 12px;
		padding: 0 10px;
	}
`;

const FavoriteIconContainer = styled.div`
	position: absolute;
	top: 7px;
	right: 9px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid ${colors.iconGrey};
	background-color: ${colors.clearGrey};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	@media (min-width: 576px) {
		top: 13px;
		right: 35px;
		width: 60px;
		height: 60px;
	}
`;

const ImageContainer = styled.div`
	width: 100px;
	height: 106px;
	display: flex;
	justify-content: center;
	align-items: end;
	padding: 25px 0px;
	@media (min-width: 576px) {
		width: 257px;
		height: 257px;
		padding: 0 0 60px;
	}
`;

const Image = styled.img`
	width: 100px;
	height: 66px;
	object-fit: cover;
	@media (min-width: 576px) {
		width: 230px;
		height: 145px;
	}
`;

const Button = styled.button`
	width: 97px;
	height: 25px;
	background-color: ${colors.white};
	color: ${colors.midGrey};
	border: none;
	padding: 0;
	cursor: pointer;
	${fonts.main500};
	line-height: 9.68px;
	font-size: 8px;
	align-items: center;
	display: flex;
	justify-content: center;
	gap: 8px;
	@media (min-width: 576px) {
		width: 203px;
		height: 51px;
		margin-bottom: 27px;
		font-size: 18px;
		line-height: 21.78px;
	}
`;

const CardFooter = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const CardFooterText = styled.p`
	margin: 12px 0 0;
	${fonts.main400};
	font-size: 10px;
	line-height: 13.31px;
	color: ${colors.darkBlue};
	@media (min-width: 576px) {
		margin: 38px 0 0;
		font-size: 20px;
		line-height: 24.2px;
	}
`;

const CardFooterPrice = styled.p`
	margin: 0;
	${fonts.main600};
	font-size: 12px;
	line-height: 14.52px;
	color: ${colors.darkBlue};
	@media (min-width: 576px) {
		margin: 13px 0 0;
		font-size: 20px;
		line-height: 24.2px;
	}
`;

const OfferSpan = styled.span`
	${fonts.main600};
	line-height: 12.1px;
	font-size: 10px;
	color: ${colors.buttonGrey};
	text-decoration: line-through;
	text-decoration-style: solid;
	text-decoration-thickness: 2px;
	margin: 0 3px 0 6px;
	@media (min-width: 576px) {
    font-size: 20px;
    line-height: 24.2px;
  }
	}
`;

const Card: React.FC<ICardProps> = ({
	buttonText = 'Add to cart',
	imageUrl,
	isFavorite,
	onFavoriteToggle,
	tagColor,
	tagText,
	text,
	price,
	offer
}) => {
	const isMobile = window.innerWidth < 576;
	return (
		<CardWithText>
			<CardContainer>
				<Tag tagColor={tagColor}>{tagText}</Tag>
				<FavoriteIconContainer onClick={onFavoriteToggle}>
					<FavHeart
						width={isMobile ? 9 : 25}
						height={isMobile ? 8 : 22}
						color={isFavorite ? colors.red : ''}
					/>
				</FavoriteIconContainer>
				<ImageContainer>
					<Image src={imageUrl} alt='Card Image' />
				</ImageContainer>
				<Button>
					<Cart size={isMobile ? 11 : 18} color={colors.midGrey} />
					{buttonText}
				</Button>
			</CardContainer>
			<CardFooter>
				<CardFooterText>{text}</CardFooterText>
				<CardFooterPrice>
					{price}
					{offer && <OfferSpan>{offer}</OfferSpan>}
				</CardFooterPrice>
			</CardFooter>
		</CardWithText>
	);
};

export default Card;
