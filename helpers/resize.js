import Jimp from "jimp";

const resize = async (pathToImage) => {
  const image = await Jimp.read(pathToImage);
  await image.resize(250, 250);
  await image.writeAsync(pathToImage);
};

export default resize;
