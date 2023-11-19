import { HomeStyle } from "../../components/Home/HomeStyle"

export const Home = () => {
	return (
		<>
			<Header />

			<main>
				{/* aqui importare la pagina principal */}
				<HomeStyle />
			</main>

			<Footer />
		</>
	)
}
