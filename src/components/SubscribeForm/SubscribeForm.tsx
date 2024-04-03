import styled from 'styled-components';
import backgroundImg from '@assets/images/formBG.jpeg';
import { colors, fonts } from '@styles';

const MainContainer = styled.div`
	display: flex;
	width: 100vw;
	height: 169px;
	margin: 58px 0 0;
	flex-direction: column;
	background-image: url(${backgroundImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	box-shadow: inset 0 0 0 1000px ${colors.darkBlue50};
	@media (min-width: 576px) {
		height: 120px;
		flex-direction: row;
		justify-content: center;
		gap: 115px;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 20px;
	@media (min-width: 576px) {
		flex-direction: row;
	}
`;

const FormTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		justify-content: center;
		align-items: flex-start;
	}
`;

const FormTitle = styled.h5`
	margin: 36px 20px 0;
	color: ${colors.white};
	${fonts.main600};
	font-size: 18px;
	line-height: 21.78px;
	@media (min-width: 576px) {
		font-size: 28px;
		line-height: 33.89px;

		margin: 0;
	}
`;
const FormText = styled.p`
	margin: 4px 20px 0;
	color: ${colors.white};
	${fonts.main400};
	font-size: 14px;
	line-height: 16.94px;
	@media (min-width: 576px) {
		font-size: 20px;
		line-height: 23.2px;
		margin-left: 0;
	}
`;

const EmailInput = styled.input`
	background-color: ${colors.white};
	color: ${colors.midGrey};
	${fonts.main500};
	font-size: 10px;
	line-height: 12.1;
	padding: 12px 15px;
	border: none;
	border-radius: 1px;
	height: 37px;
	width: 215px;
	margin: 16px 0;
	box-sizing: border-box;
	@media (min-width: 576px) {
		width: 447px;
		height: 73px;
		${fonts.main400};
		font-size: 20px;
		line-height: 24.2;
		padding: 25px 37px;
	}
`;

const EmailButton = styled.button`
  background-color: ${colors.red};
  color: ${colors.white};
  width: 100px;
  height: 37px;
  border: none;
	border-radius: 1px;
  padding; 12px 30px;
  ${fonts.main500};
  font-size: 12px;
  line-height: 14.52px;
  margin: 17px 0px;
  @media (min-width: 576px) {
    width: 268px;
    height: 73px;
    margin: 0;
    ${fonts.main600};
    font-size: 20px;
    line-height: 24.2px;
  }
`;

const SubscribeForm = () => {
	return (
		<MainContainer>
			<FormTitleContainer>
				<FormTitle>Join our newsletter and get offers</FormTitle>
				<FormText>Sign up our newsletter</FormText>
			</FormTitleContainer>
			<Form>
				<EmailInput placeholder='Enter your email' />
				<EmailButton>SUSCRIBE</EmailButton>
			</Form>
		</MainContainer>
	);
};

export default SubscribeForm;
