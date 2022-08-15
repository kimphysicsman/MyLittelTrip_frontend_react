import React from "react";

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "nagetive"].includes(type) ? type : "default";
  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
};

export default React.memo(Button);
