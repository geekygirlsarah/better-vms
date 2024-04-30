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

        // Replace "Daily Target Reached" to add days in
        // Step 1: Find the days
        var weekItems = jQuery("div.daysFilledContainer").eq(0).find("div.dayFilled");
        var daysText = "";
        for (const iter of weekItems) {
            l($(iter).text());
            daysText += $(iter).text() + " - ";
        }
        daysText = daysText.substring(0, daysText.length-2);
        l(daysText);

        // Step 2: Add days to header
        jQuery("table#EventDetailTable1 thead tr.tablesorter-headerRow th.tablesorter-header.tablesorter-headerUnSorted.bootstrap-header div.tablesorter-wrapper div.tablesorter-header-inner")
        .eq(4)
        .html("<i class=\"tablesorter-icon\"></i>" +
        "Daily Target Reached<br />" + daysText
        ); 
        jQuery("table#EventDetailTable2 thead tr.tablesorter-headerRow th.tablesorter-header.tablesorter-headerUnSorted.bootstrap-header div.tablesorter-wrapper div.tablesorter-header-inner")
        .eq(4)
        .html("<i class=\"tablesorter-icon\"></i>" +
        "Daily Target Reached<br />" + daysText
        ); 

        // Step 3: Fix target days reached colors to be more accessible
        jQuery(".dayFilled").filter(function() {
            // Find Yellow (not filled all roles)
            var color = $(this).css("background-color");
            return color==="#ffce55" || color==="rgb(255, 206, 85)";
        }).css("background-color", "#f19fb8")
        .css("color", "#000000")
        .text("✖");
        jQuery(".dayFilled").filter(function() {
            // Find Green (roles filled)
            var color = $(this).css("background-color");
            return color==="#a0d468" || color==="rgb(160, 212, 104)";
        }).css("background-color", "#b9e192")
        .css("color", "#000000")
        .text("✔");

        // Step 4: Replace tooltip that says "yellow/green"
        jQuery(".dayFilled").parent().parent().attr("title", "Pink = Target Not Yet Reached\nGreen = Target Reached");
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

// This is the page with reports on it
if (url.includes("VolunteerDetails.aspx")) {
    l("Found VolunteerDetail page");
    try {
        // Make tables wider
        jQuery(".container").css("margin-left", "50px");
        jQuery(".container").css("margin-right", "50px");
        jQuery(".container").css("width", "auto");

        // Table with report data in it
        jQuery("div#ReportContainer").css("max-width", "100%");

        // Add description to YPP status
        let yppStatus = jQuery("span.fa:nth-child(2)").attr("data-original-title");
        jQuery("div.col-xs-5:nth-child(2) > div:nth-child(1) > h2:nth-child(1)")
        .append("<blockquote>" + yppStatus + "</blockquote>")
    }
    catch(e) {
        alert("BetterVMS Debug: " + e);
    }
}

