import { Spin } from "antd";
import React from "react";

const Spiner = () => {
  return (
    <div className="flex justify-center items-center h-[30vh] flex-col">
      <Spin size="large"/>
    </div>
  );
};

export default Spiner;
