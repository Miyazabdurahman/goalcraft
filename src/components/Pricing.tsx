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
        <div className="w-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 p-8 md:p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden">

  {/* Decorative glow */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide uppercase">
    Early Bird Offer
  </span>

  <h3 className="text-5xl md:text-6xl font-extrabold mt-5">
    ₹499
  </h3>

  <p className="mt-2 text-blue-100">
    Limited seats only! Only for first 50 registrations.
  </p>

  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-100 text-center">
  Secure your spot now!
</div>

  <button
    className="mt-8 px-10 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
    Register Now →
  </button>
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