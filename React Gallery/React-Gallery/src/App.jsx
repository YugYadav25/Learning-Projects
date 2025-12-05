import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getData(pageNo) {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNo}&limit=12`
      );
      setPhotos(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load images. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-center text-4xl font-bold mb-6">
      Yug's Gallery
      </h1>

      
      {error && (
        <div className="bg-red-200 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

     
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-md bg-white overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={item.download_url}
                alt="img"
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <p className="text-sm text-gray-600">
                  Author: <span className="font-semibold">{item.author}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}


      <div className="flex justify-center mt-8 gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span className="text-lg font-semibold">Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
