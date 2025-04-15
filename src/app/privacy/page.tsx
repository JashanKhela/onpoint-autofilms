// app/privacy/page.tsx (for app router) or pages/privacy.tsx (for pages router)
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-neon-teal mb-6">Privacy Policy</h1>
        <p className="text-zinc-400 mb-8">
          This Privacy Policy describes how On Point Auto Films Ltd. collects, uses, and protects your personal information.
        </p>

        <div className="space-y-8 text-zinc-300 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">1. Introduction</h2>
            <p>
              Welcome to <span className="text-neon-purple">https://onpointautofilms.ca</span> (the “Site”). This statement governs our privacy policies with respect to users of the Site, both those visiting and those using services provided by On Point Auto Films Ltd. (“Authorized Customers”).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">2. Personally Identifiable Information</h2>
            <p>
              "Personally Identifiable Information" refers to any data that can be used to identify or contact a specific individual, including but not limited to name, address, email, and credit card info. Anonymous data and demographics not linked to individuals are not included.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">3. What Information Is Collected?</h2>
            <p>
              We may collect basic user profile info, and from Authorized Customers: name, address, phone, email, business type and size, and advertising preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">4. Third-Party Data Collection</h2>
            <p>
              Third-party vendors (e.g. credit card processors) may also collect data. We do not control how they use this information, but we encourage them to disclose their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">5. Use of Information</h2>
            <p>
              Information is used to customize the Site, offer services, and communicate with users. We may contact Visitors and Customers regarding offers, updates, or inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">6. Sharing Information</h2>
            <p>
              We may share Personally Identifiable Information with partners or other Authorized Customers. Aggregated data may be shared for analytics. Opt-out options are available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">7. Storage & Security</h2>
            <p>
              All data is securely stored and access is limited to authorized staff only. Sensitive info is encrypted. While we use strong security practices, we cannot guarantee against all breaches.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">8. Visitor Choices</h2>
            <p>
              Visitors can opt out of communication and correct or delete their information by contacting us through the site’s contact form or email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">9. Cookies</h2>
            <p>
              Cookies help us track preferences and provide a better experience. We use them for both customization and security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">10. Legal Disclosures</h2>
            <p>
              We may disclose information to comply with legal requirements or protect our rights and safety of our users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">11. Linked Sites</h2>
            <p>
              Our site may link to external websites. Please review their privacy policies as they may differ from ours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">12. Policy Changes</h2>
            <p>
              Updates to this policy will be posted here. If significant changes are made, we’ll notify users before implementation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
