import { Button, Box, Typography, Grid } from "@mui/material";

interface DatesProps {
  teamSelectec?: {
    team?: {
      logo?: string;
      name?: string;
    };
    league?: {
      name?: string;
    };
    lineups?: any;
    fixtures?: {
      played?: {
        total?: number;
      };
      loses?: {
        total?: number;
      };
      draws?: {
        total?: number;
      };
      wins?: {
        total?: number;
      };
    };
  };
  allPlayersTeam?: object[] | undefined | any;
  setInfoPlayer?: object | null | any;
  infoPlayer?: null | {
    player?: {
      photo?: string;
      nationality?: string;
      age?: string;
      name?: string;
    };
  };
  getAllPlayers?: () => void;
}
export const Dates = ({
  teamSelectec,
  allPlayersTeam,
  setInfoPlayer,
  infoPlayer,
  getAllPlayers,
}: DatesProps) => {
  return (
    <>
      {teamSelectec !== null ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
            backgroundColor: "white",
            borderRadius: 8,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Time</Typography>
            <img src={teamSelectec?.team?.logo} width={50} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h4">
              Nome: {teamSelectec?.team?.name}
            </Typography>{" "}
            <Typography variant="h4">
              Liga: {teamSelectec?.league?.name}
            </Typography>{" "}
            <Typography variant="h4">
              Formação mais utilizada: {teamSelectec?.lineups[0]?.formation}
            </Typography>
            <Typography variant="h4">
              Total de jogos: {teamSelectec?.fixtures?.played?.total}
            </Typography>{" "}
            <Typography variant="h4">
              Total de vitórias: {teamSelectec?.fixtures?.wins?.total}
            </Typography>{" "}
            <Typography variant="h4">
              Total de derrotas : {teamSelectec?.fixtures?.loses?.total}
            </Typography>
            <Typography variant="h4">
              Total de empates: {teamSelectec?.fixtures?.draws?.total}
            </Typography>
          </Box>
        </Box>
      ) : (
        ""
      )}
      {teamSelectec !== null ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: 8,
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Jogadores da Equipe</Typography>
            <img src={teamSelectec?.team?.logo} width={50} />
          </Box>

          <Grid
            justifyContent="center"
            alignItems="center"
            gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))"
            sx={{
              gap: 2,
              justifyContent: "center",
              borderRadius: 8,
              padding: 2,
              display: "grid",
              alignItems: "baseline",
            }}
          >
            {allPlayersTeam?.map((player: any) => (
              <Box key={player?.player?.id}>
                <Button
                  sx={{ backgroundColor: "#2E8B57" }}
                  fullWidth
                  variant="contained"
                  onClick={() => setInfoPlayer(player)}
                >
                  {player?.player?.name}
                </Button>
              </Box>
            ))}
            <Box sx={{ display: allPlayersTeam?.length > 0 ? "none" : "" }}>
              <Button onClick={getAllPlayers} fullWidth variant="contained">
                Exibir jogadores
              </Button>
            </Box>
          </Grid>
        </Box>
      ) : (
        ""
      )}
      {infoPlayer !== null ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: 8,
            padding: 2,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Jogador</Typography>
            <img src={infoPlayer?.player?.photo} width={50} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h4">
              Nome: {infoPlayer?.player?.name}
            </Typography>
            <Typography variant="h4">
              Idade: {infoPlayer?.player?.age} anos
            </Typography>
            <Typography variant="h4">
              Nacionalidade: {infoPlayer?.player?.nationality}
            </Typography>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};
