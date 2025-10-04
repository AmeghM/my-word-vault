import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{ backgroundColor: "#F0FDF4 " }}
        className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 text-center w-full overflow-hidden text-gray-700"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] xl:leading-[95px] font-medium max-w-5xl">
          Build your vocabulary, one{" "}
          <span className="bg-gradient-to-r from-[#047857] to-[#10b981] bg-clip-text text-transparent ">
            word
          </span>{" "}
          at a time.
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500 max-w-md sm:max-w-lg md:max-w-2xl mx-auto pb-2">
          A personal space to collect, save, and master new words. Whether
          you’re preparing for exams, improving communication, or just love
          learning, we make it simple to grow your vocabulary every day
        </p>
        <Link to={"/login"}>
          <button className="px-7 py-3 bg-amber-300 rounded-lg cursor-pointer shadow-lg  hover:bg-amber-400 hover:-translate-y-1 transition">
            Build Now
          </button>
        </Link>
        <div className="relative">
          <img
            src="https://images.stockcake.com/public/f/1/2/f121731e-6388-472c-b314-aeb465717b4c_large/focused-computer-work-stockcake.jpghttps://images.stockcake.com/public/b/2/6/b26fcc57-7528-4893-ae68-88874c38dc9d_medium/studying-late-night-stockcake.jpg"
            alt="hero image"
            className="w-full max-w-6xl rounded-3xl  "
          />
        </div>
      </div>

      <section id="works" className="py-18 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#047857]">
            How It Works
          </h2>
          <p className="text-gray-700 mb-12">
            Learn, track, and master new words effortlessly in just a few steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:-translate-y-1 transition">
              <div className="bg-green-400 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Add Words</h3>
              <p className="text-gray-600 text-center">
                Save new words with definitions, examples, and notes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:-translate-y-1 transition">
              <div className="bg-green-400 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Organize & Track</h3>
              <p className="text-gray-600 text-center">
                Filter, sort, and review words to keep track of your progress.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:-translate-y-1 transition">
              <div className="bg-green-400 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn & Master</h3>
              <p className="text-gray-600 text-center">
                Review words regularly to strengthen your vocabulary.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <Link to={"/login"}>
            <button className="px-7 py-3 bg-green-400 rounded-lg cursor-pointer shadow-lg  hover:bg-green-500 hover:-translate-y-1 transition">
              Add Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
