export const weatherApiUrl = "https://api.openweathermap.org/data/2.5/";
export const weatherAppId = "f7106e730a0e72660b18bcdb5c150571";
export const currentWeatherApiUrlWithId = `${weatherApiUrl}weather?appid=${weatherAppId}`;
export const weatherForecastApiUrlWithId = `${weatherApiUrl}forecast?appid=${weatherAppId}`;

export default {
    weatherApiUrl,
    weatherAppId,
    currentWeatherApiUrlWithId,
    weatherForecastApiUrlWithId
};
