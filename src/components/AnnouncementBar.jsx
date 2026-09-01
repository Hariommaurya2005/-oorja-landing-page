const AnnouncementBar = () => {
  const tickerText = [
    "THE ARTIST LAUNCHPAD",
    "90-DAY ARTIST DEVELOPMENT PROGRAM",
    "BECOME A STAGE-READY ARTIST",
    "LIMITED SEATS AVAILABLE",
  ];

  return (
    <section className="announcement-bar">
      <div className="announcement-track">
        {[...tickerText, ...tickerText].map((text, index) => (
          <div className="ticker-item" key={index}>
            <span className="ticker-star">✦</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnnouncementBar;