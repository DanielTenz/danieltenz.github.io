import styled from '@emotion/styled';
import { useDarkMode } from '../../../context/DarkModeContext';
import PropTypes from 'prop-types';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const Box = styled.div`
	padding: 1rem;
	border-radius: 8px;
	background-color: ${(props) =>
		props.dark
			? getRgbaColor(COLORS.grayDark)
			: getRgbaColor(COLORS.grayLight)};
	color: ${(props) =>
		props.dark ? COLORS.white : getRgbaColor(COLORS.grayDark)};
	transition: all 0.3s ease;
`;

export default function StyledBox({ children }) {
	const { darkMode } = useDarkMode();
	return <Box dark={darkMode}>{children}</Box>;
}

StyledBox.propTypes = {
	children: PropTypes.node.isRequired,
};
