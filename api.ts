import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8081", // Asegúrate de que esto sea correcto
  headers: {
    "Content-Type": "application/json",
  },
});

interface Film {
  id?: number;
  title: string;
  director: string;
  duration: number;
  genre?: string;
  releaseYear?: number;
  language?: string;
  country?: string;
  synopsis?: string;
}

export const getFilms = () => api.get<Film[]>("/film");
export const getFilmById = (id: number) => api.get<Film>(`/film/${id}`);
export const createFilm = (data: Film) => api.post("/film", data);
export const updateFilm = (id: number, data: Film) => api.put(`/film/${id}`, data);
export const deleteFilm = (id: number) => api.delete(`/film/${id}`);

interface Character {
  id?: number;
  description: string;
  cost: number;
  nameActor: string;
  rol: string;
  importance: string;
  sceneDescription: number;
}

export const getCharacters = () => api.get<Character[]>("/characters");
export const getCharacterById = (id: number) => api.get<Character>(`/characters/${id}`);
export const createCharacter = (data: Character) => api.post("/characters", data);
export const updateCharacter = (id: number, data: Character) =>
  api.put(`/characters/${id}`, data);
export const deleteCharacter = (id: number) => api.delete(`/characters/${id}`);

interface Scene {
  id?: number;
  description: string;
  minutes: number;
  location: string;
  setting?: string;
  film_id?: number;
}

export const getScenes = () => api.get<Scene[]>("/scene");
export const getSceneById = (id: number) => api.get<Scene>(`/scene/${id}`);
export const createScene = (data: Scene) => api.post("/scene", data);
export const updateScene = (id: number, data: Partial<Scene>) =>
  api.put(`/scene/${id}`, data);
export const deleteScene = (id: number) => api.delete(`/scene/${id}`);

export default api;
