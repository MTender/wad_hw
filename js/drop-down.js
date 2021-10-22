$(function() {
    $('#current-user-pfp').on('click', function() {
        let dropdown = $('#myDropdown');
        if (dropdown.css("display") == "none") {
            dropdown.css("display", "block");
        } else {
            dropdown.css("display", "none");
        }
    });
});