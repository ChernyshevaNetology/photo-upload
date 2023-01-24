import React from "react";

const PhotoItem = ({ url }: any) => {
  return (
    <div className={"photo-item"}>
      <img src={url} alt="image" />
    </div>
  );
};

export { PhotoItem };
