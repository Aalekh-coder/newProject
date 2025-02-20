import Image from "next/image";
import styles from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <header className={styles.header}>
        <h1>Privacy & Cookie Policy</h1>
      </header>

      <section className={styles.section}>
        <Image
          src="PPP-01.png"
          alt="Privacy Policy"
          className={styles.bannerImage}
        />
        <h2>Introduction</h2>
        <p>
          Welcome to VD Infotech! We value your privacy and are committed to
          protecting your personal data. This Privacy & Cookie Policy explains
          how we collect, use, and safeguard your information.
        </p>
      </section>

      <section className={styles.section}>
        <Image
          src="https://www.freeprivacypolicy.com/public/uploads/2022/05/what-information-collect-clause.jpg"
          alt="Privacy Policy"
          className={styles.bannerImage}
        />
        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Data:</strong> Name, email, contact details, etc.
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, pages
            visited, etc.
          </li>
          <li>
            <strong>Cookies:</strong> Tracking preferences and site interaction
            details.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <Image
          src="https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2021/05/privacy-policy.jpeg?fit=1200%2C400&ssl=1"
          alt="Data Usage"
          className="bannerImage"
        />
        <h2>How We Use Your Information</h2>
        <p>
          We use your data to enhance your experience, improve our services, and
          ensure security. This includes personalized recommendations, customer
          support, and analytics.
        </p>
      </section>

      <section className={styles.section}>
        <Image
          src="https://www.termsfeed.com/public/uploads/2022/09/privacy-policy-cookies-clauses.jpg"
          alt="Cookies Policy"
        />
        <h2>Cookies & Tracking</h2>
        <p>
          We use cookies to enhance site functionality and user experience. You
          can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section className={styles.section}>
        <Image
          src="https://www.termsfeed.com/public/uploads/2022/06/what-privacy-rights-clause.jpg"
          alt="Data Sharing"
        />
        <h2>Sharing & Security</h2>
        <p>
          We do not sell your data. However, we may share information with
          trusted partners for analytics, marketing, and legal compliance
          purposes.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Your Rights</h2>
        <ul>
          <li>Access and update your personal data</li>
          <li>Opt-out of marketing communications</li>
          <li>Request data deletion</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>
          For any privacy concerns, contact us at{" "}
          <strong>support@vdinfotech.in</strong>
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
