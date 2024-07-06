const { getAllArtists } = require('./index'); // Adjust the path as necessary

// Call the function and handle the promise it returns
function testScrape(username) {
    return getAllArtists(username)
        .then((data) => {
            console.log('Scraped data:', data);
        })
        .catch((error) => {
            console.error('Scraping failed:', error);
        });
}

// Execute the test function
testScrape('raspberri05', false);