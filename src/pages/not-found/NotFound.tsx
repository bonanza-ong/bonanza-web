import { Box, Button, SxProps, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { useLocation, useNavigate } from "react-router-dom";
import PageContainer from "../../components/containers/PageContainer";

function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PageContainer maxWidth={false} style={backgroundStyle}>
      <Box sx={boxStyle}>
        <WarningIcon color="error" style={{ width: "9rem", height: "auto" }} />
        <Typography variant="h2">404</Typography>
        <Typography variant="h4" textAlign={"center"}>
          Oops! Parece que a página que está procurando não foi encontrada. 🥺
        </Typography>
        <Button
          sx={{ marginTop: "2rem" }}
          color="error"
          onClick={() =>
            location.key !== "default" ? navigate(-1) : navigate("/home")
          }
          variant="contained"
          size="large"
        >
          Voltar
        </Button>
      </Box>
    </PageContainer>
  );
}

const backgroundStyle: React.CSSProperties = {
  display: "flex",
  height: "80%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const boxStyle: SxProps = {
  backgroundColor: "white",
  padding: "5rem",
  borderRadius: "1rem",
  boxShadow: "1px 6px 20px 0px black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default NotFound;
