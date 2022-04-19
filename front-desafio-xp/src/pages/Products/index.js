import { Container, Row, Table, Button } from "react-bootstrap";
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs";

export default function Products() {
  return (
    <Container>
      <Row>
        <h1>Gestão de Produtos</h1>
      </Row>
      <Row>
        <Table striped hover>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade em Estoque</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Televisão</td>
              <td>R$1800</td>
              <td>20</td>
              <td>
                {" "}
                <BsFillPencilFill /> <BsFillTrash2Fill />{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Button variant="success">Adicionar Produto</Button>{" "}
      </Row>
    </Container>
  );
}
