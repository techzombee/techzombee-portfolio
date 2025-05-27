export default function StripeCancel() {
  return (
    <div className="flex justify-center items-center h-screen bg-red-50">
      <div className="text-center text-red-500 text-2xl font-semibold">
        ❌ Payment canceled.
        <p className="mt-4 text-base text-gray-700">
          You can try again anytime. No charges were made.
        </p>
      </div>
    </div>
  )
}