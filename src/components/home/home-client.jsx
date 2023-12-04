"use client";

import { useEffect } from "react";
import { useCustomHome } from "@/utils/hooks/useCustomHome";
import Loading_Home from "../ui/loadings/loading_home/Index";
import Hero from "../common/hero/Hero";
import About from "./about/about";
import Contact from "./contact/contact";
import Custom from "./custom/custom";
import "./home-client.css";

export default function HomeClient() {
  let {
    loading,
    setLoading,
    logo,
    name,
    home,
    about_us,
    contact_us,
    customs,
    homeStyleBackground,
    aboutStyleBackground,
    contactStyleBackground,
    customStyleBackground,
  } = useCustomHome();

  useEffect(() => {
    if (!loading) {
      let indexHome = document.querySelector(".index-background");
      indexHome.style.background = homeStyleBackground();
      indexHome.style.backgroundSize = "cover";
      indexHome.style.backgroundRepeat = "no-repeat";
      indexHome.style.backgroundPosition = "center";

      let indexAbout = document.querySelector(".index-about");

      if (about_us) {
        indexAbout.style.background = aboutStyleBackground();
        indexAbout.style.backgroundSize = "cover";
        indexAbout.style.backgroundRepeat = "no-repeat";
        indexAbout.style.backgroundPosition = "center";
      }

      let indexContact = document.querySelector(".index-contact");

      if (contact_us) {
        indexContact.style.background = contactStyleBackground();
        indexContact.style.backgroundSize = "cover";
        indexContact.style.backgroundRepeat = "no-repeat";
        indexContact.style.backgroundPosition = "center";
      }

      let indexCustom = document.getElementsByName("index-prev");

      if (customs) {
        for (let i = 0; i < indexCustom.length; i++) {
          indexCustom[i].style.background = customStyleBackground();
          indexCustom[i].style.backgroundSize = "cover";
          indexCustom[i].style.backgroundRepeat = "no-repeat";
          indexCustom[i].style.backgroundPosition = "center";
        }
      }
    }
  }, [home.background_img, home.background_color, about_us, loading]);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <Loading_Home />
      ) : (
        <div className="index">
          {logo || name || home.background_img || home.background_color ? (
            <section className="index-home">
              <div className="index-background">
                <div className="index-contentHero">
                  <Hero />
                </div>
              </div>
            </section>
          ) : (
            <section className="index-home">
              <div className="index-background"></div>
            </section>
          )}
          {about_us ? (
            <section className="index-about">
              <div className="index-contentHero">
                <Hero />
              </div>
              <About about={about_us} />
            </section>
          ) : null}
          {contact_us ? (
            <section className="index-contact">
              <div className="index-contentHero">
                <Hero />
              </div>
              <Contact contact={contact_us} />
            </section>
          ) : null}
          {customs.length ? (
            <>
              {customs.map((custom, index) => (
                <section className="index-prev" name="index-prev" key={index}>
                  <div className="index-contentHero">
                    <Hero />
                  </div>
                  <Custom custom={custom} />
                </section>
              ))}
            </>
          ) : null}
        </div>
      )}
    </>
  );
}
