import styled from "styled-components";
import Arrow from "../assets/arrow.svg";

export const ArrowRight = styled(Arrow)`
	transform: rotate(180deg);
	width: 60px;
	height: auto;
	margin-left: 50px;
`;
export const ArrowLeft = styled(Arrow)`
	width: 60px;
	height: auto;
	margin-right: 50px;
`;
export const ArrowTop = styled(Arrow)`
	width: 60px;
	height: auto;
	margin-right: 50px;
	transform: rotate(90deg);
`;
