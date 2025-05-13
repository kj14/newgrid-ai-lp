"use client";

import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: '情報流出リスクを根本対策',
      subtitle: '万全のセキュリティ設計',
      description: 'AI学習抑止機能、IP制限、ゼロトラスト対応など、企業の重要情報を守る強固なセキュリティを実現します。',
      icon: '🔒',
    },
    {
      title: '主要AIモデルを一括利用',
      subtitle: 'コスト削減と柔軟な使い分け',
      description: 'ChatGPT、Claude、Gemini、Perplexityなど主要AIを一括契約。用途に応じた最適なAIを選択できます。',
      icon: '🤖',
    },
    {
      title: 'プロンプトライブラリ',
      subtitle: '社内ノウハウの共有と活用',
      description: '効果的なプロンプトを社内で共有・検索・カスタマイズ。AIの活用ノウハウを組織全体で蓄積できます。',
      icon: '📚',
    },
    {
      title: 'ノーコードエージェント',
      subtitle: '業務自動化を簡単に実現',
      description: 'プログラミング不要でAIエージェントを構築。複雑な業務フローも自動化し、生産性を劇的に向上させます。',
      icon: '⚙️',
    },
    {
      title: '文脈継承＆AI間連携',
      subtitle: '複雑なタスクも効率的に',
      description: '会話の文脈を保持し、複数のAIを連携させることで、複雑な業務も効率的に処理できます。',
      icon: '🔄',
    },
    {
      title: 'eラーニングで定着支援',
      subtitle: '全社的なAI活用を促進',
      description: 'ステップアップ式のeラーニングで、社員のAIリテラシーを向上。全社的なAI活用を促進します。',
      icon: '🎓',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI活用の課題を、NewGrid AIがすべて解決</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            企業のAI活用における様々な課題を解決し、安全かつ効率的なAI活用環境を提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-600 font-medium mb-4">{feature.subtitle}</p>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
