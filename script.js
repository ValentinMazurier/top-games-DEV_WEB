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

const editButtons = document.querySelectorAll(".edit")
editButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {

        console.log(e.target.getAttribute("data-edit-id"))
		editModal(e.target.getAttribute("data-edit-id"))
	})
})

function editModal(gameId) {
	// console.log(gameId, gamesList)
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	modifyModal("Mode Edition")
}

function modifyModal(modalTitle) {
	// Écrir le nom du jeu dans le titre du modal
	document.querySelector(".modal-title").textContent = modalTitle
}

const viewButtons = document.querySelectorAll(".view")
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
	modifyModal(gamesList[result].title)
}

function editModal(gameId) {
	// console.log(gameId, gamesList)
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	modifyModal("Mode Edition")
}

function modifyModal(modalTitle, modalBody) {
	// Écrir le nom du jeu dans le titre du modal
	document.querySelector(".modal-title").textContent = modalTitle
	document.querySelector(".modal-body").innerHTML = modalBody
}

function viewModal(gameId) {
	// console.log(gameId, gamesList)
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	const modalBody = `<img src="${gamesList[result].imageUrl}" alt="${gamesList[result].title}" class="img-fluid" />`
	modifyModal(gamesList[result].title, modalBody)
}

function editModal(gameId) {
	// console.log(gameId, gamesList)
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	// passer une image comme corps du modal
	const modalBody = `<h4>ajoutez un formulaire pour modifier le jeu ici</h4>`
	modifyModal("Mode Edition", modalBody)
}

