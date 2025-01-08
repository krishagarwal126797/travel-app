import React from 'react';
import NavbarComp from '../Navbar';
import Footer from '../footer';
import './termsofservice.css';

const TermsOfServicePage = () => {
  return (
    <div>
        <NavbarComp />
        <section className='termsofservice'>
    <div className="terms-page">
      <div className="terms-sidebar">
        <h3>Table of Contents</h3>
        <ul>
          <li><a href="#user-accounts">User Accounts</a></li>
          <li><a href="#tour-listings">Tour Listings</a></li>
          <li><a href="#user-conduct">User Conduct</a></li>
          <li><a href="#payments">Payments</a></li>
          <li><a href="#cancellations">Cancellations</a></li>
          <li><a href="#disclaimers">Disclaimers</a></li>
          <li><a href="#liability">Limitations of Liability</a></li>
        </ul>
      </div>

      <div className="terms-content">
        <header className="terms-header">
          <h1>Terms of Service</h1>
          <p className="subtitle">Please read these terms and conditions carefully before using our website.</p>
        </header>

        <div className="terms-body">
          <section id="user-accounts">
            <h2>User Accounts</h2>
            <p>
              To use our website, you must create an account. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
            </p>
          </section>

          <section id="tour-listings">
            <h2>Tour Listings</h2>
            <p>
              We provide tour listings as part of our services. All information provided is subject to change, and we are not responsible for any inaccuracies in the listings.
            </p>
          </section>

          <section id="user-conduct">
            <h2>User Conduct</h2>
            <p>
              Users agree to use our website for lawful purposes only and not to engage in any activity that could harm, disrupt, or interfere with the services provided.
            </p>
          </section>

          <section id="payments">
            <h2>Payments</h2>
            <p>
              All payments for services must be made in full at the time of booking. We accept various payment methods as outlined on our payment page.
            </p>
          </section>

          <section id="cancellations">
            <h2>Cancellations</h2>
            <p>
              Cancellations are allowed according to our cancellation policy. Please refer to our cancellation page for more details on refund eligibility.
            </p>
          </section>

          <section id="disclaimers">
            <h2>Disclaimers</h2>
            <p>
              Our services are provided "as is" without any warranties. We do not guarantee that the website will be available at all times or free of errors.
            </p>
          </section>

          <section id="liability">
            <h2>Limitations of Liability</h2>
            <p>
              We are not liable for any damages or losses arising from the use of our website or services. Users agree to use our website at their own risk.
            </p>
          </section>
        </div>
      </div>
    </div>
    </section>
    <Footer />
    </div>
  );
};

export default TermsOfServicePage;
