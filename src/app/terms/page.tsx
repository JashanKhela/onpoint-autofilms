// app/terms/page.tsx (for App Router) or pages/terms.tsx (for Pages Router)
import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-neon-teal mb-6">Terms of Service</h1>
        <p className="text-zinc-400 mb-8">Effective as of {new Date().getFullYear()}</p>

        <div className="space-y-8 text-zinc-300 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">1. Introduction</h2>
            <p>
              By accessing or interacting with <span className="text-neon-purple">https://onpointautofilms.ca</span>, you agree to the Terms of Service and Privacy Policy outlined herein. If you do not accept these terms, you are not permitted to access or use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">2. Acceptance of Terms</h2>
            <p>
              Access to this website is conditional upon reading and accepting these Terms of Use and our Privacy Policy. Your continued use constitutes agreement to all terms, which may be updated without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">3. Use of Website Information</h2>
            <p>
              Visitors are prohibited from using, copying, distributing, or republishing any part of this site’s content without express written consent. Unauthorized use may result in legal action and damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">4. Ownership & Intellectual Property</h2>
            <p>
              All content is the property of On Point Auto Films or licensed appropriately. You have no ownership rights to the content and may not use it for commercial or non-commercial purposes without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">5. Hyperlinking & Framing</h2>
            <p>
              Linking to this site or referencing its materials is prohibited without written consent. Violators agree to liquidated damages of $100,000 CAD plus costs and actual damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">6. Disclaimer of Accuracy</h2>
            <p>
              We do not guarantee the accuracy or reliability of the content on this site. Use of the information is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">7. Security & Risks</h2>
            <p>
              Use of this site, including downloads, is at your own risk. We are not responsible for any damage to your computer or data resulting from accessing or interacting with this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">8. Limitation of Liability</h2>
            <p>
              By using this site, you waive any right to claims of damages for any harm resulting from interactions with the site or its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">9. Indemnification</h2>
            <p>
              You agree to indemnify On Point Auto Films for any costs arising from damages caused by your use of the site or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">10. Submissions</h2>
            <p>
              Any communications submitted through this site are considered property of On Point Auto Films and may be used for any commercial purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">11. Dispute Resolution</h2>
            <p>
              All disputes will be resolved through binding arbitration in accordance with the Canadian Arbitration Association. You waive your right to court proceedings or jury trials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">12. Jurisdiction</h2>
            <p>
              Legal matters shall be governed by the laws of British Columbia, Canada. All disputes shall be handled in the nearest court to Kelowna, BC.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neon-pink mb-2">13. Contact Information</h2>
            <p>
              On Point Auto Films<br />
              Location: Kelowna, British Columbia, Canada<br />
              Contact: via our <a href="/contact" className="text-neon-purple underline">Contact Form</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
