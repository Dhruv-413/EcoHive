import { useState } from "react";
import { Sidebar } from "../Components/Sidebar";
import { Transaction } from "../Components/Transaction";
import { Credits } from "../Components/Credits";
import { Table } from "../Components/Table";
import {Events} from "../Components/Events";
import {Settings} from "../Components/Settings";

export const Dashboard = ({entity}) => {
  const [selectedComponent, setSelectedComponent] = useState("overview");

  const renderContent = () => {
    switch (selectedComponent) {
      case "overview":
        return (
          <>
            <div className="flex justify-between mx-auto">
              <Transaction entity={entity} />
              <Credits entity={entity} />
            </div>
            <div className="mt-8">
              <Table />
            </div>
          </>
        );
      case "events":
        return <Events />;
      case "settings":
        return <Settings entity={entity}/>;
      default:
        return (
          <>
            <div className="flex justify-between mx-auto">
              <Transaction entity={entity} />
              <Credits entity={entity} />
            </div>
            <div className="mt-8">
              <Table />
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-white h-screen flex overflow-hidden">
      <Sidebar entity={entity} setSelectedComponent={setSelectedComponent} />
      <div className="flex-1 m-12 ml-18 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};
