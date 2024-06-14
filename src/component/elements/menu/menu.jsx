const Menu = (props) => {
    const { children } = props;
    return(
        <button className="inline-flex flex-col items-center justify-center px-0 py-[10px] font-normal">
                <span className="px-[20px] py-[10px] text-[14px]">{children}</span>
        </button>
    );
};

export default Menu;