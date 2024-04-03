import { colors } from '@styles';
interface IScrollRightProps {
	color?: string;
}

const ScrollRight: React.FC<IScrollRightProps> = ({ color }) => (
	<svg
		width='6'
		height='9'
		viewBox='0 0 6 9'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.white }}
	>
		<path
			d='M1 0.5L5 4.5L1 8.5'
			stroke='white'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);

export default ScrollRight;
