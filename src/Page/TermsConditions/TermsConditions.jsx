import React from "react";

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">Terms & Conditions</h1>
      </div>

      <div className="space-y-8 leading-relaxed">
        {/* Intro */}
        <section>
          <p>
            These Terms & Conditions govern your access to and use of our
            application. By using our services, you agree to be bound by these
            terms. If you do not agree with any part of the terms, you must not
            use the application.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Eligibility</h2>
          <p>
            By accessing this application, you confirm that you are at least 18
            years old or using the platform under legal guardian supervision.
          </p>
        </section>

        {/* Account Responsibilities */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Account Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>You agree to provide accurate and complete information.</li>
            <li>You are fully responsible for all activities under your account.</li>
          </ul>
        </section>

        {/* Acceptable Use */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Acceptable Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do not use the service for illegal or unauthorized purposes.</li>
            <li>Do not attempt to hack, exploit, or disrupt the platform.</li>
            <li>Do not upload harmful, abusive, or misleading content.</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Intellectual Property
          </h2>
          <p>
            All content, logos, designs, and code on this platform are the
            property of the application owner unless otherwise stated. You may
            not copy, reproduce, or distribute any content without permission.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Account Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your account without
            prior notice if you violate these terms or misuse the service.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p>
            We are not liable for any direct, indirect, incidental, or
            consequential damages arising from your use of the platform.
          </p>
        </section>

        {/* Modifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Modifications to Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms & Conditions at
            any time. Continued use of the application constitutes acceptance of
            the updated terms.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
          <p>
            These terms shall be governed and interpreted in accordance with the
            laws of Bangladesh.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us at:
          </p>
          <p className="font-semibold mt-2">
            📧 Email: sujanckz926@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
