import Table from "./ui/Table";

function SubTableRow({ rowData }) {
  console.log(rowData);

  return (
    <Table.Row>
      {/* <div>{Object.keys(item)}</div>
      <div>{item["Last year"]}</div>
      <div>{item["Last year"]}</div>
      <div>{item["Last year"]}</div>
      <div>{item["Last year"]}</div>
      <div>{item["Last year"]}</div> */}
    </Table.Row>
  );
}

export default SubTableRow;
