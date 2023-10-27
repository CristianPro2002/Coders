import styles from "@/styles/Theme/realtimes/First-theme/Home/Contact.module.css";

export default function ThemeOne({ contact, formatHours, data }) {
  const LANGUAGE = data.dflt_lang;
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
          {Object.entries(contact.open_hours).length ? (
            <article className={styles["contact-hours-contentHours"]}>
             {contact.open_hours[LANGUAGE].map((item, index) => (
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
      <div className={styles["contact-info"]}>
        {Object.keys(contact.title).length || contact.email || contact.phone ? (
          <section>
            {Object.keys(contact.title).length ? (
              <h2 className={styles["contact-info-title"]}>
                {contact.title[LANGUAGE]}
              </h2>
            ) : null}
            {contact.phone ? <p>{contact.phone}</p> : null}
            {contact.email.length ? <p>{contact.email}</p> : null}
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
