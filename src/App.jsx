import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import {
  AiFillEnvironment,
  AiFillPhone,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { specialSkills, whatICanDos } from './utils/work';
import ProfileModal from './components/ProfileModal';
import { TopProfile } from './utils/profile';
import { CommentPrice } from './utils/price';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isJapanese, setIsJapanese] = useState(true);
  const Profile = isJapanese ? TopProfile.japanese : TopProfile.english;
  const Price = isJapanese ? CommentPrice.japanese : CommentPrice.english;

  const onClickOpenModal = () => {
    setIsOpen(true);
  };
  const onClickCloseModal = () => {
    setIsOpen(false);
  };
  const onChangeText = () => {
    setIsJapanese(!isJapanese);
  };
  return (
    <main className="px-8 md:px-20 lg:px-40 max-w-screen-2xl mx-auto">
      <Navbar isJapanese={isJapanese} onChangeText={onChangeText} />

      <section
        id="home"
        className="min-h-screen text-center mt-4 flex flex-col justify-center"
      >
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2 mt-20">
          <img src="/avatar.jpg" layout="fill" alt="profileImage" />
        </div>
        <h1 className="text-3xl md:text-5xl font-medium text-teal-500">
          田久保竜馬
        </h1>
        <h1 className="text-2xl md:text-3xl font-medium text-teal-500">
          TAKUBO RYOMA
        </h1>
        <div className="mx-auto mt-2">
          <button
            className="block px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md text-white"
            type="button"
            onClick={onClickOpenModal}
          >
            {isJapanese ? 'プロフィール' : 'Profile'}
          </button>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-md py-1 text-gray-800 md:text-xl mt-1">
            {Profile.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="text-5xl py-4 flex justify-center gap-16 text-gray-600">
          <a href="https://twitter.com/tdoragon18">
            <AiFillTwitterCircle />
          </a>
        </div>
      </section>

      <section id="work" className="mt-10">
        <h1 className="text-xl font-medium font-bold">
          得意なこと & できること
        </h1>
        <p className="mt-1 text-md text-gray-500">
          Special skill & What I can do
        </p>

        <div className="flex rounded shadow-md flex-col md:flex-row px-2 py-4">
          <div className="pl-4 mt-2 md:w-4/6">
            <p className="font-bold">得意なこと</p>
            <p className="text-gray-500">Special skill</p>
            <ul className="list-disc pl-4">
              {specialSkills.map((sS) => (
                <li key={sS.id}>{isJapanese ? sS.title : sS.englishTitle}</li>
              ))}
            </ul>
          </div>
          <div className="pl-4 mt-2 md:w-3/6">
            <p className="font-bold">できること</p>
            <p className="text-gray-500">What I can do</p>
            <ul className="list-disc pl-4">
              {whatICanDos.map((d) => (
                <li key={d.id}>{isJapanese ? d.title : d.englishTitle}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-10">
        <h1 className="text-xl font-medium">お問い合わせ & ご依頼</h1>
        <p className="text-gray-500">Contact Me</p>
        <div className="flex rounded shadow-md flex-col px-2 py-4">
          <p className="">
            LINE公式に登録して頂き、依頼してください。
            <br />
            相談だけでも構いませんので、お気軽に問い合わせ頂けたらと思います！
          </p>
          <div className="m-auto my-2 flex flex-row justify-around">
            <a href="https://lin.ee/AAls4Qg" className="my-auto">
              <img
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                alt="友だち追加"
                height="36"
                border="0"
              />
            </a>
            <img
              src="https://qr-official.line.me/gs/M_996cywkp_GW.png"
              width="30%"
              alt="友だち追加"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="mt-10">
        <h1 className="text-xl font-medium">料金</h1>
        <p className="text-gray-500">Price</p>
        <div className="flex rounded shadow-md flex-col px-2 py-4">
          <p className="">
            <span className="font-bold">初回利用時、1時間無料!</span>
            <br />
            ※1時間のみの利用でも使用可能です。
          </p>
          <p className="mt-3">
            {Price.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </section>

      <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
        <div className="text-white md:text-center">
          <h1 className="font-medium text-lg">Contact Me</h1>
          <p>Wanna talk anything?</p>

          <ul className="md:flex justify-center gap-4">
            <li className="flex items-center gap-2">
              <AiFillEnvironment />
              <p>千葉県市川市湊</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillPhone />
              <p>080-5283-4072</p>
            </li>
          </ul>

          <div className="flex text-xl text-white gap-4 mt-2 md:justify-center">
            <a href="https://twitter.com/tdoragon18">
              <AiFillTwitterCircle />
            </a>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <p className="text-center text-sm text-gray-300 sm:text-center">
            © 2023
            <a href="https://dendi.ninja"> Damasukma Trihanandi</a>. All Rights
            Reserved.
          </p>
        </div>
      </section>

      <ProfileModal
        isOpen={isOpen}
        onClick={onClickCloseModal}
        isJapanese={isJapanese}
      />
    </main>
  );
}

export default App;
