import AddLocation from "./layouts/AddLocation";
import DataTable from "../../components/layouts/data-table-components";

const Location = () => {
  return (
    <div className="border-2 border-amber-300">
      <AddLocation />
      <div className="text-white">
        <DataTable />
      </div>
    </div>
  );
};

export default Location;
