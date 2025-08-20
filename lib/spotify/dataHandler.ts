import { getNowPlaying, getTopTracks } from "./spotifyApi";

export interface SpotifyTrack {
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  title: string;
}

export interface NowPlayingResult extends SpotifyTrack {
  isPlaying: boolean;
}

export async function getAccessToken(): Promise<{ access_token: string }> {
  const response = await fetch("/api/spotify", { method: "POST" });
  if (!response.ok) {
    throw new Error("Failed to fetch access token");
  }
  return response.json();
}

export async function getNowPlayingItem(): Promise<NowPlayingResult> {
  try {
    const { access_token } = await getAccessToken();
    const response = await getNowPlaying(access_token);

    if (response.status === 204 || response.status > 400) {
      return {
        isPlaying: false,
        albumImageUrl: "",
        artist: "",
        songUrl: "",
        title: "",
      };
    }

    const nowPlayingData = await response.json();
    const song = nowPlayingData.item;

    return {
      albumImageUrl: song.album.images[0].url,
      artist: song.artists.map((a: { name: string }) => a.name).join(", "),
      isPlaying: nowPlayingData.is_playing,
      songUrl: song.external_urls.spotify,
      title: song.name,
    };
  } catch (error) {
    console.error("Error fetching now playing item:", error);
    return {
      isPlaying: false,
      albumImageUrl: "",
      artist: "",
      songUrl: "",
      title: "",
    };
  }
}

export async function getTopTracksList(): Promise<{ tracks: SpotifyTrack[] }> {
  try {
    const { access_token } = await getAccessToken();
    const response = await getTopTracks(access_token);

    if (response.status === 204 || response.status > 400) {
      return { tracks: [] };
    }

    const topTracksData = await response.json();

    const tracks: SpotifyTrack[] = topTracksData.items
      .slice(0, 5)
      .map((track: any) => ({
        albumImageUrl: track.album.images[0].url,
        artist: track.artists.map((a: { name: string }) => a.name).join(", "),
        songUrl: track.external_urls.spotify,
        title: track.name,
      }));

    return { tracks };
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return { tracks: [] };
  }
}
