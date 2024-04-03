import { colors } from '@styles';
interface IMinusProps {
	color?: string;
	width?: number;
	height?: number;
}

const Minus: React.FC<IMinusProps> = ({ color, width = 16, height = 18 }) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 16 18'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.black }}
	>
		<g clip-path='url(#clip0_36_544)'>
			<path
				d='M3.33331 9.08997H12.6666'
				stroke='black'
				stroke-with='0.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_36_544'>
				<rect
					width='16'
					height='17.7978'
					fill='white'
					transform='translate(0 0.19104)'
				/>
			</clipPath>
		</defs>
	</svg>
);

export default Minus;
