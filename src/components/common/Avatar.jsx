import React from "react";

const Avatar = ({ title, initials, className = "avatar_secondary" }) => {
  return (
    <abbr title={title} className={`avatar ${className}`}>
      {initials}
    </abbr>
  );
};

export default Avatar;
