import { Typography } from "@mui/material";

function AppFooter() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "black",
        height: "2rem",
        top: "auto",
        bottom: 0,
        position: "absolute",
        textAlign: "center",
      }}
    >
      <Typography
        variant="caption"
        style={{ color: "white", top: ".5rem", position: "relative" }}
      >
        Entre em contato conosco através de [email] ou [telefone]. Sua jornada
        de solidariedade começa aqui!
      </Typography>
    </footer>
  );
}
export default AppFooter;
