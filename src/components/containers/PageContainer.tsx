import { Container, ContainerProps } from "@mui/material";
import AppHeader from "../headers/AppHeader";

function PageContainer(props: ContainerProps) {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <AppHeader />
      <Container {...props} />
    </div>
  );
}

export default PageContainer;
