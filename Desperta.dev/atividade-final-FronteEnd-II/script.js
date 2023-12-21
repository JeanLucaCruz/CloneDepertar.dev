class RickAndMortyApi {
    constructor() {
        this.api = axios.create({ baseURL: "https://rickandmortyapi.com/api" });
        this.listColumns = [document.getElementById("list-column-1"), document.getElementById("list-column-2")];
        this.nextUrl = this.prevUrl = null;
        this.page = 1;
        this.cardsPerPage = 20;
        this.modal = document.getElementById("characterInformation");
        this.inputElement = document.getElementById('search-bar');
        this.corpoElement = document.querySelector('#corpo');
        this.showElement = document.getElementById('show');

        this.setup();
        this.getCharacters("/character");
    }

    async getCharacters(url, name = "") {
        try {
            const { info, results } = (await this.api.get(url, { params: { name } })).data;
            this.nextUrl = info.next;
            this.prevUrl = info.prev;
            this.page = 1;
            this.renderCharacters(results);
            this.updatePaginationButtons();
        } catch (err) {
            this.handleError(err);
        }
    }

    async searchCharacters(event) {
        event.preventDefault();
        const searchInput = this.inputElement.value.trim();
        this.getCharacters("/character", searchInput);
    }

    async renderCharacters(characters) {
        this.listColumns.forEach(column => column.innerHTML = "");

        let cardsCounter = 0;

        for (const [index, character] of this.paginateCharacters(characters).entries()) {
            const characterCard = await this.createCharacterCard(character);
            const targetColumn = this.listColumns[cardsCounter < this.cardsPerPage / 2 ? 0 : 1];
            targetColumn.appendChild(characterCard);

            if (++cardsCounter % 2 === 0 && cardsCounter < this.cardsPerPage) {
                targetColumn.appendChild(this.createCardDivider());
            }

            if (cardsCounter === characters.length) {
                this.updatePagination(index);
            }
        }

        this.renderPaginationInfo();
    }

    updatePagination(index) {
        
    }

    createCardDivider() {
        const hr = document.createElement("hr");
        hr.className = "card-divider";
        return hr;
    }

    async createCharacterCard(character) {
        const card = document.createElement("div");
        card.className = "card mt-6 character-card";
        card.setAttribute("data-character-id", character.id);
        card.onclick = () => this.openModal(character.id);

        const row = document.createElement("div");
        row.className = "row g-0";

        const imageCol = this.createImageColumn(character);
        const textCol = await this.createTextColumn(character);

        row.appendChild(imageCol);
        row.appendChild(textCol);
        card.appendChild(row);

        return card;
    }

    createImageColumn(character) {
        const imageCol = document.createElement("div");
        imageCol.className = "col-md-6";

        const image = document.createElement("img");
        image.className = "img-fluid rounded mx-auto d-block";
        image.id = "size-img";
        image.src = character.image;
        image.alt = character.name;

        imageCol.appendChild(image);

        return imageCol;
    }

    async createTextColumn(character) {
        const textCol = document.createElement("div");
        textCol.className = "col-md-6";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body ms-6";

        const characterDetailsHTML = await this.buildCharacterDetailsHTML(character);
        cardBody.innerHTML = characterDetailsHTML;

        textCol.appendChild(cardBody);

        return textCol;
    }

    async buildCharacterDetailsHTML(character) {
        let statusColorClass = this.getStatusColorClass(character.status);
        const characterUrl = `https://rickandmortyapi.com/api/character/${character.id}`;

        try {
            const characterData = (await this.api.get(characterUrl)).data;
            const episodeUrl = characterData.episode[characterData.episode.length - 1];

            try {
                const episode = (await this.api.get(episodeUrl)).data;

                return `
                    <div class="card-body ms-6">
                        <h2 style="color:#09fd29;">${characterData.name}</h2>
                        <div class="status">
                            <div class="statusColor ${statusColorClass} status-circle"></div>
                            <small class="pStatus">
                                ${this.translateStatus(characterData.status)} - ${this.translateSpecies(characterData.species)}
                            </small>
                        </div>
                        </br>
                        <small class="pLocal"style="color: white;">Última localização conhecida:</small>
                        <strong class="rLocal">${characterData.location.name}</strong>
                        </br>
                        <small class= "pLocal"style="color: white;">Visto a última vez em:</small>
                        <strong class="rLocal">${episode.name}</strong>
                    </div>`;
            } catch (err) {
                this.handleError(err);
            }
        } catch (err) {
            this.handleError(err);
        }
    }

    getStatusColorClass(status) {
        if (status === "Alive") {
            return "green-status";
        } else if (status === "Dead") {
            return "red-status";
        } else {
            return "gray-status";
        }
    }

    updatePaginationButtons() {
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        if (prevButton) {
            prevButton.disabled = !this.prevUrl;
        }

        if (nextButton) {
            nextButton.disabled = !this.nextUrl;
        }
    }

    setup() {
        this.setupPaginationButtons();
        this.setupEventListeners();
    }

    setupPaginationButtons() {
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => this.changePage(this.prevUrl));
            nextButton.addEventListener('click', () => this.changePage(this.nextUrl));
        }
    }

    renderPaginationInfo() {
        
    }

    changePage(url) {
        if (url != null) {
            this.page = url === this.nextUrl ? this.page + 1 : this.page - 1;
            this.getCharacters(url);
            this.updatePaginationButtons();
        }
    }

    setupEventListeners() {
        const searchButton = document.getElementById("btn-search");

        if (searchButton) {
            searchButton.addEventListener("click", (event) => this.searchCharacters(event));
        }
    }

    translateStatus(status) {
        switch (status) {
            case "Alive":
                return "Vivo";
            case "Dead":
                return "Morto";
            case "unknown":
            default:
                return "Desconhecido";
        }
    }

    translateSpecies(species) {
        if (species.toLowerCase() === "human") {
            return "Humano";
        } else {
            return species;
        }
    }

    openModal(characterId) {
        const modal = document.getElementById("characterInformation");
        modal.style.display = "block";

        // Remove o botão "Fechar" se existir
        const closeButton = document.getElementById("closeButton");
        if (closeButton) {
            closeButton.remove();
        }

        this.fetchAndFillCharacterData(characterId);
    }

    closeModal() {
        const modal = document.getElementById("characterInformation");
        modal.style.display = "none";
    }

    async fetchAndFillCharacterData(characterId) {
        try {
            const characterData = (await this.api.get(`/character/${characterId}`)).data;

            // Preencher as informações do personagem no modal
            document.getElementById("character-name").textContent = characterData.name;
            document.getElementById("status-color").classList.add(this.getStatusColorClass(characterData.status));
            document.getElementById("status").textContent = `${this.translateStatus(characterData.status)} - ${this.translateSpecies(characterData.species)}`;
            document.getElementById("species").textContent = `Espécie: ${this.translateSpecies(characterData.species)}`;
            document.getElementById("last-location").textContent = `Última localização conhecida: ${characterData.location.name}`;

            const lastEpisodeUrl = characterData.episode[characterData.episode.length - 1];
            const lastEpisode = (await this.api.get(lastEpisodeUrl)).data;
            document.getElementById("last-episode").textContent = `Visto a última vez em: ${lastEpisode.name}`;

            // Quantidade de episódios
            document.getElementById("episode-count").textContent = `Quantidade de episódios: ${characterData.episode.length}`;

            // Imagem do personagem
            document.getElementById("character-image").src = characterData.image;
            document.getElementById("character-image").alt = `Imagem de ${characterData.name}`;

            // Adiciona um botão "Fechar" no modal
            const closeButton = document.createElement("button");
            closeButton.textContent = "Saia daqui!";
            closeButton.id = "closeButton";
            closeButton.className = "custom-close-button";

            closeButton.addEventListener("click", () => this.closeModal());

            const modalHeader = document.querySelector(".modal-header");
            modalHeader.appendChild(closeButton);


        } catch (err) {
            this.handleError(err);
        }
    }

    paginateCharacters(characters) {
        const startIndex = (this.page - 1) * this.cardsPerPage;
        return characters.slice(startIndex, startIndex + this.cardsPerPage);
    }

    handleError(error) {
        console.error("Erro na requisição:", error);
        
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const rickAndMortyApi = new RickAndMortyApi();
});
