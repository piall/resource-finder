import toast from 'react-hot-toast';
import axiosInstance from './axiosInstance';

class AxiosMethod {
  static async getData(url, errorMessage = 'An error occured') {
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      toast.error(errorMessage);
    }
  }

  static async postData(
    url,
    data,
    successMessage = null,
    errorMessage = 'An error occured'
  ) {
    try {
      const response = await axiosInstance.post(url, data);
      successMessage && toast.success(successMessage);
      return response.data;
    } catch (error) {
      toast.error(errorMessage);
    }
  }

  static async deleteData(
    url,
    successMessage = null,
    errorMessage = 'An error occured'
  ) {
    try {
      const response = await axiosInstance.delete(url);
      successMessage && toast.success(successMessage);
      return response.data;
    } catch (error) {
      toast.error(errorMessage);
    }
  }
}

export default AxiosMethod;
