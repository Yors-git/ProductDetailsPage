import { colors } from '@styles';

interface ISearchProps {
	color?: string;
	boxSize?: number;
	strokeWidth?: number;
}

const Search: React.FC<ISearchProps> = ({ color, boxSize = 24, strokeWidth = 1.5 }) => (
	<svg
		width={boxSize}
		height={boxSize}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.white }}
	>
		<g clipPath='url(#clip0_36_715)'>
			<path
				d='M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z'
				stroke='currentColor'
				stroke-width={strokeWidth}
				stroke-linecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M21 21L15 15'
				stroke='currentColor'
				stroke-width={strokeWidth}
				stroke-linecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_36_715'>
				<rect width='24' height='24' fill='currentColor' />
			</clipPath>
		</defs>
	</svg>
);

export default Search;
