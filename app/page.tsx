import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/project2.jpg)" }}
      >
        <div className="pl-10 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold hidden md:block">
            Hello
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500">
              {" "}Webエンジニア
            </span>
          </h1>
          <h1 className="text-[40px] text-white font-semibold md:hidden">
            Hello<br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500">
              {" "}Webエンジニア
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            はじめまして。
          </p>
          <p className="text-gray-200 hidden md:block">
            サンプルを作成しています。
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              詳しく
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              仕事概要（実績）
            </Link>
            <Link
              href="/contact"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-20 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          詳しく
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          仕事概要
        </Link>
        <Link
          href="/contact"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          お問い合わせ
        </Link>
      </div>
    </main>
  );
}
