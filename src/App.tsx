import React from "react";
import "./App.css";
import { useAppSelector } from "./hooks";
import { useDispatch } from "react-redux";
import { photoSlice, TPhoto } from "./store/reducers/PhotoSlice";
import { v4 as uuidv4 } from "uuid";
import { PhotoItem } from "./components/PhotoItem";
import { fileToDataUrl } from "./utils";

function App() {
  const { photos } = useAppSelector((state) => state.photoReducer);

  const { getUploadedPhoto } = photoSlice.actions;
  const dispatch = useDispatch();

  const handleSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = [...(event.target.files as unknown as Blob[])];

    const urls = (await Promise.all(
      files.map((file: Blob) => fileToDataUrl(file))
    )) as string[];

    dispatch(
      getUploadedPhoto({
        id: uuidv4(),
        file: urls,
      })
    );
  };

  return (
    <div className="app">
      <div className="select-input-container">
        <input type="file" onChange={handleSelect} />
        <span className={"file-select"}>Select a file to upload</span>
      </div>
      <div className="files">
        {photos.length > 0 &&
          photos.map((item: TPhoto) => (
            <PhotoItem key={item.id} url={item.file} />
          ))}
      </div>
    </div>
  );
}

export default App;
