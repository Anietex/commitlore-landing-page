'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 md:px-8 border-b-2 border-[#1A1614]/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#1A1614] hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B45309] to-[#D97706] flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="6" r="2.5" fill="currentColor" fillOpacity="0.9"/>
                <circle cx="8" cy="10" r="2.5" fill="currentColor" fillOpacity="0.9"/>
                <circle cx="8" cy="18" r="2.5" fill="currentColor" fillOpacity="0.9"/>
                <circle cx="12" cy="14" r="2.5" fill="currentColor" fillOpacity="0.9"/>
                <path d="M12 8.5 L9.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round"/>
                <path d="M8 12.5 L8 15.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round"/>
                <path d="M10 17 L10.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round"/>
                <path d="M15 8 L18 8 L18 20 L15 20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
                <path d="M16.5 12 L18 12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round"/>
                <path d="M16.5 15 L18 15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-space font-semibold text-base">CommitLore</span>
          </Link>
          <Link href="/" className="text-[#3A2F2A] hover:text-[#1A1614] transition-colors font-medium text-sm">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-space text-4xl md:text-5xl font-bold text-[#1A1614] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#3A2F2A] mb-8">
            Last updated: December 8, 2024
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                By accessing and using CommitLore (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">2. Description of Service</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                CommitLore is a service that transforms your Git commits into engaging content for social media and professional platforms. The Service includes:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Integration with GitHub repositories</li>
                <li>AI-powered content generation from commits</li>
                <li>Content management and scheduling tools</li>
                <li>Publishing to various platforms (LinkedIn, Twitter, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">3. User Accounts</h2>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">3.1 Account Creation</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                To use the Service, you must:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Be at least 13 years of age</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update your information if it changes</li>
              </ul>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">3.2 Account Responsibility</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>All activities that occur under your account</li>
                <li>Maintaining the confidentiality of your password</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">4. Acceptable Use</h2>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">4.1 Permitted Use</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You may use the Service to:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Generate content from your own repositories</li>
                <li>Publish content to platforms where you have authorized access</li>
                <li>Manage and schedule your generated content</li>
              </ul>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">4.2 Prohibited Use</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Post spam, malicious content, or misinformation</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Use the Service to harass, abuse, or harm others</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use automated systems (bots) without permission</li>
                <li>Resell or redistribute the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">5. Intellectual Property</h2>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">5.1 Your Content</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You retain all rights to your repository data and generated content. By using the Service, you grant us a limited license to:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Access your repository data to generate content</li>
                <li>Process and store your data as necessary to provide the Service</li>
                <li>Display your content within the Service</li>
              </ul>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">5.2 Our Service</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                CommitLore and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">6. Payments and Subscriptions</h2>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">6.1 Pricing</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We offer various subscription plans. Prices are subject to change with 30 days notice.
              </p>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">6.2 Payment</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Payments are processed through our payment providers (Stripe, Dodo Payments). You agree to:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Provide accurate billing information</li>
                <li>Pay all fees on time</li>
                <li>Be responsible for any taxes</li>
              </ul>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">6.3 Refunds</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Refunds are handled on a case-by-case basis. Contact support at <a href="mailto:support@commitlore.com" className="text-[#D97706] hover:underline">support@commitlore.com</a> for refund requests.
              </p>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">6.4 Cancellation</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You may cancel your subscription at any time. Your access will continue until the end of the current billing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">7. Third-Party Services</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                The Service integrates with third-party services (GitHub, LinkedIn, Twitter, etc.). Your use of these services is subject to their respective terms and policies. We are not responsible for third-party services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">8. AI-Generated Content</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Content generated by our AI:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Is provided &quot;as is&quot; without warranties</li>
                <li>Should be reviewed before publishing</li>
                <li>May not always be accurate or appropriate</li>
                <li>Is your responsibility once published</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">9. Termination</h2>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">9.1 By You</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You may terminate your account at any time by contacting support or through account settings.
              </p>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">9.2 By Us</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We may suspend or terminate your account if you:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Violate these Terms</li>
                <li>Engage in fraudulent activity</li>
                <li>Fail to pay fees</li>
                <li>Create risks to the Service or other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">10. Disclaimers</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>The Service will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The Service is free of viruses or harmful components</li>
                <li>Results from using the Service will meet your requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">11. Limitation of Liability</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMMITLORE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Our total liability shall not exceed the amount you paid us in the 12 months before the event giving rise to liability, or $100, whichever is greater.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">12. Indemnification</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You agree to indemnify and hold harmless CommitLore and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another</li>
                <li>Content you submit or publish</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">13. Governing Law</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the laws of the jurisdiction in which CommitLore operates, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">14. Dispute Resolution</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Any disputes arising from these Terms or the Service shall first be attempted to be resolved through good faith negotiations. If unresolved, disputes may be subject to binding arbitration or litigation as permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">15. Changes to Terms</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Service. Your continued use after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">16. General Provisions</h2>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">16.1 Entire Agreement</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                These Terms constitute the entire agreement between you and CommitLore regarding the Service.
              </p>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">16.2 Severability</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.
              </p>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">16.3 Waiver</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
              </p>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">16.4 Assignment</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You may not assign or transfer these Terms without our prior written consent. We may assign these Terms at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">17. Contact Us</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="list-none text-[#3A2F2A] space-y-2 mb-4">
                <li><strong>Email:</strong> <a href="mailto:support@commitlore.com" className="text-[#D97706] hover:underline">support@commitlore.com</a></li>
                <li><strong>Website:</strong> <a href="https://commitlore.com" className="text-[#D97706] hover:underline">https://commitlore.com</a></li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 md:px-8 bg-[#FAF8F3] border-t-2 border-[#1A1614]/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm text-[#3A2F2A] font-medium">© 2024 CommitLore. Build in Public Automatically.</span>
        </div>
      </footer>
    </div>
  );
}
