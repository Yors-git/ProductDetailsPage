import { colors } from '@styles';
interface IStarProps {
	color?: string;
	size?: number;
}

const Star: React.FC<IStarProps> = ({ color, size = 10 }) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 10 10'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
    style={{ color: color ? color : colors.white }}
	>
		<path
			d='M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z'
			fill='currentColor'
		/>
	</svg>
);

export default Star;
