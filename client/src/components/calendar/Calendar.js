import React from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";
import { FIELDS } from "./fields";

export const Calendar = () => {
  return (
    <div className="p-10">
      <Scheduler events={EVENTS} fields={FIELDS} />
    </div>
  );
};
