import React from "react";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <>      
      <main className="main">
           <Header />
          {children}
      </main>
      <footer className="footer bg-dark">
        Copyright © 2021 Shop App, Inc. All rights reserved.
      </footer>
    </>
  );
};

export default AppLayout;
