export default function Pricing() {
  return (
    
    <section
      id="pricing"
      
      className="py-16 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 text-center">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className=" bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 "></div>
      <div className=" bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className=" bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 "></div>

      <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
        Registration Now Open!
      </h2>

      <p className="text-gray-800 mb-10">
        Grab the Early Bird offer before it ends ⏳
      </p>

      <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
        
        {/* 🔥 EARLY BIRD (MAIN FOCUS) */}
        <div className="w-full  bg-gradient-to-br from-green-600 to-emerald-600 p-8 rounded-lg  scale-100  text-white borderRadius-10px shadow-2xl">
          <p className="text-sm uppercase tracking-wide opacity-90">
            🔥 Early Bird 
          </p>

          <h3 className="text-5xl font-bold my-4">₹499</h3>

          <p className="text-sm mb-4">
            Limited time offer <br />(Only for first 25 registrations)
          </p>

          <button onClick={() => window.open('https://forms.gle/XcMaQU3aqxwMuBCt5', '_blank')} 
          className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-100 transition">
            Register Now
          </button>
        </div>

        {/* ⚪ NORMAL (LESS FOCUS) */}
        <div className="min-w-full  bg-gradient-to-br from-green-800 to-emerald-900 p-5 rounded-lg opacity-100 text-white">
          <p className="text-sm">Normal Price</p>
          <h3 className="text-2xl font-semibold">₹699</h3>

           {/* <button onClick={() => window.open('https://forms.gle/XcMaQU3aqxwMuBCt5', '_blank')} 
          className="w-fit px-4 bg-white text-black font-bold py-1 rounded-lg hover:bg-gray-100 transition mx-auto block mt-3">
           Register Now
          </button> */}

        </div>

      </div>
    </section>
  );
}