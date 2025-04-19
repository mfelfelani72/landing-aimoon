import axios from "axios";

export const cashImages = async (localName, names, urls) => {
  // console.log("cashed header");

  let data = [];

  urls.map((url, index) => {
    const obj = {};
    obj[`${names[index]}`] = { url };
    data.push(obj);
  });

  // console.log(data);

  let imagesArray = [];

  const promises = urls.map(async (url) => {
    try{const response = await axios.get(url, { responseType: "blob" });
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.readAsDataURL(response.data);
      reader.onloadend = () => {
        const base64data = reader.result;
        imagesArray.push({ url, base64data });
        resolve();
      };
    });}
    catch(error){
      console.log("sorry, i can't get picture. error is : " + error)
    }
    
  });

  await Promise.all(promises);

  let sortedImagesArray = [];

  if (imagesArray.length !== 0) {
    const promises2 = imagesArray.map(async(image, index) => {
      data.filter((item) => {
        if (item[`${names[index]}`]?.url === image?.url) {
          let obj = {};
          obj = { url: image?.url, base64data: image?.base64data };
          item[`${names[index]}`] = obj;
          sortedImagesArray.push(item);
        }
      });
    });

    await Promise.all(promises2);

    if (sortedImagesArray.length !== 0) {
      localStorage.setItem(localName, JSON.stringify(sortedImagesArray));
    }
  }

  // console.log(imagesArray.map((item)=>item.hasOwnProperty(`${names[1]}`))[1])

  // console.log(imagesArray.filter((item) => item[`${names[0]}`])[0][`${names[0]}`].base64data);
};
