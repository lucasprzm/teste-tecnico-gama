import { Container, Row, Table, Button } from "react-bootstrap";
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs";

export default function Users() {
  return (
    <Container>
      <Row>
        <h1>Gestão de Usuários</h1>
      </Row>
      <Row>
        <Table striped hover>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Thomas Hardy</td>
              <td>thomashardy@mail.com</td>
              <td>(171) 555-2222</td>
              <td>
                {" "}
                <BsFillPencilFill /> <BsFillTrash2Fill />{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Button variant="success">Adicionar Usuário</Button>{" "}
      </Row>
    </Container>
  );
}
