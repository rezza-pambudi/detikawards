import Menu from "../elements/menu/menu";
import NavbarBrand from "../elements/menu/navbarBrand";

const Navbar = (props) => {

  return(
    <div className="fixed bottom-0 left-0 z-50 w-full h-[5rem]" id="navbar">
    <div className="container max-w-[320px] sm:max-w-[639px] mx-auto">
        <div className="grid grid-cols-4 h-full mx-auto rounded-md bg-[#000000] text-white">
            <NavbarBrand>
            <a href="#">
                <img
                    src="/images/logo-detikcom-awards.png"
                    alt="detikcom-awards"
                    className="w-[132px]"
                />
            </a>
            </NavbarBrand>
            <Menu>Home</Menu>
            <Menu>Home</Menu>
            <Menu>Home</Menu>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
