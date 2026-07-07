"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30">
              <span className="text-black font-black text-2xl">M</span>
            </div>
            <h1 className="text-2xl font-black text-white">Get Your Mahadev Book ID</h1>
            <p className="text-gray-400 text-sm mt-1">Create your account in minutes</p>
          </div>

          {/* WhatsApp Registration CTA */}
          <div className="bg-green-900/30 border border-green-700/50 rounded-xl p-4 mb-6 text-center">
            <p className="text-green-300 text-sm font-semibold mb-3">
              Fastest way to register — Contact us on WhatsApp
            </p>
            <Link
              href="https://wa.me/916026703858"
              id="register-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Register via WhatsApp
            </Link>
          </div>

          <div className="relative flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-500 text-sm">or fill form below</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="reg-name" className="block text-sm font-semibold text-gray-300 mb-2">
                Full Name
              </label>
              <input
                id="reg-name"
                type="text"
                placeholder="Your full name"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="reg-phone" className="block text-sm font-semibold text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                id="reg-phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="reg-password" className="block text-sm font-semibold text-gray-300 mb-2">
                Create Password
              </label>
              <input
                id="reg-password"
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-500"
              />
            </div>
            <button
              id="register-submit-btn"
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition-all duration-300 text-lg mt-2"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Already have an ID?{" "}
              <Link href="/login" className="text-yellow-400 font-semibold hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
