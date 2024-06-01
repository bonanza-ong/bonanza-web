import { Box, Typography } from "@mui/material";
import PageContainer from "../../components/containers/PageContainer";
import UserTable from "../../components/tables/UserTable";
import ItemForm from "../../components/forms/ItemForm";

function Administrator() {
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
          USUÁRIOS DO SISTEMA
        </Typography>
        <Box sx={{ width: "50rem" }}>
          <UserTable />
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
          ADICIONAR ITEM
        </Typography>
        <Box sx={{ width: "25rem" }}>
          <ItemForm />
        </Box>
      </Box>
    </PageContainer>
  );
}

export default Administrator;
