import { events } from "../../../resource/event";

const ICAL = require("ical.js");

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

  summaryList.push({
    summary: summary,
    date: JSDate.toDateString(),
    location: location,
    url: url,
  });
}

export let s = summaryList;