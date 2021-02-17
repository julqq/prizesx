import { RescuedPrizesCard } from "../components/card/Statics";
import styled from "styled-components";

const Default = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.gray};
`;

export default function pg() {
	return (
		<Default>
			<RescuedPrizesCard />
		</Default>
	);
}
