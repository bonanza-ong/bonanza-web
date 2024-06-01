import { Container, ContainerProps } from "@mui/material";
import AppHeader from "../headers/AppHeader";
import AppFooter from "../footers/AppFooter";

function PageContainer(props: ContainerProps) {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "absolute" }}>
      <AppHeader />
      <Container {...props} />
      <AppFooter />
    </div>
  );
}

export default PageContainer;
