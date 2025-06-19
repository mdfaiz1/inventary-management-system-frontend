import React from "react";
import { Input } from "../../../components/ui/Input";
import { UploadOutlined } from "@ant-design/icons";
import { Select, Upload } from "antd";
const AddProduct = () => {
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage || Upload.LIST_IGNORE;
  };
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      {/* <Input
        label="Product Name"
        inputType="text"
        placeholder="Enter product name"
        value={inputValue}
        onChange={handleInputChange}
        requiredInput={true}
      /> */}

      <form action="" className="bg-white">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="w-full  p-5 bg-white rounded-lg font-mono">
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select Location
            </label>
            <Select
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              showSearch
              placeholder="Select a person"
              filterOption={(input, option) => {
                var _a;
                return (
                  (_a =
                    option === null || option === void 0
                      ? void 0
                      : option.label) !== null && _a !== void 0
                    ? _a
                    : ""
                )
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }}
              options={[
                { value: "1", label: "Jack" },
                { value: "2", label: "Lucy" },
                { value: "3", label: "Tom" },
              ]}
            />
          </div>
          <div className="w-full  p-5 bg-white rounded-lg font-mono">
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select Location
            </label>
            <Select
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              showSearch
              placeholder="Select a person"
              filterOption={(input, option) => {
                var _a;
                return (
                  (_a =
                    option === null || option === void 0
                      ? void 0
                      : option.label) !== null && _a !== void 0
                    ? _a
                    : ""
                )
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }}
              options={[
                { value: "1", label: "Jack" },
                { value: "2", label: "Lucy" },
                { value: "3", label: "Tom" },
              ]}
            />
          </div>
          <div className="w-full  p-5 bg-white rounded-lg font-mono">
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select Location
            </label>
            <Select
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              showSearch
              placeholder="Select a person"
              filterOption={(input, option) => {
                var _a;
                return (
                  (_a =
                    option === null || option === void 0
                      ? void 0
                      : option.label) !== null && _a !== void 0
                    ? _a
                    : ""
                )
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }}
              options={[
                { value: "1", label: "Jack" },
                { value: "2", label: "Lucy" },
                { value: "3", label: "Tom" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full  md:flex-row">
          <Input
            label="Product Name"
            inputType="text"
            placeholder="Enter product name"
            value={inputValue}
            onChange={handleInputChange}
            requiredInput={true}
          />
          <Input
            label="Product Price"
            inputType="number"
            placeholder="Enter product price"
            value={inputValue}
            onChange={handleInputChange}
            requiredInput={true}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <Input
            label="Quantity"
            inputType="number"
            placeholder="Enter Quantity"
            value={inputValue}
            onChange={handleInputChange}
            requiredInput={true}
          />
          <Input
            label="Serial Number"
            inputType="text"
            placeholder="Enter Serial Number"
            value={inputValue}
            onChange={handleInputChange}
            requiredInput={true}
          />
          <Input
            label="date of purchase"
            inputType="date"
            placeholder="Enter Date of Purchase"
            value={inputValue}
            onChange={handleInputChange}
            requiredInput={true}
          />
        </div>
        <div className="w-full  p-5 bg-white rounded-lg font-mono">
          <label
            htmlFor=""
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Upload Product Image
          </label>
          <Upload
            listType="picture"
            className="w-full"
            multiple={true}
            accept="image/*" // filters in file dialog
            beforeUpload={beforeUpload} // prevents non-image files
          >
            <button
              type="button"
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            >
              <UploadOutlined /> Click to Upload
            </button>
          </Upload>
        </div>
        <div className="p-5">
          <button className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
            Submit
            <span class="text-slate-300/85"> ─ Product</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
