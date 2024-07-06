# lastfm-api-node

## Installation
```bash
$ npm i lastfm-api-node
```

## Usage Example
```bash
const { getUserInfo } = require("lastfm-api-node")

return getUserInfo(username, api_key)
   .then((response) => {
      console.log(response)
   })
   .catch((error) => {
      console.log(error)
   })
```

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [getArtistCount](#getartistcount)
    *   [Parameters](#parameters)
*   [getUserInfo](#getuserinfo)
    *   [Parameters](#parameters-1)
*   [getCookies](#getcookies)
    *   [Parameters](#parameters-2)
*   [setCookies](#setcookies)
    *   [Parameters](#parameters-3)
*   [getSession](#getsession)
    *   [Parameters](#parameters-4)
*   [getRecentTracks](#getrecenttracks)
    *   [Parameters](#parameters-5)

### getArtistCount

Retrieves the count of artists in the user's library.

Usage:

```bash
getArtistCount("username", true)
getArtistCount("username", false)
```

#### Parameters

*   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The username of the user whose artist count is being retrieved.
*   `cors` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether to use a CORS proxy to bypass CORS restrictions.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A promise that resolves with the number of artists in the user's library.

### getUserInfo

Fetches information about a user, such as their username and email.

Usage:

```bash
getUserInfo("username", "api_key")
```

#### Parameters

*   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The username of the user whose information is being fetched
*   `api_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The API key for the service.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A promise that resolves with an object containing the user's information.

### getCookies

Retrieves all cookies related to the current session.

Usage:

```bash
getCookies("nextjs")
```

#### Parameters

*   `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The type of cookie you want to use for the service.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A promise that resolves with an object containing all cookies.

### setCookies

Sets cookies for the user session. Currently supports only Next.js applications.

Usage:

```bash
setCookies("nextjs", "session_key", "username");
```

#### Parameters

*   `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The type of application, e.g., "nextjs".
*   `session_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The session key to be stored in the cookie.
*   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The username to be stored in the cookie.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** A confirmation message or an error message if the type is not supported.

### getSession

Fetches the session for a user based on the provided token, signature, and API key.

Usage:

```bash
getSession("token", "signature", "api_key")
```

#### Parameters

*   `token` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The token for the session.
*   `signature` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The signature for the session.
*   `api_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The API key for the service.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A promise that resolves with the session data or rejects with an error.

### getRecentTracks

Retrieves the user's recent tracks from the service.

Usage:

```bash
getRecentTracks("username", "api_key")
```

#### Parameters

*   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The username whose recent tracks are to be fetched.
*   `api_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The API key for the service.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** A promise that resolves with the recent tracks data or rejects with an error.
