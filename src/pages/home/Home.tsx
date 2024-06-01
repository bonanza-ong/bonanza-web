import { Box, Typography } from "@mui/material";
import PageContainer from "../../components/containers/PageContainer";

function Home() {
  return (
    <PageContainer maxWidth={false}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "100%",
          mt: "5rem",
        }}
      >
        <Typography fontStyle={"italic"} variant="h2">
          Bem-vindo ao <strong>BONANZA</strong>
        </Typography>
        <Typography fontStyle={"italic"} variant="h5">
          Uma ONG com o objetivo de conectar pessoas em uma rede solidária
        </Typography>

        <Typography
          boxShadow={"2px 2px 20px 1px"}
          borderRadius={"1rem"}
          p={"1rem"}
          color={"white"}
          bgcolor={"black"}
          mt={"2rem"}
          textAlign={"justify"}
          width={"70%"}
          variant="h6"
        >
          <strong>Conecte-se:</strong> Cadastre-se em nossa plataforma e
          junte-se a uma comunidade crescente de doadores, voluntários e
          beneficiários.
        </Typography>

        <Typography
          boxShadow={"2px 2px 20px 1px"}
          borderRadius={"1rem"}
          p={"1rem"}
          bgcolor={"white"}
          mt={"2rem"}
          textAlign={"justify"}
          width={"70%"}
          variant="h6"
        >
          <strong>Contribua:</strong> Ofereça o que você pode, seja tempo,
          habilidades ou recursos. Toda contribuição é valiosa.
        </Typography>

        <Typography
          boxShadow={"2px 2px 20px 1px"}
          borderRadius={"1rem"}
          p={"1rem"}
          bgcolor={"white"}
          mt={"2rem"}
          textAlign={"justify"}
          width={"70%"}
          variant="h6"
        >
          <strong>Colabore:</strong> Participe de projetos, campanhas e eventos.
          Ajude-nos a espalhar a mensagem e ampliar nosso impacto.
        </Typography>
      </Box>
    </PageContainer>
  );
}

export default Home;
