import { useEffect, useState } from "react";

export default function IntroPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl 
      max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-center">

        <div 
        className="text-sm sm:text-base leading-relaxed space-y-4 
        text-gray-800 dark:text-gray-200"
        style={{ fontFamily: "Anek Malayalam, sans-serif" }}
        >

          <p>മാതാപിതാക്കൾ ആശങ്കയിലാണ്...!</p>
          <p>വിദ്യാർഥികൾ ഡിപ്രഷനിലാണ്...!</p>
          <p>അദ്ധ്യാപകർ നിസ്സഹായരാണ്...!</p>
          <p>സമൂഹം വെറും നോക്കുകുത്തിയായി മാറിയിരിക്കുന്നു...!</p>
          <p>ധാർമികത അതിന്റെ ഇരുട്ടറകളിലേക്ക് മറഞ്ഞിരിക്കുന്നു...!</p>

          <p>
            പ്രശ്നങ്ങൾ കൂടുന്നു...കൊലപാതകങ്ങൾ അധികരിക്കുന്നു...!
          </p>
          <p>
            കുടുംബ ജീവിതം തകരുന്നു...!
          </p>

          <p>
            സമൂഹം അധപതനത്തിലേക്ക് കൂപ്പുകുത്തി കൊണ്ടിരിക്കുന്നു...!
          </p>

          <p>
           കൗമാരം ലഹരിയാൽ ഭരിക്കപ്പെട്ടുകൊണ്ടിരിക്കുന്നു...!
          </p>

          <p>YOLO സത്യമാണോ<br />സത്യാസത്യങ്ങൾ വേർതിരിയേണ്ടേ നമുക്ക്...?<br />നമുക്ക് മറ്റൊരു ജീവിതം ഇല്ലേ...?<br />സ്വർഗ്ഗനരകങ്ങളില്ലേ...?</p>
          
          

          <p>
            പഠിക്കേണ്ടവരല്ലേ നാം<br />
           നല്ല നാളെക്കായി കൊതിക്കേണ്ടവരല്ലേ നാം<br />
           മാറേണ്ടവരല്ലേ നാം
          </p>
          <p>
            അതെ,
          </p>
          
          <p className="font-semibold text-lg">
            ഈ ചോദ്യങ്ങൾക്കെല്ലാം മറുപടിയായി,
            <br /> ഈ പ്രശ്നങ്ങൾക്കെല്ലാം പരിഹാരമായി...
          </p>

          <p className="font-bold text-purple-600 dark:text-purple-400 text-lg">
            ഈ അവധിക്കാലത്ത്
            തിരൂരങ്ങാടിയിൽ നിങ്ങൾക്കു മുമ്പാകെ വരുന്നു...
          </p>

          <p className="font-bold text-lg">
            SUMMERISE MORAL SCHOOL
          </p>

        </div>

        <button
          onClick={() => setShow(false)}
          className="mt-8 px-28 py-3 bg-gradient-to-r 
          from-purple-600 to-blue-600 text-white 
          rounded-full font-semibold hover:scale-105 transition"
        >
          Continue
        </button>

      </div>

    </div>
  );
}