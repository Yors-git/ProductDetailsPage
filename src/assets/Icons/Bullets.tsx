import { colors } from '@styles';
interface IBulletsProps {
	color?: string;
}

const Bullets: React.FC<IBulletsProps> = ({ color }) => (
	<svg
		width='30'
		height='30'
		viewBox='0 0 30 30'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.white }}
	>
		<g clip-path='url(#clip0_36_725)'>
			<path
				d='M11.25 7.5H25'
				stroke='currentColor'
				stroke-width='2.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M11.25 15H25'
				stroke='currentColor'
				stroke-width='2.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M11.25 22.5H25'
				stroke='currentColor'
				stroke-width='2.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M6.25 7.5V7.5125'
				stroke='currentColor'
				stroke-width='2.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M6.25 15V15.0125'
				stroke='currentColor'
				stroke-width='2.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M6.25 22.5V22.5125'
				stroke='currentColor'
				stroke-width='2.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_36_725'>
				<rect width='30' height='30' fill='currentColor' />
			</clipPath>
		</defs>
	</svg>
);

export default Bullets;
