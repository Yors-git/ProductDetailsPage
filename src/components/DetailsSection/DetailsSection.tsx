import { colors, fonts } from '@styles';
import Carousel from '@components/Carousel';
import PurchaseDetails from '@components/PurchaseDetails';
import MeasureMatrix from '@components/MeasureMatrix';
import styled from 'styled-components';
import Ellipse from '@assets/Icons/Ellipse';
import Star from '@assets/Icons/Star';

import tv1 from '@assets/images/tv1sm.png';
import tv2 from '@assets/images/tv2.png';
import tv3 from '@assets/images/tv3.png';
import tv4 from '@assets/images/tv4.png';

const carouselImages = [tv1, tv2, tv3, tv4];

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	@media (min-width: 576px) {
		flex-direction: row;
		margin: 82px 0 0;
	}
`;

const DetailsContainer = styled.div`
	margin: 18px 20px 20px;
	max-width: 550px;
	@media (min-width: 576px) {
		margin: 0 20px 30px 35px;
	}
`;

const DetailsText = styled.p`
	margin: 0;
	${fonts.main400};
	lineheight: 12.1px;
	font-size: 10px;
	@media (min-width: 576px) {
		font-size: 18px;
		lineheight: 21.78px;
	}
`;

const DetailsSpan = styled.span`
	${fonts.main500};
	lineheight: 12.1px;
	font-size: 10px;
	@media (min-width: 576px) {
		font-size: 18px;
		lineheight: 21.78px;
	}
`;

const ModelText = styled.p`
	${fonts.main500};
	line-height: 16.94px;
	font-size: 14px;
	color: ${colors.darkBlue};
	margin: 8px 0 0 0;
	text-transform: uppercase;
	@media (min-width: 576px) {
		margin: 20px 0 0 0;
		line-height: 38.73px;
		font-size: 32px;
	}
`;

const StarsContainer = styled.div`
	display: flex;
	margin: 7px 0 12px;
	gap: 4px;
	@media (min-width: 576px) {
		margin: 20px 0;
	}
`;

const DetailsList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

const DetailsLi = styled.li`
	text-align: start;
	margin: 0;
	padding: 0;
	${fonts.main300};
	font-size: 11px;
	line-height: 13.31px;
	@media (min-width: 576px) {
		font-size: 16px;
		line-height: 19.36px;
		margin: 8px 0;
	}
`;

const HelperContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		flex-direction: column;
	}
`;

const DetailsSection = () => {
	const isMobile = window.innerWidth < 576;

	const detailsList = [
		'α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling',
		'Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume',
		'Hands-free Voice Control, Always Ready',
		'Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode',
		'Eye Comfort Display: Low-Blue Light, Flicker-Free'
	];

	const measures = [
		'106 cm (42)',
		'121 cm (48)',
		'139 cm (55)',
		'164 cm (65)',
		'196 cm (77)',
		'210 cm (83)'
	];

	return (
		<MainContainer>
			<Carousel photos={carouselImages} />
			<HelperContainer>
				<DetailsContainer>
					<DetailsText>
						<DetailsSpan>Brand: </DetailsSpan>LG
					</DetailsText>
					<DetailsText>
						<DetailsSpan>Model: </DetailsSpan>OLED42C2PSA
					</DetailsText>
					<DetailsText>
						<DetailsSpan>Availability: </DetailsSpan>Only 2 in Stock
					</DetailsText>
					<ModelText>
						LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
					</ModelText>
					<StarsContainer>
						<Star color={colors.red} size={isMobile ? 10 : 30} />
						<Star color={colors.red} size={isMobile ? 10 : 30} />
						<Star color={colors.red} size={isMobile ? 10 : 30} />
						<Star color={colors.red} size={isMobile ? 10 : 30} />
						<Star color={colors.backgroundGrey} size={isMobile ? 10 : 30} />
					</StarsContainer>
					<DetailsList>
						{detailsList.map((el, i) => (
							<DetailsLi key={i}>
								<Ellipse
									size={isMobile ? 4 : 8}
									margin={isMobile ? undefined : '0 3px 2px 0'}
								/>
								{el}
							</DetailsLi>
						))}
					</DetailsList>
					<MeasureMatrix measures={measures} />
				</DetailsContainer>
				<PurchaseDetails />
			</HelperContainer>
		</MainContainer>
	);
};

export default DetailsSection;
