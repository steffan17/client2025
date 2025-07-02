import React, { useEffect, useState } from "react";

// Helper to format time with leading zeros
function formatTime(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

// A list of time zones to display
const TIME_ZONES = [
  { label: "UTC", zone: "UTC" },
  { label: "New York", zone: "America/New_York" },
  { label: "London", zone: "Europe/London" },
  { label: "Paris", zone: "Europe/Paris" },
  { label: "Tokyo", zone: "Asia/Tokyo" },
  { label: "Sydney", zone: "Australia/Sydney" }
];

type ClockProps = {
  label: string;
  zone: string;
};

const Clock: React.FC<ClockProps> = ({ label, zone }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Get time in the specified time zone
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: zone
  });

  return (
    <div style={{
      margin: 12,
      padding: 12,
      border: "1px solid #ddd",
      borderRadius: 8,
      display: "inline-block",
      minWidth: 140,
      textAlign: "center",
      background: "#fafbfc"
    }}>
      <div style={{ fontWeight: "bold", marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 24, fontFamily: "monospace" }}>{timeString}</div>
    </div>
  );
};

const DigitalClock: React.FC = () => {
  return (
    <div>
      <h2>World Digital Clock</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {TIME_ZONES.map((tz) => (
          <Clock key={tz.zone} label={tz.label} zone={tz.zone} />
        ))}
      </div>
    </div>
  );
};

export default DigitalClock;