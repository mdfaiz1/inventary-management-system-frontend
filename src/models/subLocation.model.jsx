import axiosInstance from "../utils/axiosInstance";

const baseURL = import.meta.env.VITE_API_URL + "/sub-locations";

const subLocationApi = class {
  async getAllSubLocations() {
    return (await axiosInstance.get(baseURL)).data;
  }
  async createSubLocation(subLocationData) {
    return (await axiosInstance.post(baseURL, subLocationData)).data;
  }
  async updateSubLocation(id, subLocationData) {
    return (await axiosInstance.patch(`${baseURL}/${id}`, subLocationData)).data;
  }
  async deleteSubLocation(id) {
    return (await axiosInstance.delete(`${baseURL}/${id}`)).data;
  }
};

export default new subLocationApi()
