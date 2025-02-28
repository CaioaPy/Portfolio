import "./Background.css";

const Background = () => {
    return (
      <div className="white">
        <div className="squares">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="square"></div>
          ))}
        </div>
      </div>
    );
};

export default Background;