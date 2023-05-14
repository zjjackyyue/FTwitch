import axios from "axios";

export async function getSidebarData() {
  try {
    const followedChannels = await axios.get(
      "/api/sidebarItem/followedChannels"
    );
    const recommendedChannels = await axios.get(
      "/api/sidebarItem/recommendedChannels"
    );
    // 将从followedChannels和recommendedChannels中获取的数据合并到一个对象中
    const response = {
      followedChannels: followedChannels.data.array,
      recommendedChannels: recommendedChannels.data.array,
    };
    console.log("response:", response);
    return response;
  } catch (error) {
    console.error("Error fetching sidebar data:", error);
  }
}
