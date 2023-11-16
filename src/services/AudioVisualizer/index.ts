const SAMPLES_NUMBER = 50;

export const filterData = (rawData: Buffer) => {
  // const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
  const samples = SAMPLES_NUMBER; // Number of samples we want to have in our final data set
  const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    filteredData.push(rawData[i * blockSize]);
  }
  return filteredData;
};
