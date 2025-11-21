import React, { useState } from 'react';

const UserRegister = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800">
      <div className="flex flex-col items-center gap-6">
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-4 relative">
          <span className={`text-base font-semibold ${!flipped ? 'underline' : ''}`}>
            Log in
          </span>
          <label className="relative w-14 h-7 flex items-center">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={flipped}
              onChange={() => setFlipped(!flipped)}
            />
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-white border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_rgba(50,50,50,1)] transition-all peer-checked:bg-blue-500" />
            <span className="absolute h-6 w-6 left-[-2px] bottom-[2px] bg-white border-2 border-gray-800 rounded-md shadow-[0_3px_0_0_rgba(50,50,50,1)] transition-transform peer-checked:translate-x-7" />
          </label>
          <span className={`text-base font-semibold ${flipped ? 'underline' : ''}`}>
            Sign up
          </span>
        </div>

        {/* Flip Card */}
        <div className="relative w-[300px] h-[350px] [perspective:1000px]">
          <div
            className={`absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
              flipped ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            {/* Front Side */}
            <div className="absolute w-full h-full bg-gray-200 rounded-md border-2 border-gray-800 shadow-[4px_4px_0_0_rgba(50,50,50,1)] flex flex-col justify-center items-center gap-5 [backface-visibility:hidden] p-5">
              <div className="text-xl font-extrabold">Log in</div>
              <form className="flex flex-col items-center gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[250px] h-10 px-3 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_rgba(50,50,50,1)] font-semibold placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[250px] h-10 px-3 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_rgba(50,50,50,1)] font-semibold placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-[120px] h-10 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_rgba(50,50,50,1)] font-semibold text-[17px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                >
                  Let’s go!
                </button>
              </form>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-gray-200 rounded-md border-2 border-gray-800 shadow-[4px_4px_0_0_rgba(50,50,50,1)] flex flex-col justify-center items-center gap-5 [transform:rotateY(180deg)] [backface-visibility:hidden] p-5">
              <div className="text-xl font-extrabold">Sign up</div>
              <form className="flex flex-col items-center gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[250px] h-10 px-3 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_rgba(50,50,50,1)] font-semibold placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[250px] h-10 px-3 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_rgba(50,50,50,1)] font-semibold placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[250px] h-10 px-3 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_rgba(50,50,50,1)] font-semibold placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-[120px] h-10 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_rgba(50,50,50,1)] font-semibold text-[17px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                >
                  Confirm!
                </button>
              </form>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UserRegister;