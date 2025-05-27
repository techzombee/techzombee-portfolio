export default function StripeSuccess() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <div className="text-center text-green-600 text-2xl font-semibold">
        ✅ Payment successful!
        <p className="mt-4 text-base text-gray-700">
          Thank you for your purchase. Your PRO access is now active.
        </p>
      </div>
    </div>
  )
}