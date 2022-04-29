class Home {


    constructor() {

        this.createHeaderAndMain();

    }

    createHeaderAndMain = () => {
        let main = document.createElement("main");
        main.classList = "main1";
        main.innerHTML = `
        <header>
        <ul class="nav">
            <ul class="sort">
                <li class="nav-item current-item">
                    All Notes
                </li>
                <li class="nav-item">
                    Sort ascending
                </li>
                <li class="nav-item">
                    Sort descending
                </li>
                <li class="nav-item">
                    Alphabetical
                </li>
            </ul>
            <li class="nav-item add">
                Add Notes
            </li>

        </ul>
    </header>

    <main class="main1">
    </main>
        `
    }

    createCard = (obj) => {

        let card = document.createElement("div");
        card.classList = "note";

        card.innerHTML = `
        <h1>${obj.name}</h1>
        <h3>${obj.date}</h3>
        <p>${obj.text}</p>
        <button class="delete">Delete</button>
        `
    }
}