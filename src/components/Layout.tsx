import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              NewGrid AI
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                  >
                    特徴
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                  >
                    料金プラン
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-3">
            <ul className="py-4">
              <li className="py-2">
                <Link
                  href="#features"
                  className="block px-4 text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  特徴
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="#pricing"
                  className="block px-4 text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  料金プラン
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="#faq"
                  className="block px-4 text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="#contact"
                  className="block px-4 text-blue-600 font-medium transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NewGrid AI</h3>
              <p className="text-gray-400">
                企業のAI活用を変革する、セキュアなAIプラットフォーム
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition duration-300">
                    特徴
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition duration-300">
                    料金プラン
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-white transition duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">株式会社APOLLO 1 1</span>
                </li>
                <li className="text-gray-400">
                  <span className="block">〒100-0001</span>
                  <span className="block">東京都千代田区1-1-1</span>
                </li>
                <li className="text-gray-400">
                  <span className="block">info@apollo11.co.jp</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">フォローする</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 株式会社APOLLO 1 1. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
