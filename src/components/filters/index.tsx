import { Box, Button } from "@mui/material";
import { getLeague, getTeam, getTeamSpecific } from "../../services/getApi";
import { toast } from "react-hot-toast";
interface PropsFilter {
  selectCoutrie?: string | null | any;
  setSelectCoutrie?: null | string | any;
  Countries?: Array<[]>;
  setLeagues?: null | string | any;
  leagues?: Array<[]> | any | null;
  selectLeague?: null | string | any;
  setSelectLeague?: null | string | any;
  selectSeason?: null | string | any;
  setSelectSeason?: null | string | any;
  setTeams?: null | string | any;
  selectTeam?: null | string | any;
  setSelectTeam?: null | string | any;
  teams?: Array<[]> | null | any;
  setTeamSelect?: null | string | any;
}
export const Filters = ({
  selectCoutrie,
  setSelectCoutrie,
  Countries,
  setLeagues,
  leagues,
  selectLeague,
  setSelectLeague,
  selectSeason,
  setSelectSeason,
  setTeams,
  selectTeam,
  setSelectTeam,
  teams,
  setTeamSelect,
}: PropsFilter) => {
  const getAllLeagues = async () => {
    try {
      const response = await getLeague(selectCoutrie);
      setLeagues(response?.data?.response);
    } catch (error) {
      toast.error("Não foi possível carregar as informações");
    }
  };
  const getAllTeams = async () => {
    try {
      const response = await getTeam(selectLeague, selectSeason);

      setTeams(response?.data?.response);
    } catch (error) {
      toast.error("Não foi possível carregar as informações");
    }
  };
  const getEsTeam = async () => {
    try {
      const response = await getTeamSpecific(
        selectTeam,
        selectLeague,
        selectSeason
      );
      setTeamSelect(response?.data?.response);
    } catch (error) {
      toast.error("Não foi possível carregar as informações");
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <select
          className="input"
          name="países"
          value={selectCoutrie}
          onChange={(e: any) => setSelectCoutrie(e.target.value)}
        >
          <option>Selecione uma país</option>
          {Countries?.map((Countrie: any) => (
            <option key={Countrie?.id} value={Countrie?.name}>
              {Countrie?.name} <img src={Countrie?.flag} />
            </option>
          ))}
        </select>
        <Button variant="contained" onClick={getAllLeagues}>
          Selecionar
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {leagues?.length > 0 ? (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", gap: 1 }}
            >
              <select
                className="input"
                name="ligas"
                value={selectLeague}
                onChange={(e: any) => setSelectLeague(e.target.value)}
              >
                <option>Selecione uma liga</option>
                {leagues?.map((league: any) => (
                  <option key={league?.league?.id} value={league?.league?.id}>
                    {league?.league?.name}
                  </option>
                ))}
              </select>
              <select
                className="input"
                name="temporada"
                value={selectSeason}
                onChange={(e: any) => setSelectSeason(e.target.value)}
              >
                <option>Selecione uma temporada</option>
                <option value={"2023"}>2023</option>
                <option value={"2022"}>2022</option>
                <option value={"2021"}>2021</option>
                <option value={"2020"}>2020</option>
              </select>
            </Box>
            <Button variant="contained" onClick={getAllTeams}>
              Selecionar
            </Button>
          </>
        ) : (
          ""
        )}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {teams?.length > 0 ? (
          <>
            <select
              className="input"
              name="times"
              value={selectTeam}
              onChange={(e: any) => setSelectTeam(e.target.value)}
            >
              <option>Selecione um time</option>
              {teams?.map((team: any) => (
                <option key={team?.team?.id} value={team?.team?.id}>
                  {team?.team?.name}
                </option>
              ))}
            </select>

            <Button variant="contained" onClick={getEsTeam}>
              Selecionar
            </Button>
          </>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};
