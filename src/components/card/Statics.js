import styled from "styled-components";
import Add from "../../assets/add-icon.svg";
import Check from "../../assets/checked.svg";
import Cancel from "../../assets/cancel.svg";
import Coins from "../../assets/coins.svg";

const Container = styled.div`
	width: 400px;
	height: 500px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 20px;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
`;
const TaskNameTittle = styled.span`
	font-size: 28px;
	font-weight: bold;
`;

const CoinIcon = styled(Coins)`
	width: 30px;
	margin-right: 85px;
`;
const Body = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	padding: 0px 0px;
	overflow: hidden;
`;

const Item = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 18px;
	font-weight: 300;

	padding: 10px 0px;
`;
const Name = styled.div`
	flex: 1;
`;
const Value = styled.div`
	width: 55px;
`;

const Options = styled.div`
	display: flex;

	&:first-child {
		margin-right: 10px;
	}
`;

const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 20px;
	border-top: 2px solid black;
	border-top: 2px solid ${({ theme }) => theme.colors.gray};

	align-items: flex-end;
`;

const SubtittleContainer = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: baseline;
	padding: 0px;
	margin: 0px;
`;
const Subtittle = styled.li`
	list-style: none;
	display: flex;

	flex-direction: row;
	align-items: center;

	font-size: 14px;
	font-weight: 300;
	&:first-child {
		margin-bottom: 10px;
	}
	& span {
		margin-left: 7px;
		margin-top: 4px;
	}
`;

const AddPrizeButton = styled(Add)`
	fill: ${({ theme }) => theme.colors.primary};
	width: 40px;
`;
const CheckButton = styled(Check)`
	fill: ${({ theme }) => theme.colors.yellow};
	width: 24px;
`;
const CheckButtonTask = styled(Check)`
	fill: ${({ theme }) => theme.colors.yellow};
	width: 24px;
	margin-right: 7px;
`;
const CancelButton = styled(Cancel)`
	fill: ${({ theme }) => theme.colors.red};
	width: 24px;
`;
export function CompletedTasksCard() {
	const data = [
		{ name: "50 min. de exercicios", value: 20, rescued: false },
		{ name: "Ligar para fornecedor", value: 15, rescued: false },
		{ name: "Atualizar planilhas", value: 10, rescued: false },
		{ name: "Responder e-mails", value: 20, rescued: false },
		{ name: "2 horas de estudo", value: 35, rescued: false },
		{ name: "Limpar o quarto", value: 20, rescued: false },
		{ name: "Atualizar portfolio", value: 15, rescued: false },
	];

	return (
		<>
			<Container>
				<Header>
					<TaskNameTittle>Tasks Concluidas</TaskNameTittle>
				</Header>
				<Body>
					{data.map((item, index) => {
						return (
							<Item key={index}>
								<Name key={item.name}>{item.name}</Name>
								<Value key={item.value}>{item.value}</Value>
							</Item>
						);
					})}
				</Body>
			</Container>
		</>
	);
}

export function RescuedPrizesCard() {
	const data = [
		{ name: "Café", value: 19, rescued: false },
		{ name: "Hamburguer", value: 80, rescued: false },
		{ name: "30 minutos de jogo", value: 55, rescued: false },
		{ name: "20 minutos de TikTok", value: 40, rescued: false },
		{ name: "Partida de Xadrez", value: 35, rescued: false },
		{ name: "Chocolate", value: 75, rescued: false },
		{ name: "1 hora de jogo", value: 50, rescued: false },
	];

	return (
		<>
			<Container>
				<Header>
					<TaskNameTittle>Recompensas Resgatadas</TaskNameTittle>
				</Header>
				<Body>
					{data.map((item, index) => {
						return (
							<Item key={index}>
								<Name key={item.name}>{item.name}</Name>
								<Value key={item.value}>{item.value}</Value>
							</Item>
						);
					})}
				</Body>
			</Container>
		</>
	);
}

export function TaskCard() {
	const data = [
		{ name: "50 min. de exercicios", value: 20, rescued: false },
		{ name: "Ligar para fornecedor", value: 15, rescued: false },
		{ name: "Atualizar planilhas", value: 10, rescued: false },
		{ name: "Responder e-mails", value: 20, rescued: false },
		{ name: "2 horas de estudo", value: 35, rescued: false },
		{ name: "Limpar o quarto", value: 20, rescued: false },
		{ name: "Atualizar portfolio", value: 15, rescued: false },
	];

	return (
		<>
			<Container>
				<Header>
					<TaskNameTittle>Nome</TaskNameTittle>
					<CoinIcon />
				</Header>
				<Body>
					{data.map((item, index) => {
						return (
							<Item key={index}>
								<Name key={item.name}>{item.name}</Name>
								<Value key={item.value}>{item.value}</Value>
								<Options>
									<CheckButtonTask />
									<CancelButton />
								</Options>
							</Item>
						);
					})}
				</Body>
				<Footer>
					<SubtittleContainer>
						<Subtittle>
							<CheckButton />
							<span>Resgatar</span>
						</Subtittle>
						<Subtittle>
							<CancelButton />

							<span>Excluir</span>
						</Subtittle>
					</SubtittleContainer>
					<AddPrizeButton />
				</Footer>
			</Container>
		</>
	);
}

export function PrizeCard() {
	const data = [
		{ name: "Café", value: 19, rescued: false },
		{ name: "Hamburguer", value: 80, rescued: false },
		{ name: "30 minutos de jogo", value: 55, rescued: false },
		{ name: "20 minutos de TikTok", value: 40, rescued: false },
		{ name: "Partida de Xadrez", value: 35, rescued: false },
		{ name: "Chocolate", value: 75, rescued: false },
		{ name: "1 hora de jogo", value: 50, rescued: false },
	];

	return (
		<>
			<Container>
				<Header>
					<TaskNameTittle>Nome</TaskNameTittle>
					<CoinIcon />
				</Header>
				<Body>
					{data.map((item, index) => {
						return (
							<Item key={index}>
								<Name key={item.name}>{item.name}</Name>
								<Value key={item.value}>{item.value}</Value>
								<Options>
									<CheckButtonTask />
									<CancelButton />
								</Options>
							</Item>
						);
					})}
				</Body>
				<Footer>
					<SubtittleContainer>
						<Subtittle>
							<CheckButton />
							<span>Concluir</span>
						</Subtittle>
						<Subtittle>
							<CancelButton />

							<span>Excluir</span>
						</Subtittle>
					</SubtittleContainer>
					<AddPrizeButton />
				</Footer>
			</Container>
		</>
	);
}
