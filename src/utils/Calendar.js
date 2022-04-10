import { events } from "../resource/event";

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

  if (date.month === 4 && date.day === 7) {
    // summaryList.push(summary);
    summaryList.push({
      summary: summary,
      date: JSDate.toDateString(),
      location: location,
      url: url,
    });

    // summaryList.summary = summary;
    // summaryList.date = JSDate.toDateString();
    // summaryList.location = location;
    // summaryList.url = url;
    // console.log(summary);
    // console.log(JSDate.toDateString());
    // console.log(location);
    // console.log(url);
    // console.log("");
  }
}

// console.log(summaryList);

export let s = summaryList;
