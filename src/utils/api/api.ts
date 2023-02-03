import { CreatePetsPayload, LoginRequest, UpdatePetsPayload } from '../types/request';
import axios, { AxiosError } from 'axios';
import { HandleError } from '../errors/handle-errors-modal';


axios.defaults.baseURL = 'postgres://admin:oDG0J7XtKEdlw7INWf7JeMGifmosI2SJ@dpg-ceb6akta4996med93to0-a.oregon-postgres.render.com/cadastro';
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers = { Authorization: "Bearer " + token,
        };
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  axios.interceptors.response.use(
    function (config) {
      return config;
    },
    function (error) {
      if (error.response.status === 401) {
        if (localStorage.getItem("token")) localStorage.removeItem("token");
      }
      throw new Error(error.response.data.message);
    }
  );

export const api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post('/Autorization,/login', {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));


      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  getPet: async () => {
    try {
      const response = await axios.get("/pets");
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  getPetById: async (id: string) => {
    try {
      const response = await axios.get(`/pets/${id}`);
      if (!response.data) {
        throw new Error("Pet not found");
      }
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  createPet: async (payload: CreatePetsPayload) => {
    try {
      const response = await axios.post("/pets", payload);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  updatePet: async (payload: UpdatePetsPayload) => {
    try {
      const response = await axios.patch("/pets", payload);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  deletePet: async (payload: string) => {
    try {
      const response = await axios.delete(`/pets/${payload}`);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

};
