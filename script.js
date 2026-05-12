window.addEventListener('DOMContentLoaded', function () {
	const bannerImage = document.getElementById('banner-image')
	const bannerTitle = document.getElementById('banner-title')
	const bannerDiscount = document.getElementById('banner-discount')
	const bannerStore = document.getElementById('banner-store')
	const bannerDescription = document.getElementById('banner-description')
	const bannerPrice = document.getElementById('banner-price')
	const bannerNormalPrice = document.getElementById('banner-normal-price')
	const bannerLink = document.getElementById('banner-link')

	const API_URL = 'https://www.cheapshark.com/api/1.0/deals?pageSize=32'

	let games = []

	async function fatchGames() {
		try {
			const response = await fetch(API_URL)
			if (!response.ok) throw new Error('Sometimes went wrong API_URL')
			const data = await response.json()
			console.log(data)
		
	games = data.filter(
		(game, index, arr) =>
			index === arr.findIndex(item => item.title === game.title),
	)

	const randomGame = games[Math.floor(Math.random() * games.length)]

			getBanner(randomGame)
			console.log(data);
		}catch (error) {
			console.error('Error', error)
		

		}
	}
	fatchGames()

	function getBanner(game) {
		bannerImage.src = game.thumb
	}
})


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nurbeknormamatov967-cell/Game-Store.git
git push -u origin main