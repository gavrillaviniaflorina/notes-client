export default class Data {


    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
        const url = "http://localhost:8080" + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',

            },

        };

        if (body !== null) {
            options.body = JSON.stringify(body);
        }


        return fetch(url, options);
    }

    async notes() {
        const response = await this.api("/api/v1/notes");
        return response.json();
    }

    // async addNote(note) {
    //     const response = await this.api("", "POST", note);
    // }

    async deleteNote(id) {
        await this.api(`/api/v1/persons/deleteNote/${id}`);
    }

    async validPerson(loginDto) {
        const response = await this.api(`/api/v1/persons/login`, "POST", loginDto);
        return response.json();
    }


}