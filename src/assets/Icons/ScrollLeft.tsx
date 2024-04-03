import { colors } from '@styles';
interface IScrollLeftProps {
	color?: string;
}

const ScrollLeft: React.FC<IScrollLeftProps> = ({ color }) => (
	<svg
		width='6'
		height='9'
		viewBox='0 0 6 9'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.white }}
	>
		<path
			d='M5 0.5L1 4.5L5 8.5'
			stroke='white'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);

export default ScrollLeft;
