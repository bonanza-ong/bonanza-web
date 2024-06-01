import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { usePostAnswerDemand } from "../../api/routes/recipients/mutations";

function AnswerDemandForm() {
  const [recipientId, setRecipientId] = useState<string>("");
  const [itemId, setItemId] = useState<string>("");
  const [quantityProvided, setQuantityProvided] = useState<number>(0);

  const [loadingButton, setLoadingButton] = useState(false);
  const answerDemand = usePostAnswerDemand();

  const handleAddDemand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoadingButton(true);
    answerDemand.mutate(
      { recipientId, demandId: itemId, quantityProvided },
      {
        onSettled: () => {
          setLoadingButton(false);
        },
        onSuccess: () => {
          alert("Demanda atendida com sucesso!");
          setRecipientId("");
          setItemId("");
          setQuantityProvided(0);
        },
        onError: (error: any) => {
          alert("Erro ao atender demanada: " + error.response?.data);
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
        label={"ID do Item Demandado"}
      />
      <TextField
        style={{ width: "15rem" }}
        type="number"
        value={quantityProvided}
        onChange={(e) => setQuantityProvided(Number(e.target.value))}
        label={"Quantidade Atendida"}
      />
      <LoadingButton
        loading={loadingButton}
        variant="contained"
        size="medium"
        style={{ width: "15rem" }}
        type="submit"
      >
        Atender Demanda
      </LoadingButton>
    </form>
  );
}

export default AnswerDemandForm;
