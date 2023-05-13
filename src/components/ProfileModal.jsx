import React from 'react';
import { ModalProfile, ModalProfileLicense } from '../utils/profile';

const ProfileModal = (props) => {
  const { isOpen, onClick, isJapanese } = props;
  const Profile = isJapanese ? ModalProfile.japanese : ModalProfile.english;
  const License = isJapanese ? ModalProfileLicense.japanese : ModalProfileLicense.english;
  return (
    <>
      <div className="overlay" style={{ display: isOpen ? 'block' : 'none' }}></div>
      <div
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="relative w-full max-w-2xl max-h-full m-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isJapanese ? 'プロフィール' : 'Profile'}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={onClick}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-lg leading-relaxed text-gray-900 dark:text-white mt-0">
              {isJapanese ? '自己紹介' : 'Self Introduction'}
              </p>
              <p className="text-base leading-relaxed text-gray-900 dark:text-white mt-0">
                {Profile.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <p className="text-lg leading-relaxed text-gray-900 dark:text-white mt-0">
              {isJapanese ? '資格' : 'License'}
              </p>
              <p className="text-base leading-relaxed text-gray-900 dark:text-white mt-0">
                {License.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
