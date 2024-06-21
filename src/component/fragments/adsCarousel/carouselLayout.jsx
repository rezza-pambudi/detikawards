const CarouselLayout = (props) => {
    const { src } = props;
    return (
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a href="{clickurl}" target="_blank">
                <img src={src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </a>
        </div>
    )
};

export default CarouselLayout;