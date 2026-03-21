import React from "react";
import Avatar from "./Avatar";

const AvatarStack = ({ members }) => {
  return (
    <div className="flex">
      {members.map((m) => (
        <Avatar
          key={m.initials + m.name}
          initials={m.initials}
          title={m.name}
        />
      ))}
    </div>
  );
};

export default AvatarStack;
