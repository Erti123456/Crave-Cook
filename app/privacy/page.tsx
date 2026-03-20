export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-10">
      <h1 className="text-4xl font-black text-gray-900 mb-8 border-b-4 border-green-400 pb-2 inline-block">
        Privacy Policy
      </h1>
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          At Crave & Cook, we take your privacy seriously. This policy explains how we collect and use your data.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Information We Collect</h2>
        <p>
          We use Clerk for authentication. When you sign in, we receive your email and name to personalize your experience. We also store your favorited recipes in our database via Prisma.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">How We Use Your Data</h2>
        <p>
          Your data is used strictly to provide you with a personalized recipe discovery experience. We do not sell your data to third parties.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Cookies</h2>
        <p>
          We use essential cookies via Clerk to keep you logged in. You can manage cookie settings in your browser at any time.
        </p>
      </div>
    </div>
  );
}
