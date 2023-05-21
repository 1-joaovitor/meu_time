import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";


interface State {
  email?: string;
  password?: string;
}

const Login = () => {
  const { login }: any = useContext(AuthContext);
  const schema = yup
    .object({
      email: yup.string().required(""),
      password: yup.string().required(""),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: State) => {
    const { email, password } = data;
    login(email, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card sx={{ zIndex: 1, width: 450, borderRadius: 8 }}>
        <CardContent
          sx={{ p: (theme) => `${theme.spacing(13, 7, 6.5)} !important` }}
        >
          <Box
            sx={{
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                ml: 2,
                lineHeight: 1,
                fontWeight: 700,
                fontSize: "1.5rem !important",
              }}
            ></Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h5"
                sx={{ mb: 1.5, fontWeight: 600, letterSpacing: "0.18px" }}
              >
                Bem vindo ao meu time !
              </Typography>
              <img
                width={30}
                height={30}
                src="https://cdn-icons-png.flaticon.com/128/1804/1804691.png"
              />
            </Box>

            <Typography variant="body2">
              Fique por dentro de tudo que acontece no mundo do futebol
            </Typography>
          </Box>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Typography
              sx={{ color: "red", textDecoration: "none" }}
              fontSize={15}
            >
              {errors.email?.message}
            </Typography>
            <TextField
              {...register("email", { required: true })}
              autoFocus
              fullWidth
              id="email"
              label="email"
              name="email"
              sx={{ mb: 4 }}
            />
            <Typography
              sx={{ color: "red", textDecoration: "none" }}
              fontSize={15}
            >
              {errors.password?.message}
            </Typography>
            <TextField
              {...register("password", { required: true })}
              autoFocus
              fullWidth
              id="email"
              label="password"
              name="password"
              sx={{ mb: 4 }}
            />

            <Box
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "primary.main", textDecoration: "none" }}
              >
                <Link
                  target="_blank"
                  style={{ textDecoration: "none", color: "#1976d2" }}
                  to="https://www.api-football.com/documentation-v3"
                >
                  Não possui uma key?
                </Link>
              </Typography>
            </Box>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ mb: 7 }}
            >
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
