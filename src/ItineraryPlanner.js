import React, { useState, useEffect } from 'react';

const activitiesData = {
  Toronto: ['Ripley\'s Aquarium', 'CN Tower', 'Yonge-Dundas Square', 'Royal Ontario Museum', 'Toronto Islands'],
  Niagara: ['White water walk', 'Niagara Cruises', 'Niagara Fury', 'Niagara Skywheel', 'Journey behind the falls'],
  Montreal: ['Old Montreal', 'Notre-Dame Basilica', 'Mont-Royal Park', 'Montreal Museum of Fine Arts'],
  Banff: ['Banff Gondola', 'Lake Louise', 'Moraine Lake', 'Banff Upper Hot Springs'],
  Edmonton: ['West Edmonton Mall', 'Fort Edmonton Park', 'Edmonton Valley Zoo', 'Royal Alberta Museum'],
};

const ItineraryPlanner = () => {
  const [itinerary, setItinerary] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState({});

  useEffect(() => {
    const savedItinerary = localStorage.getItem('itinerary');
    if (savedItinerary) {
      setItinerary(JSON.parse(savedItinerary));
    }
  }, []);

  const citiesList = ['Toronto', 'Niagara', 'Montreal', 'Banff', 'Edmonton'];

  const handleAddCity = () => {
    const newCity = {
      id: Date.now(),
      name: '',
      days: 1,
      selectedActivities: []
    };

    setItinerary([...itinerary, newCity]);
    setSelectedActivities({ ...selectedActivities, [newCity.id]: [] });
  };

  const handleRemoveCity = (id) => {
    setItinerary(itinerary.filter((city) => city.id !== id));
    setSelectedActivities((prevSelectedActivities) => {
      const updatedSelectedActivities = { ...prevSelectedActivities };
      delete updatedSelectedActivities[id];
      return updatedSelectedActivities;
    });
  };

  const handleCityChange = (id, value) => {
    setItinerary((prevItinerary) => {
      const updatedItinerary = prevItinerary.map((city) => {
        if (city.id === id) {
          return { ...city, name: value };
        }
        return city;
      });
      return updatedItinerary;
    });
  };

  const handleDaysChange = (id, value) => {
    setItinerary((prevItinerary) => {
      const updatedItinerary = prevItinerary.map((city) => {
        if (city.id === id) {
          return { ...city, days: value };
        }
        return city;
      });
      return updatedItinerary;
    });
  };

  const handleSave = () => {
    // Save the itinerary data or do any other necessary actions here
    alert('Itinerary saved');
    console.log('Itinerary saved:', itinerary);
  };
  const handleActivityChange = (id, selectedOptions) => {
    setSelectedActivities({ ...selectedActivities, [id]: selectedOptions });
  };

  const handleAddActivity = (cityId) => {
    const selectedOptions = selectedActivities[cityId];
    setItinerary((prevItinerary) => {
      const updatedItinerary = prevItinerary.map((city) => {
        if (city.id === cityId) {
          const addedActivities = [...city.selectedActivities, ...selectedOptions];
          // Display message 'Activity Added' when activity is added
          if (addedActivities.length > city.selectedActivities.length) {
            alert('Activity Added');
          }
          return { ...city, selectedActivities: addedActivities };
        }
        return city;
      });
      return updatedItinerary;
    });
    setSelectedActivities((prevSelectedActivities) => {
      const updatedSelectedActivities = { ...prevSelectedActivities };
      updatedSelectedActivities[cityId] = [];
      return updatedSelectedActivities;
    });
  };

  return (
    <div>
      <h2>Itinerary Planner</h2>
      <h3>Plan your trip here</h3>

      {itinerary.map((city) => (
        <div key={city.id}>
          <label>
            City:
            <select
              value={city.name}
              onChange={(e) => handleCityChange(city.id, e.target.value)}
            >
              <option value="">Select City</option>
              {citiesList.map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
            </select>
          </label>

          <label>
            Days:
            <input
              type="number"
              value={city.days}
              onChange={(e) => handleDaysChange(city.id, parseInt(e.target.value))}
            />
          </label>

          <label>
            Activities:
            <select
              multiple
              value={selectedActivities[city.id]}
              onChange={(e) =>
                handleActivityChange(city.id, Array.from(e.target.selectedOptions, (option) => option.value))
              }
            >
              {activitiesData[city.name]?.map((activity) => (
                <option key={activity} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
          </label>

          <button onClick={() => handleAddActivity(city.id)}>Add Activity</button>

          <button onClick={() => handleRemoveCity(city.id)}>Remove City</button>
        </div>
      ))}

      <button onClick={handleAddCity}>Add City</button>

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ItineraryPlanner