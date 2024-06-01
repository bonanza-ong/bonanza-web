import { Box, Button, SxProps, Typography } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { useLocation, useNavigate } from "react-router-dom";

function WipContainter() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={boxStyle}>
      <EngineeringIcon
        color="primary"
        style={{ width: "9rem", height: "auto" }}
      />
      <Typography variant="h2">WIP</Typography>
      <Typography variant="h4" textAlign={"center"}>
        Oops! Estamos trabalhando nessa página. 🚧
      </Typography>
      <Button
        sx={{ marginTop: "2rem", width: "25%" }}
        color="warning"
        onClick={() =>
          location.key !== "default" ? navigate(-1) : navigate("/home")
        }
        variant="contained"
        size="large"
      >
        Voltar
      </Button>
    </Box>
  );
}

const boxStyle: SxProps = {
  backgroundColor: "white",
  padding: "5rem",
  borderRadius: "1rem",
  boxShadow: "1px 6px 20px 0px black",
  display: "flex",
  width: "70%",
  flexDirection: "column",
  margin: "auto",
  marginTop: "6rem",
};

export default WipContainter;
