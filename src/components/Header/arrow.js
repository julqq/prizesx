import styled, { keyframes } from "styled-components";

const pulse = keyframes`
	from {
		transform: scale(1);
		transform-origin: center center;
		animation-timing-function: ease-out;
	}
	10% {
		transform: scale(0.91);
		animation-timing-function: ease-in;
	}
	17% {
		transform: scale(0.98);
		animation-timing-function: ease-out;
	}
	33% {
		transform: scale(0.87);
		animation-timing-function: ease-in;
	}
	45% {
		transform: scale(1);
		animation-timing-function: ease-out;
	}
`;
const Arrow = styled.img`
	width: 54px;
	height: 35px;

	animation: 1.5s ${pulse} ease-in-out infinite both;
	&:hover {
		cursor: pointer;
	}
`;
export function ArrowDown() {
	return <Arrow src="/img/arrow.svg" />;
}
