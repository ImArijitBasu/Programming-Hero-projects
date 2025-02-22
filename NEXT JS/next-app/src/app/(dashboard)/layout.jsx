import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 border">
<ul className="px-5 py-2">
    <li>button</li>
    <li>button</li>
    <li>button</li>
    <li>button</li>
    <li>button</li>
    <li>button</li>
</ul>
      </div>
      <div className="col-span-9 border">{children}</div>
    </div>
  );
};

export default DashboardLayout;
