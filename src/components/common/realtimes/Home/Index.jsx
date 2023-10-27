import { useEffect } from "react";
import { useCustomHome } from "../../../../utils/hooks/realtimes/useCustomHome";
import {
  ABOUT_COMPONENT,
  CONTACT_COMPONENT,
  CUSTOM_COMPONENT,
  HOME_COMPONENT,
} from "../../../../utils/constants/realtimes/typeComponent";
import { THEME_1, THEME_2 } from "../../../../utils/constants/realtimes/theme";
import Hero from "../components/Hero/Hero";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Custom from "./components/custom/Custom";
import "./index.css";

export default function Index({
  data,
  dataAbout,
  dataContact,
  dataCustom,
  typeComponent,
  theme,
}) {
  const { homeStyleBackground, contactStyleBackground, customStyleBackground } =
    useCustomHome(theme, data);

  const { logo, name, home, contact_us } = data;

  useEffect(() => {
    if (typeComponent === HOME_COMPONENT) {
      let indexHome = document.querySelector(".index-background");

      indexHome.style.background = homeStyleBackground();
      indexHome.style.backgroundSize = "cover";
      indexHome.style.backgroundRepeat = "no-repeat";
      indexHome.style.backgroundPosition = "center";
    }

    // if (customs) {
    //   let indexCustom = document.getElementsByName("index-prev");
    //   for (let i = 0; i < indexCustom.length; i++) {
    //     indexCustom[i].style.background = customStyleBackground();
    //     indexCustom[i].style.backgroundSize = "cover";
    //     indexCustom[i].style.backgroundRepeat = "no-repeat";
    //     indexCustom[i].style.backgroundPosition = "center";
    //   }
    // }
  }, [home.background_img.length, home.background_color]);

  useEffect(() => {
    if (typeComponent === ABOUT_COMPONENT) {
      const aboutStyleBackground = () => {
        if (dataAbout.background_img) {
          return `url(${dataAbout.background_img})`;
        } else if (dataAbout.background_color) {
          return dataAbout.background_color;
        } else {
          switch (theme) {
            case THEME_1:
              return "#ffffff";
            case THEME_2:
              return "#222222";
            default:
              return "#ffffff";
          }
        }
      };

      let indexAbout = document.querySelector(".index-about");

      indexAbout.style.background = aboutStyleBackground();
      indexAbout.style.backgroundSize = "cover";
      indexAbout.style.backgroundRepeat = "no-repeat";
      indexAbout.style.backgroundPosition = "center";
    }
  }, [dataAbout.background_img, dataAbout.background_color]);

  useEffect(() => {
    if (typeComponent === CONTACT_COMPONENT) {
      let indexContact = document.querySelector(".index-contact");
      indexContact.style.background = contactStyleBackground();
    }
  }, [dataContact]);

  useEffect(() => {
    if (typeComponent === CUSTOM_COMPONENT) {
      let indexCustom = document.getElementsByName("index-prev");
      for (let i = 0; i < indexCustom.length; i++) {
        indexCustom[i].style.background = customStyleBackground();
      }
    }
  }, [dataCustom]);

  return (
    <div className="index">
      {typeComponent === HOME_COMPONENT && (
        <>
          {name || logo || home.background_img || home.background_color ? (
            <section className="index-home">
              <div className="index-background">
                <div className="index-contentHero">
                  <Hero
                    theme={theme}
                    dataPlace={data}
                    typeComponent={typeComponent}
                  />
                </div>
              </div>
            </section>
          ) : (
            <section className="index-home">
              <div className="index-background"></div>
            </section>
          )}
        </>
      )}
      {typeComponent === ABOUT_COMPONENT && (
        <>
          {Object.keys(dataAbout).length > 0 ? (
            <section className="index-about">
              <div className="index-contentHero">
                <Hero
                  theme={theme}
                  dataPlace={data}
                  typeComponent={typeComponent}
                />
              </div>
              <About about={dataAbout} theme={theme} data={data} />
            </section>
          ) : null}
        </>
      )}
      {typeComponent === CONTACT_COMPONENT && (
        <>
          {Object.keys(dataContact).length > 0 ? (
            <section className="index-contact">
              <div className="index-contentHero">
                <Hero
                  theme={theme}
                  dataPlace={data}
                  typeComponent={typeComponent}
                />
              </div>
              <Contact contact={dataContact} theme={theme} data={data} />
            </section>
          ) : null}
        </>
      )}
      {typeComponent === CUSTOM_COMPONENT && (
        <>
          {dataCustom.length > 0 ? (
            <>
              {dataCustom.map((custom, index) => (
                <section className="index-prev" name="index-prev" key={index}>
                  <div className="index-contentHero">
                    <Hero
                      theme={theme}
                      dataPlace={data}
                      typeComponent={typeComponent}
                    />
                  </div>
                  <Custom custom={custom} theme={theme} data={data} />
                </section>
              ))}
            </>
          ) : null}
        </>
      )}
    </div>
  );
}
