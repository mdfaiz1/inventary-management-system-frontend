import DataTable from "../../../components/ui/data-table-components";
import { Button, Input, Space, Table } from "antd";
import { useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import locationModel from "../../../models/location.model.js";
import {useDispatch} from "react-redux";
// import { useSelector } from "react-redux";
import { setLocation } from "../../../redux/features/locationSlice.jsx";
const LocationTable = () => {
  const dispatch = useDispatch();
  // const locationDataAll = useSelector((state) => state.location.locationData);
  // console.log("Location Data from Redux:", locationDataAll);
  
  const [locationData, setLocationData] = useState([]);
  const fetchLocations = async () => {
    try {
      const locations = await locationModel.getAllLocations();
      // console.log("Fetched locations:", locations.data);
      setLocationData(locations.data);
      dispatch(setLocation(locations.data));
    } catch (error) {
      // console.error("Error fetching locations:", error);
      setLocationData([]);
    }
  };
  useEffect(() => {
    fetchLocations();
  }, []);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const data = locationData.map((location, idx) => ({
    key: idx + 1, // Ant Design expects a unique `key` field
    locationName: location.locationName,
    _id: location._id,
    // action: location.locationName,
  }));

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => {
            var _a;
            return (_a = searchInput.current) === null || _a === void 0
              ? void 0
              : _a.select();
          }, 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    Object.assign({
      title: "#",
      dataIndex: "index",
      key: "index",
      width: "4%",
    }),
    Object.assign(
      Object.assign(
        {
          title: "Location Name",
          dataIndex: "locationName",
          key: "locationName",
          width: "30%",
        },
        getColumnSearchProps("name")
      ),
      {
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend", "ascend"],
      }
    ),
    Object.assign({
      title: "Action",
      dataIndex: "age",
      key: "age",
      width: "20%",
    }),
  ];

  const handleEdit = (record) => {
    // Handle edit action here
    console.log("Edit record:", record._id);
  }
  const handleDelete = async (record) => {
    try {
      await locationModel.deleteLocation(record._id);
      fetchLocations(); // Refetch locations after deletion
      // After deletion, refetch the locations to update the table
    } catch (error) {
      console.log("Error deleting location:", error);
      
    }
    
  };
  return (
    <div>
      <DataTable
        data={data}
        columns={[
          { title: "#", dataIndex: "key", key: "key" },
          {
            title: "Location Name",
            dataIndex: "locationName",
            key: "locationName",
          },
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <Space>
                <Button type="primary" onClick={() => handleEdit(record)}>
                  Edit
                </Button>
                <Button type="primary" onClick={() => handleDelete(record)}>
                  Delete
                </Button>
              </Space>
            ),
          },
          ,
        ]}
      />
    </div>
  );
};

export default LocationTable;
