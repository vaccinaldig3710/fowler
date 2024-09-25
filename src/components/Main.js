import React, { useState, useEffect } from 'react';

function AuctionCard({ title, auctionDate, propertyImage }) {
  const [isLive, setIsLive] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const auctionTime = new Date(auctionDate);
      const timeDiff = auctionTime - now;

      if (timeDiff <= 0) {
        setIsLive(true);
        setTimeLeft('Auction is live!');
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [auctionDate]);

  return (
    <div className={`auction-card ${isLive ? 'live' : ''}`}>
      <img src={propertyImage} alt={title} className="property-image" />
      <div className="auction-details">
        <h3>{title}</h3>
        <p>{isLive ? 'Live Now!' : `Auction starts in: ${timeLeft}`}</p>
      </div>
    </div>
  );
}

function Main() {
  const upcomingAuctions = [
    {
      title: 'Luxury Villa Auction',
      auctionDate: '2024-12-15T12:00:00',
      propertyImage: 'https://fowlerauctioneers.com/wp-content/uploads/2024/01/IMG_8332.jpg',
    },
    {
      title: 'Downtown Apartment Auction',
      auctionDate: '2028-12-20T10:00:00',
      propertyImage: 'https://fowlerauctioneers.com/wp-content/uploads/2024/01/IMG_8332.jpg',
    },
  ];

  return (
    <main className="main">
      <section className="auction-section">
        <h2>Current Auction</h2>
        <AuctionCard
          title="Beachfront Mansion Auction"
          auctionDate="2024-10-10T14:00:00"
          propertyImage="https://www.housedigest.com/img/gallery/10-stunning-million-dollar-homes-in-tennessee/l-intro-1651153627.jpg"
        />
      </section>

      <section className="upcoming-auctions">
        <h2>Upcoming Auctions</h2>
        <div className="auction-list">
          {upcomingAuctions.map((auction, index) => (
            <AuctionCard
              key={index}
              title={auction.title}
              auctionDate={auction.auctionDate}
              propertyImage={auction.propertyImage}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;