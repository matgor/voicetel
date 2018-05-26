// TABLE

$("#phone-table").tabulator({
    layout: "fitColumns",
    responsiveLayout: true,
    columns: [
        { title: "Imie", field: "imie", sortable: true },
        { title: "Nazwisko", field: "nazwisko", sortable: true },
        { title: "Forward", field: "forward", sortable: true },
        { title: "Number", field: "number", sortable: true, sorter: "number" },
        { title: "Dodano", field: "dodano", sortable: true },
    ],
});

// API REQUEST
$("#phone-table").tabulator("setData", "http://esense2.voicetel.pl:20005/getResults/", { firstName: "voicetel", lastName: "test" });

//FILTER
$("#filter-button").click(function() {
    $("#phone-table").tabulator("setFilter", "forward", "=", "yes");
});

//CLEAR FILTER

$("#clearFilter-button").click(function() {
    $("#phone-table").tabulator("clearFilter");
});