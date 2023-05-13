export default function Navbar(props) {
  const { isJapanese, onChangeText } = props;
  return (
    <nav className="fixed top-0 left-0 w-full bg-teal-400 shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
      <h1 className="font-extrabold md:text-xl lg:text-2xl text-white">行徳のなんでもや_たくぼ</h1>
      <ul className="flex items-center">
        <button
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-700 text-white"
          onClick={onChangeText}
        >
          {isJapanese ? 'English' : '日本語'}
        </button>
      </ul>
    </nav>
  );
}
