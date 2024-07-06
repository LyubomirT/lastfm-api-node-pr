require('dotenv').config();

const { getArtistCount, getUserInfo } = require('./index');

function testScrape(username) {
    return getArtistCount(username)
        .then((data) => {
            console.log('Scraped data:', data);
            return getUserInfo(username, process.env.LAST_FM_API_KEY);
        })
        .then((data) => {
            console.log('User info:', data);
        })
        .catch((error) => {
            console.error('Scraping failed:', error);
        });
}

testScrape('raspberri05', false);