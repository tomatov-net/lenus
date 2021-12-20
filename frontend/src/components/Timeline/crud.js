import axios from 'axios';

export default class {
    constructor() {
        this.apiUrl = 'http://localhost:8093'
    }

   async delete(id) {
        await axios({
            method: 'delete',
            url: this.apiUrl + '/timelines/' + id,
        });
    }

    async update(form) {
        const response = await axios({
            method: 'patch',
            url: this.apiUrl + '/timelines/' + form.id,
            data: form
        });

        return response.data;
    }

    async create(form) {
        const response = await axios({
            method: 'post',
            url: this.apiUrl + '/timelines',
            data: form
        });

        return response.data;
    }

    async get() {
        const response = await axios({
            method: 'get',
            url: this.apiUrl + '/timelines',
        });

        return response.data;
    }
}