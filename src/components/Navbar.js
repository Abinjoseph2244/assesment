const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2 bg-[#f5f6f8]">
        <h3 className="text-lg font-bold">Hello Sharukh</h3>
        <div className="flex items-center">
        </div>
        <div className="flex items-center">
          <input
            type="text"
            style={{ width: '200px' }}
            className="bg-white px-4 py-2 border-white rounded-md"
            placeholder="Search"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
