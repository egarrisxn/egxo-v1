import GitHubCalendar from "react-github-calendar";

const calendarConfig = {
  username: "egarrisxn",
  theme: {
    light: ["#cdffc8", "#64fa5c", "#10d60c", "#09860b", "#105714"],
    dark: ["#cdffc8", "#64fa5c", "#10d60c", "#09860b", "#105714"],
  },
};

export function GitHubDisplay() {
  return (
    <>
      <div className="xl:hidden">
        <GitHubCalendar
          {...calendarConfig}
          blockMargin={1}
          blockRadius={1}
          blockSize={9}
          fontSize={14}
        />
      </div>
      <div className="hidden xl:block">
        <GitHubCalendar
          {...calendarConfig}
          blockMargin={1}
          blockRadius={1}
          blockSize={13}
          fontSize={16}
        />
      </div>
    </>
  );
}
