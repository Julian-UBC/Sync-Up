export const FIELDS = [
  {
    name: "user_id",
    type: "checkbox",
    // Should provide options with type:"select"
    options: [
      { id: 1, text: "John", value: 1 },
      { id: 2, text: "Mark", value: 2 },
    ],
    config: {
      label: "User",
      required: true,
      errMsg: "Please Select User",
    },
  },
  {
    name: "description",
    type: "input",
    default: "",
    config: { label: "Details", multiline: true, rows: 4 },
  },
  {
    name: "participant",
    type: "input",
    default: "",
    config: {
      label: "Add Participant",
    },
  },
  {
    name: "location",
    type: "input",
    default: "",
    config: {
      label: "Location",
      required: true,
      errMsg: "Please Select Location",
    },
  },
];
