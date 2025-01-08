import React from 'react';
import NavbarComp from '../Navbar';
import './privacy.css';
import Footer from '../footer';

const PrivacyPolicyPage = () => {
  return (
    <div>
        <NavbarComp />
        <section className='pravicy'>
    <div className="privacy-policy-page">
      <header className="privacy-policy-header">
        <img src="/assets/img/h07.jpg" alt="Privacy Policy Header" className="header-image" />
        <h1>Privacy Policy</h1>
        <p className="subtitle">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
      </header>

      <div className="privacy-policy-body">
        <section id="information-collection">
          <h2><img src="/assets/img/h07.jpg" alt="Security" className="section-icon" /> Information Collection</h2>
          <p>
            We collect various types of information to provide and improve our services. This includes personal details such as your name, email address, phone number, and payment information, which you provide when creating an account or using our services.
          </p>
        </section>

        <section id="use-of-information">
          <h2><img src="/assets/img/h07.jpg" alt="Use of Info" className="section-icon" /> Use of Information</h2>
          <p>
            The information we collect is used to personalize your experience, process transactions, improve customer service, send periodic emails, and provide promotional offers. We may also use your data for research and analysis to improve our services.
          </p>
        </section>

        <section id="cookies">
          <h2><img src="/assets/img/h07.jpg" alt="Cookies" className="section-icon" /> Cookies</h2>
          <p>
            Our website uses cookies to enhance your user experience. Cookies help us remember and process items in your shopping cart, understand your preferences, and improve our website functionality.
          </p>
        </section>

        <section id="data-sharing">
          <h2><img src="/assets/img/h07.jpg" alt="Data Sharing" className="section-icon" /> Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who help us operate our website, conduct business, or serve you, provided they agree to keep this information confidential.
          </p>
        </section>

        <section id="data-protection">
          <h2><img src="/assets/img/h07.jpg"alt="Data Protection" className="section-icon" /> Data Protection</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. These include encryption, secure servers, and firewalls to protect against unauthorized access, alteration, or disclosure of your personal data.
          </p>
        </section>

        <section id="your-rights">
          <h2><img src="/assets/img/h07.jpg" alt="User Rights" className="section-icon" /> Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data at any time. You may also opt-out of receiving promotional emails by following the unsubscribe instructions in the emails or by contacting us directly.
          </p>
        </section>

        <section id="third-party-links">
          <h2><img src="/assets/img/h07.jpg" alt="Third Party Links" className="section-icon" /> Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. Please review their privacy policies before submitting any personal data to them.
          </p>
        </section>

        <section id="policy-changes">
          <h2><img src="/assets/img/h07.jpg" alt="Policy Changes" className="section-icon" /> Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any updates.
          </p>
        </section>

        <section id="contact-us">
          <h2><img src="/assets/img/h07.jpg" alt="Contact Us" className="section-icon" /> Contact Us</h2>
          <p>
            If you have any questions regarding this privacy policy or the way we handle your information, please contact us at <a href="mailto:support@ourwebsite.com">support@ourwebsite.com</a>.
          </p>
        </section>
      </div>
    </div>
    </section>
    <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
