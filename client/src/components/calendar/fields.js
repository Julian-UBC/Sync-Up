export const FIELDS = [
  {
    name: "user_id",
    type: "select",
    // Should provide options with type:"select"
    options: [
      { id: 1, text: "Christopher", value: 1 },
      { id: 2, text: "Jonathan", value: 2 },
      { id: 3, text: "Julian", value: 3 },
    ],
    config: { label: "Add Participant" },
  },
  {
    name: "description",
    type: "input",
    config: { label: "Details", multiline: true, rows: 4 },
  },
  {
    name: "location",
    type: "input",
    config: {
      label: "Location",
      required: true,
      errMsg: "Please enter the location",
    },
  },
];
