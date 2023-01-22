import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";
import { FIELDS } from "./fields";

import "./Calendar.css";

export const MiniCalendar = () => {
  return (
    <div className="w-full h-[calc(100vh-434px)] overflow-scroll">
      <Scheduler
        events={EVENTS}
        fields={FIELDS}
        view="day"
        navigation={false}
        disableViewNavigator={true}
      />
    </div>
  );
};
