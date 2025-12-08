'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <p className="text-[#3A2F2A] mb-8">
            Last updated: December 8, 2024
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">1. Introduction</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                CommitLore (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">2. Information We Collect</h2>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">2.1 Information You Provide</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                When you create an account, we collect:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Email address</li>
                <li>GitHub profile information (when you connect via GitHub OAuth)</li>
                <li>Google profile information (when you connect via Google OAuth)</li>
                <li>Payment information (processed securely through our payment providers)</li>
              </ul>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">2.2 GitHub Repository Data</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                When you connect repositories, we access:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Commit history and messages</li>
                <li>Repository metadata (name, description, visibility)</li>
                <li>Branch information</li>
              </ul>

              <h3 className="font-space text-xl font-semibold text-[#1A1614] mb-3">2.3 Automatically Collected Information</h3>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We automatically collect:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (pages visited, features used)</li>
                <li>IP address and approximate location</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">3. How We Use Your Information</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Provide and maintain our service</li>
                <li>Generate content from your commits</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important updates and notifications</li>
                <li>Improve our service and develop new features</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li><strong>Service Providers:</strong> Payment processors (Stripe, Dodo Payments), email services, analytics providers</li>
                <li><strong>AI Services:</strong> OpenAI, Anthropic, or other AI providers to process your commits and generate content</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">5. Data Security</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication (OAuth 2.0)</li>
                <li>Regular security audits</li>
                <li>Access controls and monitoring</li>
              </ul>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">6. Your Rights and Choices</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct your information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing emails</li>
                <li><strong>Revoke Access:</strong> Disconnect GitHub/Google integrations at any time</li>
              </ul>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                To exercise these rights, contact us at <a href="mailto:support@commitlore.com" className="text-[#D97706] hover:underline">support@commitlore.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">7. Data Retention</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We retain your data for as long as your account is active or as needed to provide services. When you delete your account, we will delete or anonymize your data within 30 days, except where we are required to retain it for legal purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">8. Cookies and Tracking</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-[#3A2F2A] space-y-2 mb-4">
                <li>Keep you signed in</li>
                <li>Remember your preferences</li>
                <li>Understand how you use our service</li>
                <li>Improve performance and security</li>
              </ul>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                You can control cookies through your browser settings, but this may affect functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Our service is not intended for users under 13 years of age. We do not knowingly collect information from children under 13. If you believe we have collected information from a child, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">10. International Data Transfers</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">11. Changes to This Policy</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by email or through our service. Your continued use after changes indicates acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">12. Contact Us</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                If you have questions about this Privacy Policy, please contact us:
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
