const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Netfilsx</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
