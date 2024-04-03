import React, { useState } from 'react';
import { colors, fonts } from '@styles';
import styled from 'styled-components';
import ScrollLeft from '@assets/Icons/ScrollLeft';
import ScrollRight from '@assets/Icons/ScrollRight';

interface ICarouselProps {
	photos: string[];
}

const CarouselContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 576px) {
		flex-direction: row-reverse;
		justify-content: center;
		align-items: flex-start;
		width: 692px;
		height: 548px;
		margin: 0 0 0 50px;
	}
`;

const MainImageContainer = styled.div`
	display: flex;
	width: 300px;
	height: 200px;
	justify-content: center;
	align-items: center;
	margin: 10px 45px 5.8px;
	@media (min-width: 576px) {
		background-color: ${colors.backgroundGrey};
		width: 528px;
		height: 548px;
		margin: 0 0 0 12px;
	}
`;

const MainImage = styled.img`
	width: 300px;
	height: 200px;
	@media (min-width: 576px) {
		width: 468px;
		height: 310px;
	}
`;

const ThumbnailsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 353px;
	height: 89px;
	overflow: hidden;
	@media (min-width: 576px) {
		flex-direction: column;
		width: 152px;
		height: 548px;
	}
`;

const ThumbnailContainer = styled.div`
	display: flex;
	width: 83px;
	height: 88px;
	align-items: center;
	justify-content: center;
	border: 1px solid ${colors.backgroundGrey};
	@media (min-width: 576px) {
		width: 151px;
		height: 115px;
	}
`;

const ThumbnailImage = styled.img`
	width: 69px;
	height: 52px;
	@media (min-width: 576px) {
		width: 128px;
		height: 80px;
	}
`;

const NavButton = styled.button`
	display: block;
	width: 20px;
	height: 20px;
	background-color: ${colors.red};
	border: none;
	@media (min-width: 576px) {
		display: none;
		margin: 0 5px;
	}
`;

const DescriptionText = styled.p`
	margin: 0 0 11px;
	${fonts.main300};
	line-height: 12.1px;
	font-size: 10px;
	color: ${colors.midGrey};
	@media (min-width: 576px) {
		margin: 24px 0 0 12px;
		line-height: 18.15px;
		font-size: 15px;
	}
`;

const HelperContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 576px) {
		flex-direction: column;
		align-items: start;
	}
`;

const Carousel: React.FC<ICarouselProps> = ({ photos }) => {
	const [selectedImage, setSelectedImage] = useState(photos[0]);

	const indexOfSelectedImage = photos.indexOf(selectedImage);

	const isMobile = window.innerWidth < 576;
	// this is only to avoid working on the functionality to show only 3 pictures on mobile due to time constraints, should be managed in a different way
	const managedPhotos = isMobile ? photos.slice(0, -1) : photos;

	return (
		<CarouselContainer>
			<HelperContainer>
				<MainImageContainer>
					<MainImage src={selectedImage} />
				</MainImageContainer>
				<DescriptionText>
					*LG C2 42 (106cm) 4K Smart OLED evo TV
				</DescriptionText>
			</HelperContainer>
			<ThumbnailsContainer>
				<NavButton
					onClick={() => {}}
					style={
						indexOfSelectedImage === 0
							? { backgroundColor: `${colors.buttonGrey}` }
							: {}
					}
				>
					<ScrollLeft />
				</NavButton>

				{managedPhotos.map((photo, index) => (
					<ThumbnailContainer
						key={index}
						onClick={() => setSelectedImage(photo)}
						style={
							indexOfSelectedImage === index
								? { border: `1px solid ${colors.red}` }
								: {}
						}
					>
						<ThumbnailImage src={photo} />
					</ThumbnailContainer>
				))}
				<NavButton
					onClick={() => {}}
					style={
						indexOfSelectedImage === managedPhotos.length - 1
							? { backgroundColor: `${colors.buttonGrey}` }
							: {}
					}
				>
					<ScrollRight />
				</NavButton>
			</ThumbnailsContainer>
		</CarouselContainer>
	);
};

export default Carousel;
