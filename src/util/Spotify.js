let accessToken = "";
const clientID = "815bc09e8d134d799cc7b39dec28e87a";
const redirectURI = "https://www.js_react_jammming.surge.sh"

// "http://localhost:3000/"
// "https://www.js_react_jammming.surge.sh"

export const getAccessToken = () => {
  if (accessToken) {
    return accessToken;
  }
  const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
  const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
  if (urlAccessToken && urlExpiresIn) {
    accessToken = urlAccessToken[1];
    const expiresIn = Number(urlExpiresIn[1]);
    window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
    window.history.pushState("Access Token", null, "/");
    return accessToken;
  } else {
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    window.location = redirect;
  }
};

export const search = (term) => {
  if (term === "") {
    return Promise.resolve([]);
    // This makes sure hitting enter without typing anything resolves into an empty array
  }

  const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
  const accessToken = getAccessToken();
  // console.log(url);
  // console.log(accessToken);
  return fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => console.log(networkError.message)
    )
    .then((jsonResponse) => {
      return jsonResponse.tracks.items.map((track) => ({
        id: track.id,
        uri: track.uri,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        previewUrl: track.preview_url,
      }));
    });
};

export const savePlaylist = (playlistName, trackURIs) => {
  if (!playlistName || !trackURIs) {
    return window.alert("Please make sure you have a playlist name and tracks");
  }

  const userIdUrl = "https://api.spotify.com/v1/me";
  let accessToken = getAccessToken();
  let userId = "";
  let headers = { Authorization: `Bearer ${accessToken}` }

  return fetch(userIdUrl, {
    headers: headers,
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => console.log(networkError.message)
    )
    .then((jsonResponse) => {
      userId = jsonResponse.id;
      const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;

      return fetch(createPlaylistUrl, {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ name: playlistName }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Create playlist request failed!");
        })
        .then((jsonResponse) => {
          const playlistID = jsonResponse.id;
          const addItemsToPlaylistUrl = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;

          return fetch(addItemsToPlaylistUrl, {
            headers: headers,
            method: "POST",
            body: JSON.stringify({ uris: trackURIs }),
          }).then((response) => {
            if (response.ok) {
              return window.alert("Playlist added to Spotify!");
            }
            throw new Error("Add tracks to playlist request failed");
          });
        });
    });
};
