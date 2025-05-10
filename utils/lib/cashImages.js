import axios from "axios";

async function addUrl(names, urls) {
  
  return new Promise(resolve => {

    let data = [];

    urls?.map((url, index) => {
      const obj = {};
      obj[`${names[index]}`] = { url };
      data.push(obj);
    });

    resolve(data);
  });
}

async function fetchAndConvert(urls) {
  let imagesArray = [];

  await Promise.all(urls?.map(async (url) => {
    try {
      const response = await axios.get(url, { responseType: "arraybuffer" });

      const base64data = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      imagesArray.push({
        url,
        base64data: `data:${response.headers['content-type']};base64,${base64data}`
      });
    } catch (error) {
      console.warn("Error fetching image:", error);
    }
  }));

  return imagesArray;
}

async function sort(data, imagesArray, names) {
  let sortedImagesArray = [];

  const urlToBase64Map = {};
  imagesArray.forEach(image => {
    urlToBase64Map[image.url] = image.base64data;
  });

  data.forEach(item => {
    const key = Object.keys(item)[0];
    const url = item[key].url;
    if (urlToBase64Map[url]) {
      sortedImagesArray.push({
        [key]: {
          url,
          base64data: urlToBase64Map[url]
        }
      });
    }
  });

  return sortedImagesArray;
}

export const cashImages = async (localName, names, urls) => {
  try {

    if (!names || !urls || names.length !== urls.length) {
      throw new Error('Invalid input: names and urls must be arrays of the same length');
    }

    const data = await addUrl(names, urls);
    const imagesArray = await fetchAndConvert(urls);
    const sortedImagesArray = await sort(data, imagesArray, names);

    if (sortedImagesArray.length > 0) {
      localStorage.setItem(localName, JSON.stringify(sortedImagesArray));
    }

  } catch (error) {   
    console.error('Failed to cache images:', error);
    throw error;
  }
};