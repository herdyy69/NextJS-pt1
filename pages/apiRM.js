import React from "react";
import Head from "next/head";
import axios from "axios";

export default function ApiRM() {
  const [data, setData] = React.useState(null);

  const buttonClick = () => {
    const search = document.getElementById("search").value;

    // jika value kosong maka alert
    if (search === "") {
      alert("Please enter a search term");
    } else {
      axios
        .get("https://rickandmortyapi.com/api/character/?name=" + search)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const dataMap = data?.results.map((item) => {
    return (
      <div key={item.id}>
        <div className="w-full h-full p-4">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={item.image}
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {item.name} -{" "}
                <span className="text-gray-500">{item.species}</span>
              </h1>
              <p className="leading-relaxed mb-3">{item.status}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Head>
        <title>HIT API</title>
      </Head>
      <main>
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="container px-5 py-5 my-7">
            <h1 className="text-3xl font-bold text-center mb-2">
              Rick and Morty API
            </h1>
            <div className="flex flex-row items-center justify-center w-full mb-12">
              <input
                id="search"
                type="text"
                placeholder="Search"
                className="border-2 border-gray-200 border-opacity-60 rounded-sm overflow-hidden p-2"
              />
              <button
                id="searchButton"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => buttonClick()}
              >
                Search
              </button>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center">
              {dataMap}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
