import { Container, ContainerProps } from "@mui/material";
import AppHeader from "../headers/AppHeader";

function PageContainer(props: ContainerProps) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        overflowX: "hidden",
      }}
    >
      <AppHeader />
      <Container {...props} />
    </div>
  );
}

export default PageContainer;
