import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { User, useGetUsers } from "../../api/routes/users/queries";
import { useEffect, useState } from "react";

interface Column {
  id: "id" | "email" | "emailVerificado" | "ativo";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "email", label: "EMAIL", minWidth: 100 },
  { id: "emailVerificado", label: "VERIFICADO", minWidth: 170 },
  { id: "ativo", label: "ATIVO", minWidth: 170 },
];

export default function UserTable() {
  const [search, setSearch] = useState<string>("");

  const [rows, setRows] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isSuccess, refetch, isFetching } = useGetUsers(search, 100);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    if (data && isSuccess) {
      setRows(data);
    } else {
      setRows([]);
    }
  }, [data, isSuccess]);

  return (
    <>
      <TextField
        id="filled-search"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        label="Buscar por email"
        type="search"
        style={searchBoxStyle}
      />
      <TableContainer sx={{ overflow: "auto", width: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ height: "10px" }}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} sx={cellStyle}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.emailVerificado ? "Sim" : "Não"}</TableCell>
                  <TableCell>{row.ativo ? "Sim" : "Não"}</TableCell>
                </TableRow>
              );
            })}
            {rows.length === 0 && isSuccess && (
              <TableRow>
                <TableCell colSpan={6} sx={employeesNotFoundStyle}>
                  Não foram encontrados usuários.
                </TableCell>
              </TableRow>
            )}
            {!isSuccess && !isFetching && (
              <TableRow>
                <TableCell colSpan={6} sx={queryFailedStyle}>
                  Erro: não foi possível acessar os dados.
                  <Button
                    onClick={() => refetch()}
                    variant="contained"
                    sx={retryButtonStyle}
                  >
                    Tente novamente
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const cellStyle = { padding: "5px" };
const searchBoxStyle = {
  marginBottom: "10px",
  marginTop: "10px",
  alignSelf: "self-start",
};

const queryFailedStyle = { color: "red", textAlign: "center" };
const retryButtonStyle = { marginLeft: "1rem" };
const employeesNotFoundStyle = { textAlign: "center" };
