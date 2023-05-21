import { useState, useContext, useEffect } from "react";
import { getCountries, getPlayersTeam } from "../../services/getApi";
import { AuthContext } from "../../contexts/auth";
import { Box, Typography, Grid } from "@mui/material";
import { ChartDates } from "../chart";
import "./style.css";
import { Filters } from "../filters";
import { Dates } from "../dates";
import { toast } from "react-hot-toast";
import { Header } from "../header";

export const Lobby = () => {
  const [Countries, setCountries] = useState<Array<[]>>([]);
  const [leagues, setLeagues] = useState<Array<[]>>([]);
  const [teams, setTeams] = useState<Array<[]>>([]);
  const [teamSelectec, setTeamSelect] = useState< object | null | number | string | any>(null);
  const [selectCoutrie, setSelectCoutrie] = useState<null | string>(null);
  const [selectLeague, setSelectLeague] = useState<object | null>(null);
  const [selectTeam, setSelectTeam] = useState<object | null>(null);
  const [selectSeason, setSelectSeason] = useState<string | null | any>(null);
  const [allPlayersTeam, setAllPlayersTeam] = useState<Array<[]>>([]);
  const [infoPlayer, setInfoPlayer] = useState<object | null>(null);

  const { user }: any = useContext(AuthContext);

  const getAllCoutries = async () => {
    try {
      const response = await getCountries(user);
      setCountries(response);
    } catch (error) {
      toast.error("Não foi possível carregar as informações");
    }
  };
  const getAllPlayers = async () => {
    try {
      const response = await getPlayersTeam(
        teamSelectec?.team?.id,
        selectSeason
      );
      console.log(response);
      setAllPlayersTeam(response?.data?.response);
    } catch (error) {
      toast.error("Não foi possível carregar as informações");
    }
  };

  useEffect(() => {
    getAllCoutries();
  }, []);

  return (
    <Box sx={{ width: "98vw", height: "100vh", padding: 2 }}>
      <Header title={"MEU TIME"} />
      <Box
        sx={{
          backgroundColor: "#ffffff",
          marginTop: 8,
          display: "flex",
          justifyContent: "center",
          borderRadius: 8,
          alignItems: "center",
          textAlign: "center",
          padding: 1,
        }}
      >
        <Typography variant="h5" color="black" fontWeight="900">
          Preencha todos os filtros para obter informações sobre o time que
          deseja
        </Typography>
      </Box>
      <Grid
        justifyContent="center"
        alignItems="center"
        gridTemplateColumns="repeat(auto-fit, minmax(360px, 1fr))"
        sx={{
          gap: 2,
          marginBottom: 4,
          justifyContent: "center",
          borderRadius: 8,
          padding: 2,
          display: "grid",
          alignItems: "baseline",
        }}
      >
        <Filters
          selectCoutrie={selectCoutrie}
          setSelectCoutrie={setSelectCoutrie}
          Countries={Countries}
          setLeagues={setLeagues}
          leagues={leagues}
          selectLeague={selectLeague}
          setSelectLeague={setSelectLeague}
          selectSeason={selectSeason}
          setSelectSeason={setSelectSeason}
          setTeams={setTeams}
          selectTeam={selectTeam}
          setSelectTeam={setSelectTeam}
          teams={teams}
          setTeamSelect={setTeamSelect}
        />
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="center"
        gridTemplateColumns="repeat(auto-fit, minmax(360px, 1fr))"
        sx={{
          gap: 2,
          justifyContent: "center",
          borderRadius: 8,
          padding: 2,
          display: "grid",
          alignItems: "baseline",
        }}
      >
        <Dates
          teamSelectec={teamSelectec}
          allPlayersTeam={allPlayersTeam}
          setInfoPlayer={setInfoPlayer}
          infoPlayer={infoPlayer}
          getAllPlayers={getAllPlayers}
        />
      </Grid>
      <ChartDates teamSelectec={teamSelectec} />
    </Box>
  );
};
