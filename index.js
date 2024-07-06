const cheerio = require('cheerio');
const axios = require('axios');


function getArtistCount(username, cors) {
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

function getUserInfo(username, api_key) {
    return axios
    .get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: "user.getInfo",
        user: username,
        api_key: api_key,
        format: "json",
      },
    })
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
    getArtistCount,
    getUserInfo
};