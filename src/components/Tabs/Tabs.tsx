import { colors, fonts } from '@styles';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface TabsContent {
	[key: string]: ReactNode | string;
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media (min-width: 576px) {
		margin: 100px 0 0;
	}
`;

const TabsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 6px;
	border-bottom: 0.6px solid ${colors.buttonGrey};
  @media (min-width: 576px) {
		gap: 110px;
	}
`;

const Tab = styled.div<{ isActive: boolean }>`
	margin: 0 14px 7px;
	cursor: pointer;
	border-bottom: 2px solid transparent;
	text-transform: capitalize;
	${fonts.main500};
	font-size: 12px;
	line-height: 14.52px;
	color: ${colors.black};
	${({ isActive }) =>
		isActive &&
		`
      border-bottom: 2px solid red;
      margin-bottom: -1px;
    `}
  @media (min-width: 576px) {
		font-size: 22px;
	  line-height: 26.63px;
    margin: 0 100px;
	}
`;

const Text = styled.div`
	${fonts.main300};
	line-height: 12.1px;
	font-size: 10px;
	color: ${colors.darkBlue};
	height: 130px;
  max-width: 1000px;
  @media (min-width: 576px) {
    line-height: 21.78px;
	  font-size: 18px;
    margin: 0 auto;
  }
`;

const MoreSpan = styled.span`
	color: ${colors.red};
`;

const Tabs = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const description = (
		<>
			<p>
				The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV
				we've tested. Although all OLEDs deliver similar fantastic picture
				quality, this one stands out for its value because it has many gaming
				oriented features that are great for gamers.
			</p>
			<p>
				*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED
				models feature eco-friendly packaging.
			</p>
			<p>
				**65C2 Stand model is at a minimum 39% lighter than the C1 series.{' '}
				<MoreSpan>More...</MoreSpan>
			</p>
		</>
	);

	const tabsContent: TabsContent = {
		description,
		specification: (
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis,
				metus eu rhoncus efficitur, turpis sem tempus massa, id consectetur nunc
				purus in lectus. Donec non velit a odio volutpat volutpat in in nisi.
				Maecenas aliquet turpis lacus, id pharetra elit sagittis vel. Ut
				consectetur nisi quis ullamcorper pellentesque. Integer efficitur
				interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus
				porttitor. Nullam at lectus sed turpis porttitor viverra accumsan
				hendrerit lorem. Praesent tincidunt nisi at nunc suscipit malesuada.
			</p>
		),
		reviews: (
			<p>
				Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam
				tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna
				massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum
				nulla sed nulla semper elementum. Nulla dictum ultrices risus, id ornare
				arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean a
				lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat
				tellus elementum.
			</p>
		)
	};

	const titles = Object.keys(tabsContent);

	return (
		<MainContainer>
			<TabsContainer>
				{titles.map((tab, i) => (
					<Tab
						key={i}
						isActive={activeTab === i}
						onClick={() => setActiveTab(i)}
					>
						{tab}
					</Tab>
				))}
			</TabsContainer>
			<Text>{tabsContent[titles[activeTab]]}</Text>
		</MainContainer>
	);
};

export default Tabs;
