"use client";

import { useEffect, useState } from "react";
import { getTopTracksList, SpotifyTrack } from "@/lib/spotify/dataHandler";

interface TrackProps extends SpotifyTrack {
  ranking: number;
}

const Track = ({ ranking, songUrl, title, artist }: TrackProps) => {
  return (
    <div className="border-foreground/30 mt-3 flex flex-row items-baseline border-b-2">
      <p className="lg: text-yellow-500 2xl:text-base dark:text-yellow-300">
        {ranking}
      </p>
      <div className="flex w-full flex-col pl-4 leading-tight">
        <a
          href={songUrl}
          className="font-semibold tracking-tight text-neutral-950 underline decoration-neutral-600 decoration-1 hover:text-yellow-500 hover:decoration-yellow-500 dark:text-neutral-200 dark:hover:text-yellow-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p className="text-xs tracking-tight text-neutral-800 dark:text-neutral-300">
          {artist}
        </p>
      </div>
    </div>
  );
};

export function TrackList() {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const { tracks } = await getTopTracksList();
        setTracks(tracks);
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="pt-1">
          <h4 className="mb-3 text-sm font-bold tracking-widest text-yellow-500 uppercase sm:text-base sm:tracking-[0.32em] dark:text-yellow-300">
            Top 5 Tracks
          </h4>
          {tracks.map((track, i) => (
            <Track key={track.songUrl} ranking={i + 1} {...track} />
          ))}
        </section>
      )}
    </>
  );
}
