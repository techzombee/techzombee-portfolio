import Head from 'next/head';

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy - Techzombee</title>
        <meta name="description" content="Read Techzombee's refund policy regarding digital product purchases." />
      </Head>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
        <p className="mb-4">Last updated: May 29, 2025</p>

        <p className="mb-4">
          All sales of digital products on Techzombee are final. We do not offer refunds once access has been granted or a product has been downloaded.
        </p>

        <p className="mb-4">
          If you encounter technical issues, please contact us at support@techzombee.io and we’ll do our best to resolve the problem.
        </p>
      </div>
    </>
  );
}