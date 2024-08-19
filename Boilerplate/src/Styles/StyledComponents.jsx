import styled from "styled-components";

// skal hentes ind således i dokumentet:
// import { StyledButton } from "../../Styles/StyledComponents.jsx";
// <StyledButton>Læs mere</StyledButton>

export const StyledButton = styled.button`
	height: 48px;
	margin: 10px;
	top: 20px;
	left: 20px;
	padding: 16px 10px 16px 10px;
	gap: 10px;
	border-radius: 8px;
	border: 1px solid #333333;
	font-family: Open Sans;
	font-size: 16px;
	line-height: 16px;
	color: #000000;
	background: "#ffffff";

	&:hover {
		animation-timing-function: ease-out;
		animation-duration: 300ms;
		background: #ff9933;
	}
`;

export const PageWrapperSection = styled.section`
	width: 100%;
	h1,
	h2 {
		text-align: center;
		text-transform: uppercase;
	}
	h1 {
		font-size: 1.5rem;
	}
	h2 {
		font-size: 1rem;
	}
`;
