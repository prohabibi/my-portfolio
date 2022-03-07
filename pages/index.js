import Head from "next/head";
import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Layout from "./common/Layout";
// export const API_KEY_OPENWEATHER = `//pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139&appid=${API_KEY_OPENWEATHER}`;

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      return fetch("/api/get-weather");
    };

    fetchData()
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);

  if (!data) return <p>No data</p>;

  return (
    <Layout>
      <div className="container mx-auto">
        <Head>
          <title>Current weather in London</title>
        </Head>
        <h1 className="font-bold text-xl my-4">
          Check the weather in your location
        </h1>
        <div className="grid grid-cols-4 grid-flow-row gap-4">
          {(data.list || []).map((item, index) => (
            <WeatherCard key={index} data={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
