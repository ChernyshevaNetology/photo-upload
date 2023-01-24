export const fileToDataUrl = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      resolve(fileReader.result);
    });
    fileReader.addEventListener("error", () => {
      reject(new Error(fileReader.error as unknown as string));
    });
    fileReader.readAsDataURL(file);
  });
};
