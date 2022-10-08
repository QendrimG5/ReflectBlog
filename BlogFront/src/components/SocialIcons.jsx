import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-secondary">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-white mx-1.5 text-xl hover:bg-primary
        transition ease-in-out "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
