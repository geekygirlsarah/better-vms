// import jquery from 'jquery';


var url = window.location.href;

function l(msg) {
    console.log("BetterVMS: " + msg);
}

l("Started");
l("URL: " + url);

// This is the Dashboard/page you pick your event from
if (url.includes("Default.aspx")) {
    l("Found Default page");
    try {
        jQuery(".container").css("margin-left", "5%");
        jQuery(".container").css("margin-right", "5%");
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
        jQuery(".container").css("margin-left", "5%");
        jQuery(".container").css("margin-right", "5%");
        jQuery(".container").css("width", "auto");

        // Show entire table heights
        jQuery("#groupDetail1").css("max-height", "");
        jQuery("#groupDetail2").css("max-height", "");

        // Fix unaccessible color selection
        //jQuery("div.dayFilled").css("background","")
    }
    catch(e) {
        alert("BetterVMS Debug: " + e);
    }
}

// This is the page with a role on it
if (url.includes("RoleScheduling.aspx")) {
    l("Found RoleScheduling page");
    try {
        // Make tables wider
        jQuery(".container").css("margin-left", "5%");
        jQuery(".container").css("margin-right", "5%");
        jQuery(".container").css("width", "auto");

        // Schedule table
        // jQuery("#ScheduleView").css("max-width", "");
        // jQuery("#ScheduleTable").css("width", "auto");
        // jQuery("#ScheduleView").css("width", "auto");
        // jQuery("#ScheduleDiv").css("width", "auto");
        // jQuery("#groupDetail2").css("width", "auto");
        // jQuery("#ScheduleView").css("width", "auto");

        // List of unassigned applicants
        // jQuery("#groupDetailUnassigned").css("max-height", "");

        // jQuery("#ActionMessageDiv").css("width","");

        jQuery("div").css("max-width", "");
        //jQuery("div").css("width", "auto");

        // Remove scroll bar on list of applicants
        jQuery("tbody").css("max-height", "");
    }
    catch(e) {
        alert("BetterVMS Debug: " + e);
    }
}

// This is the page with reports on it
if (url.includes("ReportViewer.aspx")) {
    l("Found ReportViewer page");
    try {
        // Make tables wider
        jQuery(".container").css("margin-left", "50px");
        jQuery(".container").css("margin-right", "50px");
        jQuery(".container").css("width", "auto");

        // Table with report data in it
        jQuery("div#ReportContainer").css("max-width", "100%");
    }
    catch(e) {
        alert("BetterVMS Debug: " + e);
    }
}

