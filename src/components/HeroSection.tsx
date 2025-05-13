"use client";

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            企業のAI活用を変革する「NewGrid AI」
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            全社導入に最適なセキュアAIプラットフォーム
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <span className="mr-2">✓</span>
              <span>情報流出リスクゼロ</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <span className="mr-2">✓</span>
              <span>主要AI統合利用</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <span className="mr-2">✓</span>
              <span>ノーコードエージェント</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/20 p-3 rounded-lg">
              <span>ChatGPT</span>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <span>Claude</span>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <span>Gemini</span>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <span>Perplexity</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1">
              無料相談を申し込む
            </Link>
            <Link href="#features" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition duration-300">
              詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
