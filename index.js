const cheerio = require('cheerio');
const axios = require('axios');



function getAllArtists(username) {
    return axios.get(`https://www.last.fm/user/${username}`)
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