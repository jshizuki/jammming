let accessToken = "";
const clientID = "815bc09e8d134d799cc7b39dec28e87a";
const redirectURI = "http://localhost:3000/";

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
    return (window.location = redirect);
  }
};

export const search = (term) => {
  const result = [];
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
      jsonResponse.tracks.items.map(track => {
        let object = {id: track.album.uri , name: track.name, artist: track.artists[0].name, album: track.album.name}
        return result.push(object);
      })
      return result;
    });
};
