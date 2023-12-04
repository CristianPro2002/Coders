import {
    FacebookThemeTwoIcon,
    InstagramThemeTwoIcon,
    WebsiteThemeTwoIcon,
    WhatsappThemeTwoIcon,
  } from "@/components/ui/icons/Icons";
  import { validationLang } from "@/utils/functions/validation-lang"
  import styles from "@/styles/Theme/Second-theme/Home/contact.module.css";
  
  export default function SecondThemeContact({ contact, LANGUAGE, formatHours }) {
    return (
      <div className={styles["contact"]}>
        {Object.entries(contact.address_title).length ? (
          <section className={styles["contact-address"]}>
            <h2 className={styles["contact-address-title"]}>
              {validationLang(contact.address_title, LANGUAGE)}
            </h2>
            <p>{contact.address}</p>
          </section>
        ) : null}
        {Object.entries(contact.open_hours_title).length ? (
          <section className={styles["contact-hours"]}>
            <h2 className={styles["contact-hours-title"]}>
              {validationLang(contact.open_hours_title, LANGUAGE)}
            </h2>
            {Object.entries(contact.open_hours).length ? (
              <article className={styles["contact-hours-contentHours"]}>
                {validationLang(contact.open_hours, LANGUAGE).map((item, index) => (
                  <p key={index}>
                    {item.day && item.day}{" "}
                    {item.hours && item.hours.map((item, index) => (
                      <span key={index} style={{ padding: "2px" }}>
                        {item}
                      </span>
                    ))}
                  </p>
                ))}
              </article>
            ) : null}
          </section>
        ) : null}
        {Object.keys(contact.title).length || contact.email || contact.phone ? (
          <section>
            {Object.keys(contact.title).length ? (
              <h2 className={styles["contact-info-title"]}>
                {validationLang(contact.title, LANGUAGE)}
              </h2>
            ) : null}
            {contact.phone ? <p>{contact.phone}</p> : null}
            {contact.email.length ? <p>{contact.email}</p> : null}
          </section>
        ) : null}
        <div className={styles["contact-social"]}>
          {contact.whatsapp.length ? (
            <div className={styles["contact-networks"]}>
              <WhatsappThemeTwoIcon width="50" height="50" />
            </div>
          ) : null}
          {contact.facebook.length ? (
            <div className={styles["contact-networks"]}>
              <FacebookThemeTwoIcon width="50" height="50" />
            </div>
          ) : null}
  
          {contact.instagram.length ? (
            <div className={styles["contact-networks"]}>
              <InstagramThemeTwoIcon width="50" height="50" />
            </div>
          ) : null}
  
          {contact.web.length ? (
            <div className={styles["contact-networks"]}>
              <WebsiteThemeTwoIcon width="50" height="50" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  