import styled from "styled-components";

export const StyledButton = styled.button`
	height: 2.438rem;
	padding: 7px, 57px, 7px, 57px;
	border-radius: 4px;
	font-family: Open Sans;
	font-size: 1.125rem;
	color: #ffffff;
	background: "#5f657b";

	&:hover {
		animation-timing-function: ease-out;
		animation-duration: 300ms;
		background: #323540;
	}
`;

export const StyledGoldButton = styled.button`
	width: 19rem
	height: 2.438rem;
	padding: 7px, 57px, 7px, 57px;
	border-radius: 4px;
	font-family: Open Sans;
	font-size: 1.125rem;
	color: #f5f5f0;
	background: "#d89f5f";

	&:hover {
		animation-timing-function: ease-out;
		animation-duration: 300ms;
		background: #323540;
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
