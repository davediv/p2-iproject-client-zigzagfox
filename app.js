const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      keyword: '',
      result: '',
      dataTrend: []
    };
  },
  methods: {
    generate(){

        showSpinner()
        let keyword = this.keyword

        axios({
            url: 'https://evil-lace-production.up.railway.app/twitter',
            method: 'POST',
            data: {keyword}
        })
        .then(res => {
            console.log(res.data);
            this.result = res.data.result
            hideSpinner()
            this.keyword = ''
        })
    },
    clickTweet() {
        return `https://twitter.com/intent/tweet?text=${this.result}`
    },
    getTrend() {
        axios({
            url: 'https://trends24.in/indonesia/',
            method: 'GET'
        })
        .then(res => {
            console.log(res);
        })
    }
  }

}).mount("#app");