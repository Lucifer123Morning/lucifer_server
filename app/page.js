import { FiDownload } from "react-icons/fi";
import { Button } from "../components/ui/button";

// components
import Socials from "../components/Socials";
import Photo from "../components/Photo";
import { Stats } from "../components/Stats";
import ClientOnly from "../components/ClientOnly";

const Home = () => {
  return (
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              BackEnd Developer || Fullstack Developer
            </span>
              <h1 className="h1 mb-6">
                Hello I&apos;m <br />
                <span className="text-accent">Dmitro Listopadov</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am a backend developer, I know programming languages and modern
                technologies.
              </p>

              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* ✅ Кнопка для скачивания резюме */}
                <a
                    href="/Dmitro_Listopadov_CV.pdf"
                    download="Dmitro_Listopadov_CV.pdf"
                    className="uppercase flex items-center gap-2 hover:text-accent rounded-t-full border-2 border-accent px-6 py-3 text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,150,0.5)]"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>

                {/* ✅ Социальные ссылки */}
                <div className="mb-8 xl:mb-0">
                  <Socials
                      containerStyles="flex gap-6"
                      iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>

        {/* ✅ Fix hydration issue */}
        <ClientOnly>
          <Stats />
        </ClientOnly>
      </section>
  );
};

export default Home;
