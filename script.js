// Main Countdown 
const mainCountdown = () => {
  // Set target date/time 
  const launchDate = new Date("2025-10-14T10:30:00Z"); 

  const countdownEl = document.getElementById("countdown");

  const updateMainCountdown = () => {
    const now = new Date();
    const diff = launchDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "LAUNCHED";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `T-${days}D ${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  updateMainCountdown(); // initial call
  setInterval(updateMainCountdown, 1000); // update every second
};

// Countdown for each upcoming launch (e.g. Starlink, KF-03)
const upcomingLaunchCountdowns = () => {
  const launches = [
    {
      id: "starlink-countdown",
      date: new Date("2025-10-08T15:00:00Z"), // adjust time
    },
    {
      id: "kf03-countdown",
      date: new Date("2025-10-10T02:24:00+01:00"), // Nigeria time is UTC+1
    },
  ];

  launches.forEach((launch) => {
    const el = document.getElementById(launch.id);

    const update = () => {
      const now = new Date();
      const diff = launch.date - now;

      if (diff <= 0) {
        el.textContent = "LAUNCHED";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      el.textContent = `T-${days}D ${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    update();
    setInterval(update, 1000);
  });
};

// Initialize both
mainCountdown();
upcomingLaunchCountdowns();
