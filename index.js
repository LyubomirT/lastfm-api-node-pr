const cheerio = require('cheerio');
const axios = require('axios');
const { hasCookie, getCookie, setCookie } =  require("cookies-next"); // Assuming you're using cookies-next for cookie management

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

function getCookies(type) {
  if (type === "nextjs") {
      let cookieList = [];
      if (!hasCookie("session_key") || !hasCookie("username")) {
        return undefined;
      } else {
        cookieList.push(getCookie("session_key"));
        cookieList.push(getCookie("username"));
        return cookieList;
      }
  }
  return "only nextjs cookies are supported at this time. Please specify a type"
}

function setCookies(type, session_key, username) {
  if (type === "nextjs") {  
    console.log("settings");
    setCookie("session_key", session_key);
    setCookie("username", username);
    return "done";
  }
  return "only nextjs cookies are supported at this time. Please specify a type"
}

function getSession(token, signature, api_key) {
  return axios
    .get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: "auth.getSession",
        api_key: api_key,
        token: token,
        api_sig: signature,
        format: "json",
      },
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
  }

module.exports = { getArtistCount, getUserInfo, getCookies, setCookies, getSession };