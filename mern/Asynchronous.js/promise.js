//

let hasMeeting = false;

let meeting = new Promise((resolve, rejected) => {
  if (!hasMeeting) {
    let meeting_info = {
      name: "Technical Meeting",
      location: "Mirpur-10",
      time: "10:00Pm",
    };
    resolve(meeting_info);
  } else {
    rejected(new Error("Meeting already schedule"));
  }
});

let addTocalender = (meeting_info) => {
  const result = `${meeting_info.name} has been scedule on ${meeting_info.location} at ${meeting_info.time} `;
  return Promise.resolve(result);
};

meeting
  .then(addTocalender)
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

console.log("hello"); //age hello print hobe then promise this maintain normal flow
