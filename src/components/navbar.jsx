function Navbar() {
  return (
    <header>
        <div className="row">
            <div className="col-10 align-left">
                <a href="./index.html">
                    <i className="fa-brands fa-twitter"></i>
                    Three pics
                </a>
            </div>
            <div className="col-2 align-right">
                <a href="./login.html">
                    <i className="fa-solid fa-user-ninja"></i>
                 </a>
            </div>
        </div>
    </header>
  );
}

export default Navbar;