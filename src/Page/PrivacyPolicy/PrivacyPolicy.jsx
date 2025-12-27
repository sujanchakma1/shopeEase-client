import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-3">Privacy Policy</h1>
        <p className="mt-2 text-gray-500">
          Your privacy is important to <span className="font-semibold">ShopEase</span>. This
          policy explains how we collect, use, and safeguard your information.
        </p>
      </div>

      <div className="space-y-10 leading-relaxed">
        {/* Information Collection */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number,
              profile photo (if provided).
            </li>
            <li>
              <strong>Account Information:</strong> Login credentials when signing up
              using email or Google authentication.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, actions taken, and interaction
              data to improve services.
            </li>
          </ul>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To create and manage your account securely</li>
            <li>To operate, maintain, and improve our services</li>
            <li>To enhance user experience and platform performance</li>
            <li>To communicate updates, support messages, or security notices</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Sharing & Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties.
            Data may only be shared with trusted services (like authentication or
            payment providers) strictly for functionality purposes.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            information. However, no transmission over the internet can be 100%
            secure.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience.
            You can manage cookies via your browser settings.
          </p>
        </section>

        {/* User Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p>
            You can access, update, or delete your personal information at any time.
            Contact us for assistance.
          </p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
          <p>
            ShopEase may update this Privacy Policy periodically. Any changes will
            appear on this page with an updated revision date.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, reach out to us:
          </p>
          <p className="mt-2 font-semibold text-primary">
            📧 Email: sujanckz926@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
