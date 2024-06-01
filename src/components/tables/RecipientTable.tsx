import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Recipient,
  useGetRecipients,
} from "../../api/routes/recipients/queries";

interface Column {
  id: "id" | "nome";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "nome", label: "NOME", minWidth: 170 },
];

export default function RecipientTable() {
  const [rows, setRows] = useState<Recipient[]>([]);

  const { data, isSuccess, refetch, isFetching } = useGetRecipients(0, 100);

  useEffect(() => {
    if (data && isSuccess) {
      setRows(data);
    } else {
      setRows([]);
    }
  }, [data, isSuccess]);

  return (
    <>
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
                  <TableCell>{row.nome}</TableCell>
                </TableRow>
              );
            })}
            {rows.length === 0 && isSuccess && (
              <TableRow>
                <TableCell colSpan={6} sx={employeesNotFoundStyle}>
                  Não foram encontrados Beneficiários.
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

const queryFailedStyle = { textAlign: "center" };
const retryButtonStyle = { marginLeft: "1rem" };
const employeesNotFoundStyle = { textAlign: "center" };
