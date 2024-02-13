// import jquery from 'jquery';


var url = window.location.href;

function l(msg) {
    console.log("BetterVMS: " + msg);
}

l("Started");
l("URL: " + url);

// This is the Dashboard/page you pick your event from
if (url.includes("Default.aspx")) {
    l("Found EventDetails page");
    try {
        jQuery(".container").css("margin-left", "50px");
        jQuery(".container").css("margin-right", "50px");
        jQuery(".container").css("width", "auto");
    }
    catch(e) {
        alert("BetterVMS Debug: " + e);
    }
}

// This is the page with all of the roles
if (url.includes("EventDetails.aspx")) {
    l("Found EventDetails page");
    try {
        // Make tables wider
        jQuery(".container").css("margin-left", "50px");
        jQuery(".container").css("margin-right", "50px");
        jQuery(".container").css("width", "auto");

        // Show entire table heights
        jQuery("#groupDetail1").css("max-height", "");
        jQuery("#groupDetail2").css("max-height", "");
    }
    catch(e) {
        alert("BetterVMS Debug: " + e);
    }
}

// This is the page with a role on it
if (url.includes("RoleScheduling.aspx")) {
    l("Found EventDetails page");
    try {
        // Make tables wider
        jQuery(".container").css("margin-left", "50px");
        jQuery(".container").css("margin-right", "50px");
        jQuery(".container").css("width", "auto");

        // Schedule table
        jQuery("#ScheduleTable").css("width", "auto");
        jQuery("#ScheduleView").css("max-width", "");

        // List of unassigned applicants
        jQuery("#groupDetailUnassigned").css("max-height", "");
    }
    catch(e) {
        alert("BetterVMS Debug: " + e);
    }
}

