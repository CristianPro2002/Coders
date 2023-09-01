import {
  FacebookThemeTwoIcon,
  InstagramThemeTwoIcon,
  WebsiteThemeTwoIcon,
  WhatsappThemeTwoIcon,
} from "../../../../../../../../ui/icons/Icons";
import styles from "@/styles/Theme/Second-theme/Home/Contact.module.css";

export default function ThemeTwo({ contact, LANGUAGE, formatHours }) {
  return (
    <div className={styles["contact"]}>
        {Object.entries(contact.address_title).length ? (
          <section className={styles["contact-address"]}>
            <h2 className={styles["contact-address-title"]}>
              {contact.address_title[LANGUAGE]}
            </h2>
            <p>{contact.address}</p>
          </section>
        ) : null}
      {Object.entries(contact.open_hours_title).length ? (
        <section className={styles["contact-hours"]}>
          <h2 className={styles["contact-hours-title"]}>
            {contact.open_hours_title[LANGUAGE]}
          </h2>
          <article className={styles["contact-hours-contentHours"]}>
            {formatHours(contact.open_hours[LANGUAGE]).map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </article>
        </section>
      ) : null}
      <div className={styles["contact-info"]}>
        {contact.email.length ? (
          <section>
            <h2 className={styles["contact-info-title"]}>
              {contact.title[LANGUAGE]}
            </h2>
            <p>{contact.phone}</p>
            <p>info: {contact.email}</p>
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
    </div>
  );
}
