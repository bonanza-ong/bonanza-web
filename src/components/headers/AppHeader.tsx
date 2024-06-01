import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useKeycloak } from "../../hooks/useKeycloak";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const pages = [
    { name: "Beneficiários", path: "/recipient", role: "beneficiario" },
    { name: "Padrinhos", path: "/supporter", role: "padrinho" },
    { name: "Provedores", path: "/provider", role: "provedor" },
    { name: "Administradores", path: "/administrator", role: "administrador" },
  ];
  const settings = [
    {
      name: "Sair",
      onClick: () => {
        keycloak.logout();
      },
    },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ padding: "0 2rem" }} position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/home")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            BONANZA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages
              .filter(
                (page) =>
                  keycloak.realmAccess?.roles.includes(page.role) ||
                  keycloak.realmAccess?.roles.includes("administrador"),
              )
              .map((page) => (
                <Button
                  key={page.name}
                  onClick={() => navigate(page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>

          {keycloak.authenticated ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Abrir Configurações">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>
                    {keycloak.tokenParsed?.email[0].toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem style={{ pointerEvents: "none" }}>
                  <Typography textAlign="center">
                    {keycloak.tokenParsed?.email}
                  </Typography>
                  <hr></hr>
                </MenuItem>
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => {
                      setting.onClick();
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                variant="contained"
                color="success"
                href="signup"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Cadastre-se
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="signin"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Entrar
              </Button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;
