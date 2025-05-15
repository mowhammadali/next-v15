import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Account Layout</p>
      {children}
    </div>
  );
};

export default Layout;
