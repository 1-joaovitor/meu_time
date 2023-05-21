import { Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";
export const ChartDates = ({
  teamSelectec,
}: {
  teamSelectec: object | null | string | number | any;
}) => {
  const array = teamSelectec?.goals?.for?.minute;

  const state = {
    options: {
      chart: {
        id: "apexchart-example",
        background: "#F6F8FA",
      },
      xaxis: {
        categories: [
          "0-15 Minutos",
          "16-30 Minutos",
          "31-45 Minutos",
          "46-60 Minutos",
          "61-75 Minutos",
          "76-90 Minutos",
          "91-105 Minutos",
          "106-120 Minutos",
        ],
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: true,
      },
    },

    series: [
      {
        name: "series-1",
        data: [
          array?.["0-15"].total,
          array?.["16-30"].total,
          array?.["31-45"].total,
          array?.["46-60"].total,
          array?.["61-75"].total,
          array?.["76-90"].total,
          array?.["91-105"].total,
          array?.["106-120"].total,
        ],
      },
    ],
  };
  return (
    <>
      {" "}
      {teamSelectec !== null ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" color="white">
              GOLS MARCADOS DURANTE A PARTIDA
            </Typography>
          </Box>
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width={"100%"}
            height={"50%"}
          />{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
};
