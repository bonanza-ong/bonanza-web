import { Box, Typography } from "@mui/material";
import PageContainer from "../../components/containers/PageContainer";
import RecipientTable from "../../components/tables/RecipientTable";
import RequestDemandForm from "../../components/forms/RequestDemandForm";

function Recipient() {
  return (
    <PageContainer
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          textAlign: "center",
          borderRadius: "1rem",
          p: "2rem",
          mt: "2rem",
        }}
      >
        <Typography fontWeight={"bold"} variant="h3">
          BENEFICIÁRIOS DO SISTEMA
        </Typography>
        <Box sx={{ width: "50rem" }}>
          <RecipientTable />
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          textAlign: "center",
          borderRadius: "1rem",
          p: "2rem",
          mt: "2rem",
        }}
      >
        <Typography mb={"1rem"} fontWeight={"bold"} variant="h4">
          REQUISITAR DEMANDA
        </Typography>
        <Box sx={{ width: "25rem" }}>
          <RequestDemandForm />
        </Box>
      </Box>
    </PageContainer>
  );
}

export default Recipient;
