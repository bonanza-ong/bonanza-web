import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { usePostItem } from "../../api/routes/administrator/mutations";

function ItemForm() {
  const [name, setName] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [loadingButton, setLoadingButton] = useState(false);
  const postItem = usePostItem();

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoadingButton(true);
    postItem.mutate(
      { nome: name, categoriaId: categoryId },
      {
        onSettled: () => {
          setLoadingButton(false);
        },
        onSuccess: () => {
          alert("Item adicionado com sucesso!");
          setName("");
          setCategoryId("");
        },
        onError: (error: any) => {
          alert("Erro ao adicionar item: " + error.response?.data);
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
      onSubmit={(e) => handleAddItem(e)}
    >
      <TextField
        style={{ width: "15rem" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        label={"Nome"}
      />
      <TextField
        style={{ width: "15rem" }}
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        label={"ID da Categoria"}
      />
      <LoadingButton
        loading={loadingButton}
        variant="contained"
        size="medium"
        style={{ width: "15rem" }}
        type="submit"
      >
        Adicionar Item
      </LoadingButton>
    </form>
  );
}

export default ItemForm;
