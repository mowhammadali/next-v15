import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Auth User Layout</p>
      {children}
    </div>
  );
};

export default Layout;
