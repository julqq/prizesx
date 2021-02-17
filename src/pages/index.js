import styled from "styled-components";
import Head from "next/head";
import Header from "../components/Header/";
import {
	PrizeCard,
	TaskCard,
	RescuedPrizesCard,
	CompletedTasksCard,
} from "../components/card/Statics";
import { ArrowLeft, ArrowRight, ArrowTop } from "../components/Arrow";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";

const Text = styled.div``;

const Container = styled.div`
	display: flex;
	margin-top: 50px;
	padding: 0px 150px;
	justify-content: space-between;
`;
const SectionPrizes = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`;
const SectionTasks = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: flex-end;
	padding: 0px 150px;
`;
const ContainerInfo = styled.div`
	margin-top: 50px;
	flex-direction: column;
	display: flex;
	align-items: center;
	padding: 0px 150px;
	& h1 {
		text-align: center;
	}
`;

const Section = styled.div`
	display: flex;
	margin-top: 50px;

	width: 100%;
	justify-content: space-between;
`;
const Footer = styled.div`
	display: flex;
	height: 300px;
	margin-top: 50px;
	background-color: ${({ theme }) => theme.colors.primary};
`;
const BackTop = styled.div`
	display: flex;
	margin-top: 100px;
	justify-content: flex-end;
	padding: 0px 100px;
	align-items: center;
	& span {
		margin-right: 20px;
		font-size: 24px;
	}
`;

export default function Home() {
	useEffect(() => {}, []);
	const [session, loading] = useSession();

	return (
		<>
			{/* <>
				{!session && (
					<>
						Not signed in <br />
						<button onClick={() => signIn("auth0")}>Sign in</button>
					</>
				)}
				{session && (
					<>
						Signed in as {session.user.email} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</>
				)}
			</> */}
			<Header />
			<Container>
				<SectionPrizes>
					<Text>
						<h1>Adicione suas Reconpensas</h1>
						<p>
							Crie suas recompensas baseada em pontos parar resgatar depois.
						</p>
					</Text>
					<ArrowRight />
				</SectionPrizes>
				<PrizeCard />
			</Container>
			<Container>
				<TaskCard />
				<SectionTasks>
					<ArrowLeft />
					<Text>
						<h1>Crie suas Tarefas</h1>
						<p>
							Adicione suas tarefas e quando for
							<br /> completando acumule os pontos para trocar por recompensas.
						</p>
					</Text>
				</SectionTasks>
			</Container>
			<ContainerInfo>
				<h1>
					Monitore os resultados <br />e seus resgates
				</h1>
				<Section>
					<CompletedTasksCard />
					<RescuedPrizesCard />
				</Section>
			</ContainerInfo>
			<BackTop>
				<span>Voltar ao Topo</span>
				<ArrowTop />
			</BackTop>
			<Footer></Footer>
		</>
	);
}
