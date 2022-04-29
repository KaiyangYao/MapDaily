import { CommitSharp } from "@mui/icons-material";
// import { events } from "../resource/event";

const ICAL = require("ical.js");
let summaryList = null;

function parseEvents(icsString) {
  var jcalData = ICAL.parse(icsString);
  var comp = new ICAL.Component(jcalData);
  var allVevents = comp.getAllSubcomponents("vevent");

  summaryList = [];

  for (var event of allVevents) {
    // console.log(event);
    var summary = event.getFirstPropertyValue("summary");
    var date = event.getFirstPropertyValue("dtstart"); // ICAL.Date object
    var JSDate = date.toJSDate();
    var location = event.getFirstPropertyValue("location");
    location = location === "" ? "Remote" : location;
    var url = event.getFirstPropertyValue("url");
    var description = event.getFirstPropertyValue("description");

    summaryList.push({
      summary: summary,
      date: JSDate.toDateString(),
      location: location,
      description: description,
      url: url,
    });
  }
}

export default function fetchEvents(handleEvents) {
  if (summaryList) {
    handleEvents(summaryList);
    return;
  }
  fetch("http://localhost:8000/ical.ics")
    .then((res) => res.text())
    .then(
      (res) => {
        parseEvents(res);
        handleEvents(summaryList);
      },
      (err) => {
        console.log("fetch failed", err);
      }
    );
}
