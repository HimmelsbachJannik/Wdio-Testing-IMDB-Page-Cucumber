class App{

    async openHomepage() {
        await browser.url('https://www.imdb.com/')
    }
}

export default new App