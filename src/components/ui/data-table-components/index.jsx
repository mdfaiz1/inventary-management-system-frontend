
import { Table } from "antd";

import './styles.css'; // Assuming you have a CSS file for custom styles

const DataTable = ({data,columns }) => {
  
  
  
  
  return (
    <>
      
      <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        pagination={{
          pageSizeOptions: ["10", "20", "30"],
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSize: 10,
          defaultCurrent: 1,
        }}
        scroll={{ x: "max-content", y: 300 }}
      />
    </>
  );
};

export default DataTable;
