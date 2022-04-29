import { CommitSharp } from "@mui/icons-material";
// import { events } from "../resource/event";

const ICAL = require("ical.js");

var events;

fetch("http://localhost:8000/ical.ics")
  .then(
    (res) => res.text()
  )
  .then(
    (res) => {
      events = res;
    },
    (err) => {
      console.log("fetch failed", err);
    }
  );

var jcalData = ICAL.parse(events);
var comp = new ICAL.Component(jcalData);
var allVevents = comp.getAllSubcomponents("vevent");

var summaryList = [];

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

export let s = summaryList;
