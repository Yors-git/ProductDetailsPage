import { colors } from '@styles';
import styled from 'styled-components';

interface IDropdownProps {
	color?: string;
	width?: number;
	height?: number;
}

const SvgContainer = styled.div`
	--stroke-color: ${colors.white};
`;

const Dropdown: React.FC<IDropdownProps> = ({
	color,
	width = 12,
	height = 8
}) => {
	return (
		<SvgContainer>
			<svg
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				style={{ color: color ? color : 'var(--stroke-color)' }}
			>
				<path
					d='M1 1.5L6 6.5L11 1.5'
					stroke='currentColor'
					stroke-width='1.5'
					stroke-linecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</SvgContainer>
	);
};

export default Dropdown;
