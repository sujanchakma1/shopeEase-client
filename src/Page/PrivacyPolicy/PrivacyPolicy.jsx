import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8 leading-relaxed">
        {/* Intro */}
        <section>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit or use our application. Please read this policy carefully.
          </p>
        </section>

        {/* Information Collection */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, profile photo (if provided).
            </li>
            <li>
              <strong>Account Information:</strong> Login details when you sign
              up using email or Google authentication.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, actions taken, and
              interaction data to improve our services.
            </li>
          </ul>
        </section>

        {/* How We Use */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To create and manage your account</li>
            <li>To provide, operate, and maintain our services</li>
            <li>To improve user experience and platform performance</li>
            <li>To communicate updates, support, or security notices</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Data Sharing & Disclosure
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. Your data may only be shared with trusted services (such as
            authentication or payment providers) strictly for application
            functionality.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p>
            We use industry-standard security measures to protect your personal
            information. However, no method of transmission over the Internet
            is 100% secure.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
          <p>
            We may use cookies and similar technologies to enhance your
            experience. You can choose to disable cookies through your browser
            settings.
          </p>
        </section>

        {/* User Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information at any time. If you wish to do so, please contact us.
          </p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="font-semibold mt-2">
            📧 Email: sujanckz926@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
