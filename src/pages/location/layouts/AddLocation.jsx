import React, { useState } from "react";
import { Button, Modal } from "antd";

const AddLocation = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [locationName, setLocationName] = useState("");
  
  const handleSave = (e) => {
    e.preventDefault();
    // console.log(saved);
    setLocationName("");
    
  };

  return (
    <div className="">
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Add Location
      </Button>
      <Modal
        centered
        open={modal2Open}
        // onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        
        <div class="bg-white text-gray-500 w-full  md:p-6 p-4 text-left text-sm rounded  shadow-black/10">
          <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">
            Add Location
          </h2>
          <label for="email">Location Name</label>
          <input
            id="email"
            class="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
            type="text"
            placeholder="Enter Location Name"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSave}
            class="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddLocation;
