import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-white">お問い合わせ</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="お名前"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="メールアドレス"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="メッセージ"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        送信する
      </button>
    </form>
  );
};

export default ContactForm;