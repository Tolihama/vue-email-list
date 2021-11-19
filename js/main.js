const app = new Vue({
    el: '#app',
    data: {
        apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        mailList: [],
    },
    created() {
        this.mailListGenerator();
    },
    methods: {
        mailListGenerator() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiURL)
                .then(response => {
                    this.mailList.push(response.data.response);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        },
    },
});