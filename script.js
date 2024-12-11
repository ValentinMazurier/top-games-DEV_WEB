const gamesList = [
	{
		title: "Warhammer 40.000 : Darktide",
		year: 2022,
		imageUrl:
			"https://www.warlegend.net/wp-content/uploads/Darktide_Key-Art_logo_1920x1080.jpeg",
		id: 1,
	},
	{
		title: "Death stranding : director's cut",
		year: 2021,
		imageUrl:
			"https://xxboxnews.blob.core.windows.net/prod/sites/5/DSDC_1980-x-1080-Layered-f1fbdcd3dbccef6dc649.jpg",
		id: 2,
	},
	{
		title: "starsector",
		year: 2011,
		imageUrl:
			"https://i.ytimg.com/vi/eAvo3S0MD-o/mqdefault.jpg",
		id: 3,
	},
	{
		title: "Ghost of Tsushima : director's cut",
		year: 2024,
		imageUrl:
			"https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/c16gs6a7lbAYzPf7ZTikbH1c.png",
		id: 4,
	}
]

function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<article class="col">
                    <div class="card shadow-sm">
                        <img src="${game.imageUrl}" alt="${game.title}" class="card-img-top" />
                        <div class="card-body">
                        <h3 class="card-title">${game.title}</h3>
                            <p class="card-text">
                            ${game.year}
                            </p>
                            Description du jeu</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" 
                                    class="btn btn-sm btn-outline-secondary view" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal"
                                    data-edit-id="${game.id}">
                                    

                                    View</button>
                                    <button type="button" 
                                    class="btn btn-sm btn-outline-secondary edit"
                                    data-edit-id="${game.id}"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal">
                                    
                                    Edit</button>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                `
	})
}

writeDom()

editButtons = document.querySelectorAll(".edit")
editButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {

        console.log(e.target.getAttribute("data-edit-id"))
		editModal(e.target.getAttribute("data-edit-id"))
	})
})



function modifyModal(modalTitle) {
	// Écrir le nom du jeu dans le titre du modal
	document.querySelector(".modal-title").textContent = modalTitle
}

viewButtons = document.querySelectorAll(".view")
viewButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
        console.log(e.target.getAttribute("data-edit-id"))
		viewModal(e.target.getAttribute("data-edit-id"))
	})
})

function viewModal(gameId) {
	// console.log(gameId, gamesList)
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	// passer une image comme corps du modal
	const modalBody = `<img src="${gamesList[result].imageUrl}" alt="${gamesList[result].title}" class="img-fluid" />`
	modifyModal(gamesList[result].title, modalBody)
	// edit footer
	// Écrire dans le footer
	document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
</form>`
}

function editModal(gameId) {
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	// Injectez le formulaire dans le corps du modal
	fetch("./form.html").then((data) => {
		data.text().then((form) => {
			// Modifiez le titre et le corps du modal
			const selectedGame = gamesList[result]
			modifyModal("Mode Edition", form)
			modifyFom({
				title: selectedGame.title,
				year: selectedGame.year,
				imageUrl: selectedGame.imageUrl,
			})
			document
				.querySelector('button[type="submit"]')
				.addEventListener("click", () =>
					updateGames(title.value, year.value, imageUrl.value, gameId)
				)
		})
	})
}

function modifyFom(gameData) {
	const form = document.querySelector("form")
	console.log(gameData)
}

function updateGames(title, year, imageUrl, gameId) {
	// Trouvez le jeu en fonction de son identifiant
	const index = gamesList.findIndex((game) => game.id === parseInt(gameId))

	gamesList[index].title = title
	gamesList[index].year = year
	gamesList[index].imageUrl = imageUrl
	document.querySelector(".row").innerHTML = "" // Nous supprimons toutes les données des jeux dans le DOM.
	writeDom()
	editButtons = document.querySelectorAll(".edit")
	editButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			editModal(e.target.getAttribute("data-edit-id"))
		})
	})
	
	viewButtons = document.querySelectorAll(".view")
	viewButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			viewModal(e.target.getAttribute("data-edit-id"))
		})
	})
}	

function modifyFom(gameData) {
	const form = document.querySelector("form")
	form.title.value = gameData.title
	form.year.value = gameData.year
	form.imageUrl.value = gameData.imageUrl
}

function modifyModal(modalTitle, modalBody) {
	// Écrire le nom du jeu dans le titre du modal
	document.querySelector(".modal-title").textContent = modalTitle
	// Écrire dans le corps du modal
	document.querySelector(".modal-body").innerHTML = modalBody
	// Écrire dans le footer
	document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
		<button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Submit</button>
</form>`
}




