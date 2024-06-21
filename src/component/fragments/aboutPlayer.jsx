import Player from "../elements/player/player";

const aboutPlayer = () => {
  return (
    <div className="aspect-w-16 h-full items-center my-auto">
      <Player
        src="https://www.youtube.com/embed/CfJd5InuSOg"
        title=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export default aboutPlayer;
