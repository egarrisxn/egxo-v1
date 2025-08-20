const fetchFromSpotify = async (
  endpoint: string,
  accessToken: string
): Promise<Response> => {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response;
};

export const getNowPlaying = (accessToken: string): Promise<Response> =>
  fetchFromSpotify(
    "https://api.spotify.com/v1/me/player/currently-playing",
    accessToken
  );

export const getTopTracks = (accessToken: string): Promise<Response> =>
  fetchFromSpotify("https://api.spotify.com/v1/me/top/tracks", accessToken);
