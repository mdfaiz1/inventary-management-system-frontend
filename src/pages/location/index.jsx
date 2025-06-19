import AddLocation from "./layouts/AddLocation";
import locationModel from "../../models/location.model.js";
import { useEffect, useState } from "react";
import LocationTable from "./layouts/Data-table.jsx";

const Location = () => {
  // start
  // const [searchText, setSearchText] = useState("");
  // const [searchedColumn, setSearchedColumn] = useState("");
  // const searchInput = useRef(null);
  // const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //   confirm();
  //   setSearchText(selectedKeys[0]);
  //   setSearchedColumn(dataIndex);
  // };
  // const handleReset = (clearFilters) => {
  //   clearFilters();
  //   setSearchText("");
  // };
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  //   {
  //     key: "2",
  //     name: "Joe Black",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //   },
  //   {
  //     key: "3",
  //     name: "Jim Green",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  //   {
  //     key: "5",
  //     name: "Jim Green",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "6",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  //   {
  //     key: "7",
  //     name: "Jim Green",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "8",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  //   {
  //     key: "9",
  //     name: "Jim Green",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "10",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  //   {
  //     key: "11",
  //     name: "Jim Green",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "12",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  //   {
  //     key: "13",
  //     name: "Jim Green",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "14",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  //   {
  //     key: "15",
  //     name: "Jim Green",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "16",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  // ];
  // const getColumnSearchProps = (dataIndex) => ({
  //   filterDropdown: ({
  //     setSelectedKeys,
  //     selectedKeys,
  //     confirm,
  //     clearFilters,
  //     close,
  //   }) => (
  //     <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
  //       <Input
  //         ref={searchInput}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={(e) =>
  //           setSelectedKeys(e.target.value ? [e.target.value] : [])
  //         }
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{ marginBottom: 8, display: "block" }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{ width: 90 }}
  //         >
  //           Search
  //         </Button>
  //         <Button
  //           onClick={() => clearFilters && handleReset(clearFilters)}
  //           size="small"
  //           style={{ width: 90 }}
  //         >
  //           Reset
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             confirm({ closeDropdown: false });
  //             setSearchText(selectedKeys[0]);
  //             setSearchedColumn(dataIndex);
  //           }}
  //         >
  //           Filter
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             close();
  //           }}
  //         >
  //           close
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered) => (
  //     <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
  //   ),
  //   onFilter: (value, record) =>
  //     record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  //   filterDropdownProps: {
  //     onOpenChange(open) {
  //       if (open) {
  //         setTimeout(() => {
  //           var _a;
  //           return (_a = searchInput.current) === null || _a === void 0
  //             ? void 0
  //             : _a.select();
  //         }, 100);
  //       }
  //     },
  //   },
  //   render: (text) =>
  //     searchedColumn === dataIndex ? (
  //       <Highlighter
  //         highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
  //         searchWords={[searchText]}
  //         autoEscape
  //         textToHighlight={text ? text.toString() : ""}
  //       />
  //     ) : (
  //       text
  //     ),
  // });
  // const columns = [
  //   Object.assign({ title: "#", dataIndex: "key", key: "key", width: "10%" }),
  //   Object.assign(
  //     Object.assign(
  //       {
  //         title: "Location Name",
  //         dataIndex: "name",
  //         key: "name",
  //         width: "30%",
  //       },
  //       getColumnSearchProps("name")
  //     ),
  //     {
  //       sorter: (a, b) => a.name.length - b.name.length,
  //       sortDirections: ["descend", "ascend"],
  //     }
  //   ),

  //   Object.assign(
  //     { title: "Action", dataIndex: "age", key: "age", width: "20%" }
  //     // getColumnSearchProps("age")
  //   ),
  //   // Object.assign(
  //   //   Object.assign(
  //   //     { title: "Address", dataIndex: "address", key: "address" },
  //   //     getColumnSearchProps("address")
  //   //   ),
  //   //   {
  //   //     sorter: (a, b) => a.address.length - b.address.length,
  //   //     sortDirections: ["descend", "ascend"],
  //   //   }
  //   // )
  // ];
  // end
  const [locationData, setLocationData] = useState([]);
  const fetchLocations = async () => {
    try {
      const locations = await locationModel.getAllLocations();
      // console.log("Fetched locations:", locations.data);
      setLocationData(locations.data);
    } catch (error) {
      // console.error("Error fetching locations:", error);
      setLocationData([]);
    }
  };
  useEffect(() => {
    fetchLocations();
  }, []);
  return (
    <div className="">
      <AddLocation />
      <div className="text-white">
        <LocationTable/>
      </div>
    </div>
  );
};

export default Location;
