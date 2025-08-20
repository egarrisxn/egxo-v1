import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { TrackList } from "./SpotifyTrackList";

export function WeeklyTracks() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          asChild
          variant="none"
          size="text"
          aria-label="A popover of my top spotify tracks this week"
          className="group"
        >
          <p>
            <span className="group-hover:text-green-400">
              My top tracks this week{" "}
            </span>
            <span className="inline-block text-green-400 transition-transform group-hover:translate-x-1 group-hover:text-foreground motion-reduce:transform-none">
              {""} &#8599;
            </span>
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <TrackList />
      </PopoverContent>
    </Popover>
  );
}
