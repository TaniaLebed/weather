import React from "react";

const Weather = props => {
  const { temp, city, country, feels_like, pressure, error } = props;

  return (
    <div className="infoWeath">
      {city && (
        <div>
          <p>
            Местоположение: {city}, {country}
          </p>
          <p>Температура: {temp}</p>
          <p>Чувствуется как: {feels_like}</p>
          <p>Давление: {pressure}</p>
        </div>
      )}
      <p className="error">{error}</p>
    </div>
  );
};

export default Weather;
