import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {

  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    console.log(journey);
    setJourney(journey);
  }

  return (
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange} />
    <p>
      {journey && 
        `Nalezeno spojení s ID ${journey.journeyId}.`
      }
      
    </p>
  </main>
  )
};
