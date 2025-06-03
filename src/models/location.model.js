import axiosInstance from "../utils/axiosInstance";

const baseURL = import.meta.env.VITE_API_URL+ "/locations";

const locationApi = class {
    async getAllLocations() {
        return (await axiosInstance.get(baseURL)).data;
    }
    async getLocationById(id) {
        return (await axiosInstance.get(`${baseURL}/${id}`)).data;
    }
    async createLocation(locationData) {
        return (await axiosInstance.post(baseURL, locationData)).data;
    }
    async updateLocation(id, locationData) {
        return (await axiosInstance.put(`${baseURL}/${id}`, locationData)).data;
    }
    async deleteLocation(id) {
        return (await axiosInstance.delete(`${baseURL}/${id}`)).data;
    }
}

export default new locationApi();