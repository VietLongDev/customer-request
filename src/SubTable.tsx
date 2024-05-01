import SubTableRow from "./SubTableRow";
import Table from "./ui/Table";

const data = [
  {
    "Sample Item Given": {
      "Last year": 4,
      "Year to date": 45,
      "6 months": 445,
      "3 months": 454,
      "this month": 424,
    },
  },
  {
    "Succes item": {
      "Last year": 4,
      "Year to date": 45,
      "6 months": 445,
      "3 months": 454,
      "this month": 426,
    },
  },
];

function SubTable() {
  return (
    <Table columns="3fr 1fr 2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Last year</div>
        <div>Year to date</div>
        <div>6 Months</div>
        <div>3 Months</div>
        <div>This month</div>
        <div></div>
      </Table.Header>
      <Table.Body
        // data={cabins}
        // data={filteredCabins}
        data={data}
        render={(item: any) => <SubTableRow rowData={item} key={item.id} />}
      />
    </Table>
  );
}

export default SubTable;
