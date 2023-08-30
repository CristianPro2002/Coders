import { useEffect } from "react";
import { useCustomHome } from "../../../../../utils/hooks/useCustomHome";
import Loading_Home from "../../../../ui/loadings/loading_home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Custom from "./components/custom/Custom";
import Hero from "../../../../common/hero/Hero";
import "./index.css";

export default function Index() {
  const {
    loading,
    setLoading,
    logo,
    name,
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
      if (name || logo) {
        let indexHome = document.querySelector(".index-background");
        indexHome.style.background = homeStyleBackground();
        indexHome.style.backgroundSize = "cover";
        indexHome.style.backgroundRepeat = "no-repeat";
        indexHome.style.backgroundPosition = "center";
      }

      if (about_us) {
        let indexAbout = document.querySelector(".index-about");
        indexAbout.style.background = aboutStyleBackground();
        indexAbout.style.backgroundSize = "cover";
        indexAbout.style.backgroundRepeat = "no-repeat";
        indexAbout.style.backgroundPosition = "center";
      }

      if (contact_us) {
        let indexContact = document.querySelector(".index-contact");
        indexContact.style.background = contactStyleBackground();
        indexContact.style.backgroundSize = "cover";
        indexContact.style.backgroundRepeat = "no-repeat";
        indexContact.style.backgroundPosition = "center";
      }

      if (customs) {
        let indexCustom = document.getElementsByName("index-prev");
        for (let i = 0; i < indexCustom.length; i++) {
          indexCustom[i].style.background = customStyleBackground();
          indexCustom[i].style.backgroundSize = "cover";
          indexCustom[i].style.backgroundRepeat = "no-repeat";
          indexCustom[i].style.backgroundPosition = "center";
        }
      }
    }
  }, [name, logo, about_us, loading]);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        <Loading_Home />
      ) : (
        <div className="index">
          {name || logo ? (
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
          {Object.entries(contact_us.open_hours).length ||
          Object.entries(contact_us.email).length ||
          Object.entries(contact_us.address).length ? (
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
