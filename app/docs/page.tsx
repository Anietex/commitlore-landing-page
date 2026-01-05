'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Docs() {
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
            Documentation
          </h1>
          <p className="text-[#3A2F2A] mb-8 text-lg">
            Learn how to use CommitLore&apos;s <code className="bg-[#1A1614] text-[#FAF8F3] px-2 py-1 rounded text-sm font-mono">/lore</code> command to automatically generate social media content from your commits.
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Quick Start */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Quick Start</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Add <code className="bg-[#1A1614] text-[#FAF8F3] px-2 py-1 rounded text-sm font-mono">/lore</code> anywhere in your commit message to trigger content generation:
              </p>
              <div className="bg-[#1A1614] rounded-lg p-4 mb-4">
                <code className="text-[#FAF8F3] font-mono text-sm">
                  git commit -m &quot;feat: add dark mode support /lore&quot;
                </code>
              </div>
              <p className="text-[#3A2F2A] leading-relaxed">
                CommitLore will automatically generate content for all your connected platforms (Twitter, LinkedIn, WordPress, Dev.to).
              </p>
            </section>

            {/* Command Syntax */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Command Syntax</h2>
              <div className="bg-[#1A1614] rounded-lg p-4 mb-4">
                <code className="text-[#FAF8F3] font-mono text-sm">
                  /lore[:platforms] [--tone=value] [--personality=value] [--skip-files=true]
                </code>
              </div>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                All parameters are optional. The command can appear anywhere in your commit message.
              </p>
            </section>

            {/* Platforms */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Supported Platforms</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Specify one or more platforms to generate content for specific channels:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1A1614]/5">
                      <th className="text-left p-3 font-space font-semibold text-[#1A1614] border border-[#1A1614]/10">Platform</th>
                      <th className="text-left p-3 font-space font-semibold text-[#1A1614] border border-[#1A1614]/10">Aliases</th>
                      <th className="text-left p-3 font-space font-semibold text-[#1A1614] border border-[#1A1614]/10">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10 font-mono">twitter</td>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10 font-mono">tw, x</td>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10">Generate tweet (280 characters)</td>
                    </tr>
                    <tr className="bg-[#1A1614]/5">
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10 font-mono">linkedin</td>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10 font-mono">li</td>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10">Generate LinkedIn post</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10 font-mono">wordpress</td>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10 font-mono">wp</td>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10">Generate WordPress blog post</td>
                    </tr>
                    <tr className="bg-[#1A1614]/5">
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10 font-mono">devto</td>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10 font-mono">dev</td>
                      <td className="p-3 text-[#3A2F2A] border border-[#1A1614]/10">Generate Dev.to article</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#3A2F2A] leading-relaxed text-sm">
                <strong>Note:</strong> When no platforms are specified, content is generated for all connected platforms.
              </p>
            </section>

            {/* Tone Options */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Tone Options</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Control the voice and style of your generated content:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">casual</h4>
                  <p className="text-[#3A2F2A] text-sm">Relaxed, conversational tone. Great for Twitter.</p>
                </div>
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">professional</h4>
                  <p className="text-[#3A2F2A] text-sm">Polished, business-appropriate. Ideal for LinkedIn.</p>
                </div>
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">technical</h4>
                  <p className="text-[#3A2F2A] text-sm">Detailed, precise language for developer audiences.</p>
                </div>
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">enthusiastic</h4>
                  <p className="text-[#3A2F2A] text-sm">Energetic and excited. Perfect for big announcements.</p>
                </div>
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">friendly</h4>
                  <p className="text-[#3A2F2A] text-sm">Warm and approachable. Good for community building.</p>
                </div>
              </div>
            </section>

            {/* Personality Options */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Personality Options</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                Define the character of your content:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">witty</h4>
                  <p className="text-[#3A2F2A] text-sm">Clever and humorous. Adds personality to updates.</p>
                </div>
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">serious</h4>
                  <p className="text-[#3A2F2A] text-sm">Straightforward and factual. No-nonsense approach.</p>
                </div>
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">friendly</h4>
                  <p className="text-[#3A2F2A] text-sm">Warm and personable. Builds connection with audience.</p>
                </div>
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">technical</h4>
                  <p className="text-[#3A2F2A] text-sm">Detail-oriented and precise. For technical audiences.</p>
                </div>
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">storyteller</h4>
                  <p className="text-[#3A2F2A] text-sm">Narrative-driven. Weaves updates into engaging stories.</p>
                </div>
              </div>
            </section>

            {/* Additional Options */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Additional Options</h2>
              <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4 mb-4">
                <h4 className="font-space font-semibold text-[#1A1614] mb-2">--skip-files=true</h4>
                <p className="text-[#3A2F2A] text-sm mb-2">
                  Skip file contents when generating content. Useful for:
                </p>
                <ul className="list-disc pl-5 text-[#3A2F2A] text-sm space-y-1">
                  <li>Large commits with many file changes</li>
                  <li>When you only want to use the commit message</li>
                  <li>Privacy-sensitive changes</li>
                </ul>
              </div>
            </section>

            {/* Examples */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Examples</h2>

              <div className="space-y-6">
                {/* Example 1 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Basic Usage</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Generate content for all platforms:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm">
                      feat: add user authentication /lore
                    </code>
                  </div>
                </div>

                {/* Example 2 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Single Platform</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Generate only a tweet:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm">
                      fix: resolve memory leak in dashboard /lore:twitter
                    </code>
                  </div>
                </div>

                {/* Example 3 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Multiple Platforms</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Generate for Twitter and LinkedIn:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm">
                      feat: launch v2.0 with new dashboard /lore:tw,li
                    </code>
                  </div>
                </div>

                {/* Example 4 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">With Tone</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Professional tone for LinkedIn:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm">
                      feat: implement enterprise SSO /lore:linkedin --tone=professional
                    </code>
                  </div>
                </div>

                {/* Example 5 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">With Personality</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Witty tweet for fun updates:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm">
                      fix: finally squash that pesky bug /lore:x --personality=witty
                    </code>
                  </div>
                </div>

                {/* Example 6 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Full Configuration</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Combine platforms with tone and personality:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm whitespace-pre-wrap">
                      feat: add real-time notifications /lore:twitter,linkedin --tone=enthusiastic --personality=friendly
                    </code>
                  </div>
                </div>

                {/* Example 7 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Skip File Contents</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Generate based on message only:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm">
                      refactor: restructure entire codebase /lore --skip-files=true
                    </code>
                  </div>
                </div>

                {/* Example 8 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Technical Blog Post</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Generate a detailed Dev.to article:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm whitespace-pre-wrap">
                      feat: implement custom caching layer /lore:devto --tone=technical --personality=technical
                    </code>
                  </div>
                </div>

                {/* Example 9 */}
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">In Commit Body</h4>
                  <p className="text-[#3A2F2A] text-sm mb-2">Place command in the commit body:</p>
                  <div className="bg-[#1A1614] rounded p-3">
                    <code className="text-[#FAF8F3] font-mono text-sm whitespace-pre-wrap">{`feat: add payment integration

Implemented Stripe checkout flow with:
- Subscription management
- Invoice generation
- Webhook handling

/lore:linkedin,wordpress --tone=professional`}</code>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Best Practices</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Do
                  </h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Write descriptive commit messages</li>
                    <li>Match tone to platform audience</li>
                    <li>Use platform aliases for shorter commands</li>
                    <li>Skip files for large refactors</li>
                    <li>Use storyteller for milestone commits</li>
                    <li>Review generated content before publishing</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Don&apos;t
                  </h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Use /lore for every commit</li>
                    <li>Include sensitive data in messages</li>
                    <li>Forget to connect platforms first</li>
                    <li>Mix incompatible tone + personality</li>
                    <li>Add /lore to merge commits</li>
                    <li>Use for work-in-progress commits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#B45309] to-[#D97706] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-space font-semibold text-[#1A1614]">Push your commit</h4>
                    <p className="text-[#3A2F2A] text-sm">Include /lore in your commit message and push to GitHub.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#B45309] to-[#D97706] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-space font-semibold text-[#1A1614]">Webhook triggers</h4>
                    <p className="text-[#3A2F2A] text-sm">CommitLore receives the webhook and parses your /lore command.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#B45309] to-[#D97706] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-space font-semibold text-[#1A1614]">AI generates content</h4>
                    <p className="text-[#3A2F2A] text-sm">Our AI analyzes your commit and generates platform-optimized content.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#B45309] to-[#D97706] rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-space font-semibold text-[#1A1614]">Review in drafts</h4>
                    <p className="text-[#3A2F2A] text-sm">Content appears in your dashboard drafts, ready for review and publishing.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">What if I forget to add /lore?</h4>
                  <p className="text-[#3A2F2A] text-sm">
                    No content will be generated. You can manually create content from your dashboard by selecting commits.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Can I use /lore in amended commits?</h4>
                  <p className="text-[#3A2F2A] text-sm">
                    Yes, but only if you force push. The webhook triggers on push events, so the amended commit with /lore will be processed.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Does the /lore command appear in my published content?</h4>
                  <p className="text-[#3A2F2A] text-sm">
                    No, the command is automatically stripped from your commit message before content generation.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">How long does content generation take?</h4>
                  <p className="text-[#3A2F2A] text-sm">
                    Usually 10-30 seconds depending on the number of platforms and complexity of the commit.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#1A1614]/10 rounded-lg p-4">
                  <h4 className="font-space font-semibold text-[#1A1614] mb-2">Does it count against my plan limits?</h4>
                  <p className="text-[#3A2F2A] text-sm">
                    Yes, each commit with /lore counts as one generation toward your monthly limit.
                  </p>
                </div>
              </div>
            </section>

            {/* Need Help */}
            <section className="mb-8">
              <h2 className="font-space text-2xl font-bold text-[#1A1614] mb-4">Need Help?</h2>
              <p className="text-[#3A2F2A] leading-relaxed mb-4">
                If you have questions or need assistance, we&apos;re here to help:
              </p>
              <ul className="list-none text-[#3A2F2A] space-y-2">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@commitlore.com" className="text-[#D97706] hover:underline">
                    support@commitlore.com
                  </a>
                </li>
                <li>
                  <strong>Dashboard:</strong>{' '}
                  <a href="https://app.commitlore.com" className="text-[#D97706] hover:underline">
                    app.commitlore.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 md:px-8 bg-[#FAF8F3] border-t-2 border-[#1A1614]/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm text-[#3A2F2A] font-medium">© 2024 CommitLore. Build in Public Effortlessly.</span>
        </div>
      </footer>
    </div>
  );
}
