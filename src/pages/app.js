import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect } from "react";

export default function App() {
	const [session, loading] = useSession();
	const router = useRouter();
	useEffect(() => {
		const redirect = !session ? router.push("/") : null;
	}, [session]);

	return (
		<>
			{session && (
				<>
					<h1>
						Bem vindo
						{session.user.email}
					</h1>
					<button onClick={() => signOut()}>Sair</button>
				</>
			)}
		</>
	);
}
