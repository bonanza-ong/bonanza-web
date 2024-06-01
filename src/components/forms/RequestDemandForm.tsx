import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { usePostDemand } from "../../api/routes/recipients/mutations";

function RequestDemandForm() {
  const [recipientId, setRecipientId] = useState<string>("");
  const [itemId, setItemId] = useState<string>("");
  const [requestedQuantity, setRequestedQuantity] = useState<number>(0);
  const [details, setDetails] = useState<string>("");

  const [loadingButton, setLoadingButton] = useState(false);
  const postDemand = usePostDemand();

  const handleAddDemand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoadingButton(true);
    postDemand.mutate(
      {
        recipientId,
        demand: {
          itemId,
          quantidadeSolicitada: requestedQuantity,
          detalhes: details,
        },
      },
      {
        onSettled: () => {
          setLoadingButton(false);
        },
        onSuccess: () => {
          alert("Demanda requisitada com sucesso!");
          setRecipientId("");
          setItemId("");
          setRequestedQuantity(0);
          setDetails("");
        },
        onError: (error: any) => {
          alert("Erro ao requisitar demanada: " + error.response?.data);
        },
      },
    );
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
      onSubmit={(e) => handleAddDemand(e)}
    >
      <TextField
        style={{ width: "15rem" }}
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
        label={"ID do Beneficiário"}
      />
      <TextField
        style={{ width: "15rem" }}
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        label={"ID do Item"}
      />
      <TextField
        style={{ width: "15rem" }}
        type="number"
        value={requestedQuantity}
        onChange={(e) => setRequestedQuantity(Number(e.target.value))}
        label={"Quantidade Solicitada"}
      />
      <TextField
        multiline
        style={{ width: "15rem" }}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        label={"Detalhes"}
      />
      <LoadingButton
        loading={loadingButton}
        variant="contained"
        size="medium"
        style={{ width: "15rem" }}
        type="submit"
      >
        Requisitar Demanda
      </LoadingButton>
    </form>
  );
}

export default RequestDemandForm;
