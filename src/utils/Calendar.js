const ICAL = require("ical.js");
let summaryList = null;

function parseEvents(icsString) {
  var jcalData = ICAL.parse(icsString);
  var comp = new ICAL.Component(jcalData);
  var allVEvents = comp.getAllSubcomponents("vevent");
  var remoteName = ["", "Online", "online", "Zoom", "zoom"];

  summaryList = allVEvents.map((event) => {
    var location = event.getFirstPropertyValue("location");

    return {
      uid: event.getFirstPropertyValue("UID"),
      summary: event.getFirstPropertyValue("summary"),
      date: event.getFirstPropertyValue("dtstart").toJSDate().toDateString(),
      location: remoteName.includes(location) ? "Remote" : location,
      description: event.getFirstPropertyValue("description"),
      url: event.getFirstPropertyValue("url"),
    };
  });
}

export default function fetchEvents(handleEvents) {
  if (summaryList) {
    handleEvents(summaryList);
    return;
  }
  fetch("https://mapdaily-cal-server.herokuapp.com/calendar")
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
