export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-10 text-center">
      <h1 className="text-4xl font-black text-gray-900 mb-8 border-b-4 border-green-400 pb-2 inline-block">
        Contact Us
      </h1>
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Have questions or feedback? We’d love to hear from you.
        </p>
        <div className="bg-green-100 p-8 rounded-3xl shadow-sm inline-block mt-8">
          <p className="text-2xl font-bold text-green-950 mb-4">Get in Touch</p>
          <p className="text-gray-700">Email: <span className="font-bold">support@craveandcook.com</span></p>
          <p className="text-gray-700">Twitter: <span className="font-bold">@crave_cook</span></p>
        </div>
        <p className="mt-8">
          We aim to respond to all inquiries within 48 hours.
        </p>
      </div>
    </div>
  );
}
