export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-10">
      <h1 className="text-4xl font-black text-gray-900 mb-8 border-b-4 border-green-400 pb-2 inline-block">
        Terms of Service
      </h1>
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Welcome to Crave & Cook. By using our platform, you agree to the following terms.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Acceptable Use</h2>
        <p>
          Crave & Cook is intended for personal, non-commercial use in recipe discovery. You may not use our data for automated scraping or mass reproduction without permission.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Accounts</h2>
        <p>
          You are responsible for maintaining the security of your Clerk-managed account. We are not liable for any loss resulting from unauthorized access.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Recipe Content</h2>
        <p>
          All recipes are provided via the Spoonacular API. While we strive for accuracy, Crave & Cook is not responsible for any inaccuracies or issues arising from following these recipes.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Changes</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the platform indicates acceptance of any changes.
        </p>
      </div>
    </div>
  );
}
