import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts } from '@styles';

export type BadgeCountType = {
	unreadCount?: number;
	small?: boolean;
};

const NotificationContainer = styled.div<{
	small: boolean;
}>`
	background-color: ${colors.red};
	border-radius: 100px;
	top: -17px;
	right: -14px;

	${({ small }) => css`
		height: ${small ? '12px' : '30px'};
		width: ${small ? '12px' : '30px'};
		${small && 'top: -5px'};
		${small && 'right: -1px'};
	`}
	justify-content: center;
	position: absolute;
`;

const NotificationText = styled.p`
  ${fonts.main600};
  line-height: 19.36px;
  font-size: 16px;
	color: ${colors.white};
	text-align: center;
	margin: 5px;
	@media (max-width: 576px) {
    ${fonts.main500};
    line-height: 8.47px;
    font-size: 7px;
		margin: 2px;
	}
`;

const BadgeCount: React.FC<BadgeCountType> = ({
	unreadCount = 0,
	small = false
}): ReactElement => (
	<NotificationContainer small={small}>
		<NotificationText>{unreadCount ? unreadCount : ''}</NotificationText>
	</NotificationContainer>
);

export default BadgeCount;
