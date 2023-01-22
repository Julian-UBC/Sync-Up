import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";
import { FIELDS } from "./fields";

import "./Calendar.css";

export const MiniCalendar = () => {
  return (
    <div className="w-1/3 h-[50vh] overflow-scroll">
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
