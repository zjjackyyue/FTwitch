import Mock from "mockjs";

// 五张图片的地址
const image1 =
  "https://file.moetu.org/images/2019/02/15/xuezhiye66-21745acb17e0555b0.jpg";
const image2 = "https://file.moetu.org/images/2020/04/04/4c024b073decfd98f.jpg";
const image3 =
  "https://file.moetu.org/images/2020/06/25/imaged6acb912a38889bf.png";
const image4 =
  "https://file.moetu.org/images/2019/02/27/kuenmingsi22-12af1ff91ab36ed85a.jpg";
const image5 =
  "https://file.moetu.org/images/2018/11/15/dadihua52-22d05761591f68ee9d.jpg";
// 将五张图片放入数组中
const images = [image1, image2, image3, image4, image5];
// 随机选取三张图片
const image11 = images[Math.floor(Math.random() * images.length)];
const image22 = images[Math.floor(Math.random() * images.length)];
const image33 = images[Math.floor(Math.random() * images.length)];

const random = Mock.Random;
const array = Mock.mock({
  "array|1-5": ["Mock.js"],
});
const data1 = {
  image: image11,
  profilePic: random.image("200x100", "#4A7BF7", "Hello"),
  title: random.title(),
  name: random.cname(),
  category: random.word(),
  tags: array,
};
const data2 = {
  image: image22,
  profilePic: random.image("200x100", "#4A7BF7", "Hello"),
  title: random.title(),
  name: random.cname(),
  category: random.word(),
  tags: array,
};
const data3 = {
  image: image33,
  profilePic: random.image("200x100", "#4A7BF7", "Hello"),
  title: random.title(),
  name: random.cname(),
  category: random.word(),
  tags: array,
};
const response = { data: [data1, data2, data3] };

Mock.mock("/api/getCardData", "get", () => {
  return response;
});
