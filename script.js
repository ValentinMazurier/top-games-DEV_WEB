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
                                    <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `
	})
}

writeDom()