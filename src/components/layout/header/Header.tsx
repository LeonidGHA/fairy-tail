const Header = () => {
  return (
    <header
      className={
        "bg-stone-500 border-b-2 border-rose-600 fixed  top-0 left-0 right-0"
      }
    >
      <div className={"container mx-auto px-20"}>
        <nav>
          <ul className={" flex gap-10"}>
            <li className="flex transition-all py-4 color-black hover:text-pink-600 duration-300">
              Home
            </li>
            <li className="flex transition-all py-4 color-black hover:text-pink-600 duration-300">
              pokemons
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
