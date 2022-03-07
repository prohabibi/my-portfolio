import Image from "next/image";
import { toCelsius } from "../../helpers/format";

export default function WeatherCard(props) {
  const { data = {} } = props;

  return (
    <div className="text-center p-3 border border-solid border-indigo-600 rounded hover:cursor-pointer hover:text-indigo-600">
      <Image
        className="mx-auto"
        src={`http://openweathermap.org/img/wn/${
          (data.weather[0] || {}).icon
        }@2x.png`}
        alt={(data.weather[0] || {}).description}
        height={100}
        width={100}
      ></Image>
      <p>{new Date(data.dt_txt).toLocaleDateString()}</p>
      <p className="font-medium text-4xl">{toCelsius(data.main.temp)} ºC</p>
      <p>
        <span className="font-normal">{toCelsius(data.main.temp_min)}</span> |{" "}
        <span className="font-light">{toCelsius(data.main.temp_max)}</span>
      </p>
      <p>
        <span className="font-normal">Humedad:</span> {data.main.humidity}
      </p>
      <p>
        <span className="font-normal">Precipitaciones: {data.clouds.all}</span>
      </p>
      <p>
        <span className="font-normal">Viento:</span> {data.wind.speed} km/h
      </p>
    </div>
  );
}
