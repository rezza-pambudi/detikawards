const Player = (props) => {
  const { src, title, allow } = props;
  return (
    <iframe
      className="w-full h-full"
      src={src}
      title={title}
      allow={allow}
      allowFullScreen
    ></iframe>
  );
};

export default Player;
