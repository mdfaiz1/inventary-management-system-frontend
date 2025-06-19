import React from "react";
import DataTable from "../../../components/ui/data-table-components";
import { Button, Input, Space } from "antd";
import { useRef, useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubLocations } from "../../../redux/features/subLocationSlice";

const DataTableSubLocation = () => {
  const [searchedColumn, setSearchedColumn] = useState("");
  const dispatch = useDispatch();
  const { subLocationData, loading } = useSelector(
    (state) => state.subLocation
  );
  console.log(subLocationData);

  useEffect(() => {
    dispatch(fetchSubLocations());
  }, []);
  const data = subLocationData.map((subLocation, idx) => ({
    key: idx + 1,
    subLocationName: subLocation.subLocation,
    location: subLocation.location,
    _id: subLocation._id,
  }));

  const searchInput = useRef(null);
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
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      width: "4%",
    },
    {
      title: "Sub Location Name",
      dataIndex: "subLocationName",
      key: "subLocationName",
      width: "30%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Location Name",
      dataIndex: "location",
      key: "location",
      width: "30%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      dataIndex: "age",
      key: "action",
      width: "20%",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => handleEdit(record)}>Edit</button>
          <button onClick={() => handleDelete(record)}>Delete</button>
        </div>
      ),
    },
  ];

  // const data = null;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default DataTableSubLocation;
