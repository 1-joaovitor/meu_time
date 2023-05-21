import { toast } from "react-hot-toast";
import api from "./api";

const key = JSON.parse(localStorage.getItem("user") || "{}");

export const getCountries = async (user: string) => {
  try {
    const response = await api.get("/countries", {
      headers: {
        "x-rapidapi-key": `${user}`,
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
      },
    });

    return response.data.response;
  } catch (error) {
    toast.error("Acesso negado: Key inválida");
    throw error;
  }
};

export const getLeague = (countrie: string) => {
  try {
    const response = api.get(`/leagues?country=${countrie}`, {
      headers: {
        "x-rapidapi-key": `${key}`,
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
      },
    });

    return response;
  } catch (error) {
    toast.error("Não foi possível carregar as informações");
  }
};

export const getTeam = (league: string, season: string) => {
  try {
    const response = api.get(`/teams?league=${league}&season=${season}`, {
      headers: {
        "x-rapidapi-key": `${key}`,
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
      },
    });

    return response;
  } catch (error) {
    toast.error("Não foi possível carregar as informações");
  }
};
export const getTeamSpecific = (
  team: string,
  league: string,
  season: string
) => {
  try {
    const response = api.get(
      `/teams/statistics?league=${league}&team=${team}&season=${season}`,
      {
        headers: {
          "x-rapidapi-key": `${key}`,
          "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
        },
      }
    );

    return response;
  } catch (error) {
    toast.error("Não foi possível carregar as informações");
  }
};

export const getPlayersTeam = (team: string, season: string) => {
  try {
    const response = api.get(`/players?season=${season}&team=${team}`, {
      headers: {
        "x-rapidapi-key": `${key}`,
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
      },
    });

    return response;
  } catch (error) {
    toast.error("Não foi possível carregar as informações");
  }
};
