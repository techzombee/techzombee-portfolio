import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Techzombee</title>
        <meta name="description" content="Review the terms and conditions for using Techzombee services." />
      </Head>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">Last updated: May 29, 2025</p>

        <p className="mb-4">
          Welcome to Techzombee. These terms and conditions outline the rules and regulations for the use of our website and services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing this website, you agree to be bound by these terms and all applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
        <p className="mb-4">
          All content and materials on Techzombee are owned by us and protected by applicable copyright and trademark law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Use Restrictions</h2>
        <p className="mb-4">
          You may not use our service for any illegal or unauthorized purpose.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your access if you violate any of these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
        <p className="mb-4">
          Questions about the Terms? Contact us at support@techzombee.io.
        </p>
      </div>
    </>
  );
}