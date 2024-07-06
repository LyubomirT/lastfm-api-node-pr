const cheerio = require('cheerio');
const axios = require('axios');



function getAllArtists(username, cors) {
    let url = ''
    if (cors) {
        url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.last.fm/user/' + username);
    } else {
        url = 'https://www.last.fm/user/' + username;
    }

    return axios.get(url)
        .then((response) => {
            const $ = cheerio.load(response.data);

            return $(`a[href="/user/${username}/library/artists"]`).text();
            return $('h1').text();
        })
        .catch((error) => {
            console.error('Scraping failed:', error);
            throw error;
        });
}

module.exports = {
    getAllArtists
};