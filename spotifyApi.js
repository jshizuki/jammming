const getSpotifyData = (accessToken) => {
  const url = "https://api.spotify.com/v1/search?type=TRACK";
  let accessToken = localStorage.getItem('access_token');

  fetch(url, {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};

export default getSpotifyData;
