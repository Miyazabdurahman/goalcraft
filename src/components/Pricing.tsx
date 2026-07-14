export default function Pricing() {
  return (
    
    <section
      id="pricing"
      
      className="py-16 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 text-center">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className=" bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 "></div>
      <div className=" bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className=" bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 "></div>

      <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
        Registration Now<br />Open!
      </h2>

      <p className="text-gray-800 mb-10">
        Lock in your spot for an unforgettable Monsoon experience. <br />
      </p>

      <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
        
        {/* 🔥 EARLY BIRD (MAIN FOCUS) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">

  {/* Rain Explorer */}
  <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
      ONE DAY CAMP
    </span>

    <h3 className="text-3xl lg:text-4xl font-bold mt-4 text-slate-800">
      Rain Explorer
    </h3>

    <p className="text-slate-600 mt-3">
      A fun-filled monsoon adventure where children explore nature, creativity, teamwork, and the joy of rain.
    </p>

    <div className="text-5xl lg:text-6xl font-extrabold text-blue-600 mt-6">
      ₹799
    </div>

    <div className="mt-4 space-y-2 text-sm text-slate-500">
      <p>🌧️ Rain Games</p>
      <p>🎨 Creative Workshops</p>
      <p>🌱 Nature Exploration</p>
      <p>🤝 Group Activities</p>
      <p>🎟️ Only 50 Seats Available</p>
    </div>

    <button
      className="mt-8 lg:mt-10 w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      Register Now →
    </button>

  </div>

  {/* Rain Escape */}
  <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-10 text-white relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

    <div className="hidden md:block absolute -top-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg rotate-12">
      PREMIUM
    </div>

    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
      1 NIGHT • 2 DAYS
    </span>

    <h3 className="text-3xl lg:text-4xl font-bold mt-4">
      Rain Escape
    </h3>

    <p className="text-blue-100 mt-3">
      An unforgettable residential monsoon experience packed with adventure, friendship, and nature.
    </p>

    <div className="text-5xl lg:text-6xl font-extrabold mt-6">
      ₹3,700
    </div>

    <div className="mt-4 space-y-2 text-sm text-blue-100">
      <p>🎣 Fishing</p>
      <p>🛶 Boating</p>
      <p>🪵 Pottery & Clay Making</p>
      <p>🔥 Campfire*</p>
      <p>🎟️ Limited to 35 Participants</p>
    </div>

    <button
      className="mt-8 lg:mt-10 w-full py-4 rounded-xl bg-white text-blue-700 font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      Register Now →
    </button>

  </div>

</div>
          
       {/* <div className="min-w-full  bg-gradient-to-br from-green-800 to-emerald-900 p-5 rounded-lg opacity-100 text-white">
          <p className="text-sm">Normal Price</p>
          <h3 className="text-3xl font-semibold">₹699</h3> 

            <button onClick={() => window.open('https://forms.gle/XcMaQU3aqxwMuBCt5', '_blank')} 
          className="w-fit px-9 bg-white text-gray-900 font-bold py-2 rounded-lg hover:bg-gray-100 transition mx-auto block mt-3">
           Register Now
          </button> 

        </div> */}

      </div>
    </section>
  );
}