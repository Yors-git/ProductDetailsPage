import { colors } from '@styles';
import styled from 'styled-components';
interface IEllipseProps {
	color?: string;
  size?: number;
  margin?: string;
}

const Svg = styled.svg<IEllipseProps>`
  margin: ${({ margin = '3px 6px 4px 0' }) => margin};
`;

const Ellipse: React.FC<IEllipseProps> = ({ color, size = 4, margin }) => (
	<Svg
		width={size}
		height={size}
		viewBox='0 0 4 4'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
    style={{ color: color ? color : colors.darkBlue }}
    margin={margin}
	>
		<circle cx='2' cy='2' r='2' fill='currentColor' />
	</Svg>
);

export default Ellipse;
