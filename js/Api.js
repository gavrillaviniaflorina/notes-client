export default class Data {


    api(path, method = 'GET', body = null, requiresAuth = false, token = null) {
        const url = "http://localhost:8080" + path;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
                "Access-Control-Expose-Headers": "Authorization",
                Accept: 'API-KEY',
                "Set-Cookie": 'token'

            },
            mode: 'no-cors',
            credentials: 'same-origin'



        };



        if (body !== null) {
            options.body = JSON.stringify(body);
        }


        return fetch(url, options);
    }

    async getNotesOfAPerson(personId) {

        const response = await this.api(`/api/v1/notes/allNotesOfAPerson/${personId}`);
        return response.json();
    }

    async notes() {

        const response = await this.api("/api/v1/notes", "GET");
        return response.json();
    }



    async addNote(note) {
        const response = await this.api("/api/v1/persons/addNote", "POST", note);
    }

    async deleteNote(id) {
        await this.api(`/api/v1/persons/deleteNote/${id}`, 'DELETE');
    }

    async validPerson(person) {

        const response = await this.api(`/api/v1/persons/login`, "POST", person);

        return response.json();



    }

    async updateNote(note) {
        await this.api(`/api/v1/notes/update`, 'PUT', note);
    }

    async getIdOfActualPerson(person) {
        await this.api(`/api/v1/persons/getPersonId`, 'POST', person);
    }

    async ascending(personId) {
        const response = await this.api(`/api/v1/notes/ascending/${personId}`);
        return response.json();
    }

    async descending(personId) {
        const response = await this.api(`/api/v1/notes/descending/${personId}`);
        return response.json();
    }

    async alphabetical(personId) {
        const response = await this.api(`/api/v1/notes/alphabetical/${personId}`);
        return response.json();
    }


    async login(username1, password1) {
        let person = {
            username: username1,
            password: password1
        }
        const response = await this.api("/login", "POST", person);



        console.log(response.headers.authorization);


    }



}