"use client";

import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'NewGrid AIはどのようなセキュリティ対策を行っていますか？',
      answer: 'NewGrid AIでは、AI学習抑止機能によるデータ流出防止、IP制限によるアクセス制御、ゼロトラスト設計など、企業の重要情報を守るための多層的なセキュリティ対策を実施しています。また、定期的なセキュリティ監査や脆弱性診断も行っています。',
    },
    {
      question: '利用できるAIモデルはどのようなものがありますか？',
      answer: 'ChatGPT（OpenAI）、Claude（Anthropic）、Gemini（Google）、Perplexity AIなど、主要なAIモデルを全て利用できます。ビジネスプラン以上では全てのAIモデルが利用可能で、用途に応じて最適なAIを選択できます。',
    },
    {
      question: 'ノーコードエージェントとは何ですか？',
      answer: 'プログラミングの知識がなくても、直感的なインターフェースを使って業務自動化AIを構築できる機能です。データ収集、分析、レポート作成など、複雑な業務フローも自動化でき、業務効率を大幅に向上させることができます。',
    },
    {
      question: '導入にはどのくらいの期間がかかりますか？',
      answer: '標準的なプランであれば、お申し込みから1週間程度でご利用開始いただけます。エンタープライズプランなど、カスタマイズが必要な場合は、要件に応じて2〜4週間程度かかる場合があります。',
    },
    {
      question: '社内の既存システムと連携できますか？',
      answer: 'はい、API連携を通じて既存の社内システムと連携可能です。ビジネスプラン以上では標準的なAPI連携をサポートしており、エンタープライズプランではカスタム連携開発も対応しています。',
    },
    {
      question: 'トライアルや無料デモはありますか？',
      answer: 'はい、無料のオンラインデモセッションをご用意しています。また、一部機能を限定した14日間の無料トライアルもご利用いただけます。お問い合わせフォームからお申し込みください。',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">よくあるご質問（FAQ）</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NewGrid AIに関するよくあるご質問とその回答をまとめました。
            さらに詳しい情報が必要な場合は、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 bg-white rounded-xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
