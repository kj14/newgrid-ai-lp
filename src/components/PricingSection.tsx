import React from 'react';
import Link from 'next/link';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">料金プラン・特別キャンペーン情報</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            企業規模や利用ニーズに合わせた柔軟な料金プランをご用意しています。
            今なら期間限定の特別キャンペーン実施中！
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* スタータープラン */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">スタータープラン</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">¥20,000</span>
                <span className="text-gray-500 ml-2">/月</span>
              </div>
              <p className="text-gray-600 mb-6">中小企業や部門単位での導入に最適</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ユーザー数 最大20名</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>主要AI統合（3種類まで）</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>基本セキュリティ機能</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>プロンプトライブラリ基本機能</span>
                </li>
              </ul>
              <Link href="#contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                お問い合わせ
              </Link>
            </div>
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-gray-600">今なら初期費用無料</p>
            </div>
          </div>

          {/* ビジネスプラン */}
          <div className="bg-white border-2 border-blue-500 rounded-xl shadow-xl overflow-hidden transform scale-105 z-10 transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-blue-500 text-white py-2 text-center font-semibold">
              人気プラン
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">ビジネスプラン</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">¥50,000</span>
                <span className="text-gray-500 ml-2">/月</span>
              </div>
              <p className="text-gray-600 mb-6">中堅・大企業の全社導入に最適</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ユーザー数 最大100名</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>主要AI統合（全種類）</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>高度なセキュリティ機能</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ノーコードエージェント機能</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>プロンプトライブラリ高度機能</span>
                </li>
              </ul>
              <Link href="#contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                お問い合わせ
              </Link>
            </div>
            <div className="bg-blue-50 p-4 text-center">
              <p className="text-blue-600 font-semibold">今なら3ヶ月20%オフ</p>
            </div>
          </div>

          {/* エンタープライズプラン */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">エンタープライズ</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">要問合せ</span>
              </div>
              <p className="text-gray-600 mb-6">大規模企業・特殊要件に対応</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>無制限ユーザー</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>カスタムAI連携</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>オンプレミス対応可</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>専任サポート</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>API連携・カスタム開発</span>
                </li>
              </ul>
              <Link href="#contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                お問い合わせ
              </Link>
            </div>
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-gray-600">カスタムプランのご相談も可能</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">※ 表示価格は税抜きです。別途消費税がかかります。</p>
          <p className="text-blue-600 font-semibold">
            キャンペーン期間: 2025年6月末まで
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
