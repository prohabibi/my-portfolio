import Image from "next/image";
import { toCelsius } from "../../helpers/format";

export default function WeatherCard(props) {
  const { data = {} } = props;
  const { weather = [], main = {}, clouds = {}, wind = {}, dt_txt = "" } = data;

  return (
    <div className="text-center p-3 border border-solid border-indigo-600 rounded hover:cursor-pointer hover:text-indigo-600">
      <Image
        className="mx-auto"
        src={`http://openweathermap.org/img/wn/${
          (weather[0] || {}).icon
        }@2x.png`}
        alt={(weather[0] || {}).description}
        height={100}
        width={100}
      ></Image>
      <p>{new Date(dt_txt).toLocaleDateString()}</p>
      <p className="font-medium text-4xl">{toCelsius(main.temp)} ºC</p>
      <p>
        <span className="font-normal">{toCelsius(main.temp_min)}</span> |{" "}
        <span className="font-light">{toCelsius(main.temp_max)}</span>
      </p>
      <p>
        <span className="font-normal">Humedad:</span> {main.humidity}
      </p>
      <p>
        <span className="font-normal">Precipitaciones: {clouds.all}</span>
      </p>
      <p>
        <span className="font-normal">Viento:</span> {wind.speed} km/h
      </p>
    </div>
  );
}
