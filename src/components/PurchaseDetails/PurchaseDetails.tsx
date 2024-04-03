import { colors, fonts } from '@styles';
import styled, { css } from 'styled-components';
import Minus from '@assets/Icons/Minus';
import Plus from '@assets/Icons/Plus';

const Container = styled.div`
	max-width: 550px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	bottom: 0;
	background-color: white;
	z-index: 10;
	box-sizing: border-box;
	height: 100px;
	padding: 10px 24px 12px 21px;
	box-shadow: 0 -4px 6px -1px ${colors.shadow};
	@media (min-width: 576px) {
		box-shadow: none;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		padding: 20px 0 0;
		margin: 0 20px 0 35px;
		height: fit-content;
	}
`;

const AmountCurrencyContainer = styled.div`
	@media (min-width: 576px) {
		order: 1;
		padding-right: 20px;
	}
`;

const CurrencyP = styled.p`
	margin: 5px 0;
	${fonts.main300};
	line-height: 12.1px;
	font-size: 10px;
	@media (min-width: 576px) {
		${fonts.main400};
		line-height: 19.36px;
		font-size: 16px;
	}
`;

const AmountP = styled.p`
	margin: 5px 0;
	${fonts.main500};
	line-height: 21.78px;
	font-size: 18px;
	@media (min-width: 576px) {
		${fonts.main400};
		line-height: 38.73px;
		font-size: 32px;
	}
`;

const AmountSpan = styled.span`
	margin: 5px 9px;
	${fonts.main500};
	line-height: 19.36px;
	font-size: 16px;
	color: ${colors.buttonGrey};
	text-decoration: line-through;
	text-decoration-style: solid;
	text-decoration-thickness: 2px;
	@media (min-width: 576px) {
		${fonts.main400};
		line-height: 29.05px;
		font-size: 24px;
	}
`;

const CounterContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: ${colors.white};
	height: 31px;
	@media (min-width: 576px) {
		height: 60px;
		order: 3;
		justify-content: flex-end;
		flex-grow: 1;
		margin-top: 8px;
	}
`;

const CounterButton = styled.button`
	border: 1px solid ${colors.buttonGrey};
	background-color: ${colors.white};
	margin: 0;
	width: 25px;
	height: 100%;
	@media (min-width: 576px) {
		width: 64px;
	}
`;

const CounterSpan = styled.span`
	${fonts.main500};
	font-size: 10px;
	line-height: 12.1px;
	border-top: 1px solid ${colors.buttonGrey};
	border-bottom: 1px solid ${colors.buttonGrey};
	width: 25px;
	height: 100%;
	box-sizing: border-box;
	text-align: center;
	padding: 9px;
	@media (min-width: 576px) {
		width: 74px;
		${fonts.main400};
		line-height: 38.73px;
		font-size: 32px;
	}
`;

const HelperContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		flex-direction: row;
	}
`;

const Button = styled.button<{ outline?: boolean }>`
	width: 120px;
	height: 30px;
	${({ outline }) =>
		outline
			? css`
					background-color: ${colors.white};
					border: 1px solid ${colors.red};
					color: ${colors.red};
			  `
			: css`
					background-color: ${colors.red};
					border: none;
			  `}

	margin: 0;
	${fonts.main500};
	font-size: 14px;
	lineheight: 16.94px;
	@media (min-width: 576px) {
		font-size: 18px;
		line-height: 21.78px;
		width: 202px;
		height: 60px;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 10px;
	right: 24px;
	gap: 10px;
	@media (min-width: 576px) {
		order: 2;
		width: auto;
		justify-content: space-between;
		margin-top: 26px;
		position: relative;
		right: 0px;
	}
`;

const MyComponent = () => {
	const isMobile = window.innerWidth < 576;
	return (
		<Container>
			<HelperContainer>
				<AmountCurrencyContainer>
					<CurrencyP>USD(incl. of all taxes):</CurrencyP>
					<AmountP>
						$600.72<AmountSpan>$800.00</AmountSpan>
					</AmountP>
				</AmountCurrencyContainer>
				<CounterContainer>
					<CounterButton>
						<Minus width={isMobile ? 16 : 24} height={isMobile ? 18 : 24} />
					</CounterButton>
					<CounterSpan>1</CounterSpan>
					<CounterButton>
						<Plus width={isMobile ? 16 : 24} height={isMobile ? 18 : 24} />
					</CounterButton>
				</CounterContainer>
			</HelperContainer>
			<ButtonGroup>
				<Button>Buy Now</Button>
				<Button outline>Add to Cart</Button>
			</ButtonGroup>
		</Container>
	);
};

export default MyComponent;
