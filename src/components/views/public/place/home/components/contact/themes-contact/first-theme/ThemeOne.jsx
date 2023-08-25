import styles from "./ThemeOne.module.css";

export default function ThemeOne({ contact, LANGUAGE, formatHours }) {
  return (
    <div className={styles["contact"]}>
      <div className={styles["contact-address"]}>
        {Object.entries(contact.address_title).length ? (
          <section>
            <h2 className={styles["contact-address-title"]}>
              {contact.address_title[LANGUAGE]}
            </h2>
            <p>{contact.address}</p>
          </section>
        ) : null}
      </div>
      <div className={styles["contact-hours"]}>
        {Object.entries(contact.open_hours_title).length ? (
          <section>
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
      </div>
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
              <img
                src="https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/whatsapp+(1).png"
                alt="logo de whatsapp"
              />
            </div>
          ) : null}
          {contact.facebook.length ? (
            <div className={styles["contact-networks"]}>
              <img
                src="https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/facebook-color.svg"
                alt="logo de facebook"
              />
            </div>
          ) : null}

          {contact.instagram.length ? (
            <div className={styles["contact-networks"]}>
              <img
                src="https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/instagram-relleno.svg"
                alt="logo de instagram"
              />
            </div>
          ) : null}

          {contact.web.length ? (
            <div className={styles["contact-networks"]}>
              <img
                src="https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/enlace-web.png"
                alt="logo de web"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
