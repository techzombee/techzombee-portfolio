import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Techzombee</title>
        <meta name="description" content="Understand how Techzombee collects, uses, and protects your personal information." />
      </Head>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last updated: May 29, 2025</p>

        <p className="mb-4">
          Techzombee respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and protect your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect personal information such as your name, email address, and payment details when you voluntarily provide them.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
        <p className="mb-4">
          We use your information to provide and improve our services, process payments, and communicate with you.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="mb-4">
          We take appropriate technical and organizational measures to secure your data against unauthorized access.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact</h2>
        <p className="mb-4">
          For privacy concerns, email us at privacy@techzombee.io.
        </p>
      </div>
    </>
  );
}