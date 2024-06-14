const NavbarBrand = (props) => {
    const { children } = props;
    return (
        <button className="flex-col items-center justify-center px-5 py-2 group hidden md:block">
                {children}
        </button>
    )
}

export default NavbarBrand;