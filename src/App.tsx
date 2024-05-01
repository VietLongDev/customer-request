import { Col, Row } from "antd";
import SubTable from "./SubTable";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

function App() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <Row>
        <Col span={5} style={{ color: "red" }}>
          table
        </Col>
        <Col span={15}>
          <SubTable></SubTable>
        </Col>
      </Row>
    </div>
  );
}

export default App;
