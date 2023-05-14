import Mock from "mockjs";

const random = Mock.Random;

const followedChannels = Mock.mock({
  "array|1-20": [
    {
      profilePic: random.image("200x100", "#4A7BF7", "Hello"),
      name: random.cname(),
      category: random.word(),
      status: random.boolean(),
      viewers: random.integer(0, 100),
    },
  ],
});

const recommendedChannels = Mock.mock({
  "array|1-5": [
    {
      profilePic: random.image("200x100", "#4A7BF7", "Hello"),
      name: random.cname(),
      category: random.word(),
      status: random.boolean(),
      viewers: random.integer(0, 100),
    },
  ],
});

Mock.mock("/api/sidebarItem/followedChannels", "get", () => {
  return followedChannels;
});

Mock.mock("/api/sidebarItem/recommendedChannels", "get", () => {
  return recommendedChannels;
});
