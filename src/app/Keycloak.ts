import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8090",
  realm: "bonanza",
  clientId: "web-site",
});

await keycloak.init({
  onLoad: "check-sso",
  checkLoginIframe: true,
  pkceMethod: "S256",
});

export { keycloak };
