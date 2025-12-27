import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-3">Terms & Conditions</h1>
        <p className="mt-2 text-gray-500">
          Welcome to <span className="font-semibold">ShopEase</span>. Please read these
          Terms and Conditions carefully before using our website or services.
        </p>
      </div>

      <div className="space-y-10 leading-relaxed">
        {/* Acceptance */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using ShopEase services, you agree to comply with these
            Terms and Conditions. If you disagree, please do not use our services.
          </p>
        </section>

        {/* Account Responsibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Account Responsibility</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their
            account information, including email, password, and any activity under
            their account.
          </p>
        </section>

        {/* Use of Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Use of Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use our services only for lawful purposes.</li>
            <li>
              Do not attempt to interfere with, disrupt, or exploit any part of the
              website or services.
            </li>
            <li>
              Respect intellectual property rights; do not reproduce or distribute
              content without permission.
            </li>
          </ul>
        </section>

        {/* Products & Pricing */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Products & Pricing</h2>
          <p>
            Product availability and prices are subject to change without prior
            notice. ShopEase is not responsible for typographical errors or
            inaccuracies.
          </p>
        </section>

        {/* Orders & Payments */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Orders & Payments</h2>
          <p>
            All orders are subject to acceptance and availability. Payment must be
            completed for orders to be processed. ShopEase reserves the right to
            cancel or refuse orders in case of discrepancies.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p>
            ShopEase is not liable for any direct, indirect, incidental, or
            consequential damages arising from the use or inability to use our
            services.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
          <p>
            ShopEase may suspend or terminate access to the services for users who
            violate these Terms and Conditions or for any reason deemed necessary.
          </p>
        </section>

        {/* Modifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms</h2>
          <p>
            We may update these Terms and Conditions periodically. Users will be
            notified of changes via the website. Continued use indicates acceptance
            of revised terms.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p>
            If you have questions regarding these Terms and Conditions, please
            contact us at:
          </p>
          <p className="mt-2 font-semibold text-primary">
            📧 Email: sujanckz926@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
