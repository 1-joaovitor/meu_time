import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AuthContext } from "../../contexts/auth";

interface propsHeader {
  title?: string;
}

export const Header = ({ title }: propsHeader) => {
  const { logout }: any = useContext(AuthContext);

  const Logout = () => {
    logout();
  };
  const [anchorEl, setAnchorEl] = React.useState(false);
  const handleMenu = (event: any) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          background: " rgb(255, 255, 255)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            color={"Black"}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="success"
            >
              <AccountCircle /> <Typography color={"black"}>Sair</Typography>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem color="Black">
                <Button onClick={Logout}>
                  Logout
                  <ExitToAppIcon />
                </Button>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
