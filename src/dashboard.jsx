import cakes from "./assets/cakes.png";
import drinks from "./assets/drinks.png";
import snacks from "./assets/snacks.png";
import celebrations from "./assets/celebrations.png";
import icecreams from "./assets/icecreams.png";
import TemporaryDrawer from "./drawer";
import sweets from "./assets/sweets.png";
export default function Dashboard() {
  return (
    <>
      <div className="relative bg-transparent">
        <section className="section-A">
          <div className="relative flex items-center justify-center bg-fuchsia-950 p-5 min-h-25">
            <div className="absolute left-5">
              <TemporaryDrawer />
            </div>
            <div className="text-center text-amber-400">
              <h1 className="text-5xl font-semibold">TECH FRESH BAKERY</h1>
            </div>
          </div>
          <div className="flex align-middle justify-center m-5 p-5 gap-5 bg">
            <section className="section_one bg-blue-200 m-15 mx-0 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 ">
              <div className="flex m-5 p-5 gap-5">
                <div className="text-center content-center">
                  <h1 className="text-5xl font-bold text-black m-5">Drinks</h1>
                  <h2 className="text-xl text-black">
                    From fresh bites to warm sips.
                  </h2>
                  <h1 className="text-xl text-black">
                    The perfect blend to start your day.
                  </h1>
                </div>
                <div>
                  <img
                    src={drinks}
                    alt="Drinks"
                    className="w-70 hover:rotate-20 hover:scale-120 transition-all duration-500"
                  />
                </div>
              </div>
            </section>
            <section className="section_two my-5 p-5 gap-5">
              <div>
                <div className="flex m-5 p-5 gap-5 bg-fuchsia-200 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-center content-center">
                    <h1 className="text-3xl font-bold text-black">Cakes</h1>
                    <h2 className="text-sm text-black">
                      Indulge in our irresistible cakes.
                    </h2>
                    <h1 className="text-sm text-black">
                      A slice of happiness in every bite.
                    </h1>
                  </div>
                  <div>
                    <img
                      src={cakes}
                      alt="Cakes"
                      className="w-40 hover:rotate-20 hover:scale-120 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="flex m-5 p-5 gap-5 bg-emerald-200 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-center content-center ">
                    <h1 className="text-3xl font-bold text-black">Snacks</h1>
                    <h2 className="text-sm text-black">
                      Satisfy your cravings with our
                    </h2>
                    <h1 className="text-sm text-black">delicious snacks.</h1>
                  </div>
                  <div>
                    <img
                      src={snacks}
                      alt="Snacks"
                      className="w-40 hover:rotate-20 hover:scale-120 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="section-B">
          <div className="flex align-middle justify-center p-5 gap-5 bg">
            <section className="section_two my-5 p-5 gap-5">
              <div>
                <div className="flex m-5 p-5 gap-5 bg-fuchsia-200 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-center content-center">
                    <h1 className="text-3xl font-bold text-black">Ice Creams</h1>
                    <h2 className="text-sm text-black">
                      icecreams are the perfect treat to
                    </h2>
                    <h1 className="text-sm text-black">beat the heat.</h1>
                  </div>
                  <div>
                    <img
                      src={icecreams}
                      alt="Ice Creams"
                      className="w-40 hover:rotate-20 hover:scale-120 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="flex m-5 p-5 gap-5 bg-emerald-200 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-center content-center ">
                    <h1 className="text-3xl font-bold text-black">Sweets</h1>
                    <h2 className="text-sm text-black">
                      sweets are the perfect way to satisfy 
                    </h2>
                    <h1 className="text-sm text-black">your sweet tooth </h1>
                  </div>
                  <div>
                    <img
                      src={sweets}
                      alt="Sweets"
                      className="w-40 hover:rotate-20 hover:scale-120 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="section_one bg-blue-200 my-15 mx-0 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 ">
              <div className="flex m-5 p-5 gap-5">
                <div className="text-center content-center">
                  <h1 className="text-5xl font-bold text-black m-5">Drinks</h1>
                  <h2 className="text-xl text-black">
                    From fresh bites to warm sips.
                  </h2>
                  <h1 className="text-xl text-black">
                    The perfect blend to start your day.
                  </h1>
                </div>
                <div>
                  <img
                    src={drinks}
                    alt="Drinks"
                    className="w-70 hover:rotate-20 hover:scale-120 transition-all duration-500"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
