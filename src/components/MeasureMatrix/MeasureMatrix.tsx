import { colors, fonts } from '@styles';
import styled from 'styled-components';

interface IMeasuresMatrixProps {
	measures: string[];
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	height: 75px;
	padding: 10px 0;
	align-items: center;
	border-top: 1px solid ${colors.clearGrey};
	border-bottom: 1px solid ${colors.clearGrey};
	margin: 20px 0 0;
	@media (min-width: 576px) {
		margin: 27px 0 0;
    padding: 0;
		height: 178px;
	}
`;

const StyledParagraph = styled.p`
  display: flex;
	${fonts.main400};
	line-height: 12.1px;
	font-size: 10px;
	width: 30%;
	text-align: center;
	margin: 0;
	@media (min-width: 576px) {
    ${fonts.main300};
    font-size: 18px;
    line-height: 21.78px;
    text-align: left;
		width: 30%;
		height: 60px;
    align-items: center;
    justify-content: center;
	}
`;

const MeasureMatrix: React.FC<IMeasuresMatrixProps> = ({ measures }) => {
  const isMobile = window.innerWidth < 576;
	return (
		<Container>
			{measures.map((el, i) => (
				<StyledParagraph
					key={i}
					style={{ color: i === 0 ? colors.red : 'inherit', border: i === 0 && !isMobile ? `1px solid ${colors.red}` : 'none' }}
				>
					{el}
				</StyledParagraph>
			))}
		</Container>
	);
};

export default MeasureMatrix;
