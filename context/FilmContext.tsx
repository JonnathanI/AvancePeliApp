// src/context/FilmContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type Film = {
  id: string;
  title: string;
  director: string;
  time: string;
};

type FilmContextType = {
  films: Film[];
  addFilm: (title: string, director: string, time: string) => void;
  updateFilm: (id: string, updatedFilm: Partial<Film>) => void;
  deleteFilm: (id: string) => void;  // Añadir la declaración de deleteFilm
};

type FilmProviderProps = {
  children: ReactNode;
};

export const FilmContext = createContext<FilmContextType | undefined>(undefined);

export const FilmProvider: React.FC<FilmProviderProps> = ({ children }) => {
  const [films, setFilms] = useState<Film[]>([
    // Datos iniciales de ejemplo
    { id: '1', title: 'Harry Potter y La Piedra Filosofal', director: 'Chris Columbus', time: '152 minutos' },
    { id: '2', title: 'Harry Potter y La Camara Secreta', director: 'Chris Columbus', time: '165 minutos' },
  ]);

  const addFilm = (title: string, director: string, time: string) => {
    const newFilm: Film = {
      id: (films.length + 1).toString(),
      title,
      director,
      time,
    };
    setFilms(prevFilms => [...prevFilms, newFilm]);
  };

  const updateFilm = (id: string, updatedFilm: Partial<Film>) => {
    setFilms(prevFilms => prevFilms.map(film => (film.id === id ? { ...film, ...updatedFilm } : film)));
  };

  const deleteFilm = (id: string) => {
    setFilms(prevFilms => prevFilms.filter(film => film.id !== id));
  };

  return (
    <FilmContext.Provider value={{ films, addFilm, updateFilm, deleteFilm }}>
      {children}
    </FilmContext.Provider>
  );
};
