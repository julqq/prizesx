import styled from "styled-components";
import { ArrowDown } from "./arrow";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Container = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.colors.primary};
	height: 630px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
`;
const Menu = styled.div`
	display: flex;
	width: 100%;
	color: ${({ theme }) => theme.colors.white};
	justify-content: flex-end;
`;

const MenuItens = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
`;

const User = styled.img`
	margin-right: 10px;
`;
const SingUp = styled.button`
	background-color: transparent;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.colors.yellow};
	}
`;
const Caller = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: -40px;
`;
const Tittle = styled.h1`
	font-size: 36px;
	margin-top: 25px;
	color: ${({ theme }) => theme.colors.white};
`;

const Logo = styled.img`
	width: 407px;
	height: 150px;
`;

export default function Header() {
	const [session, loading] = useSession();
	const [userImage, setUserImage] = useState("/img/user-circle.svg");
	const router = useRouter();
	useEffect(() => {
		const redirect = session ? router.push("/app") : null;
	}, [session]);

	return (
		<>
			<Container>
				<Menu>
					<MenuItens>
						<li>
							<User src={userImage} />
						</li>
						<li>
							{!session && (
								<>
									<SingUp onClick={() => signIn("auth0")}>Entrar</SingUp>
								</>
							)}
							{session && (
								<>
									{session.user.email}
									<SingUp onClick={() => signOut()}>Sair</SingUp>
								</>
							)}
						</li>
					</MenuItens>
				</Menu>
				<Caller>
					<Logo src="/img/logo-light.png" />
					<Tittle>
						Um novo modo de organizar suas tarefas <br />
						gerenciando suas proprias recompensas
					</Tittle>
				</Caller>
				<ArrowDown />
			</Container>
			;
		</>
	);
}
