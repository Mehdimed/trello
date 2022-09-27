import React from "react";
import { TabsContext } from "../App.js";

export default function User() {

    const { tabs, updateTabs } = React.useContext(TabsContext);

  return (
    <div>
      <p>User</p>
    </div>
  )
}