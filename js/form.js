/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

Group Type: Limit options to "flexible" only and set to checked.

Note: Other fields are hidden using CSS

*/

jQuery(document).ready(function() {
    $group_type_container = jQuery("#edit-group-type--wrapper");
    $flexible_input = $group_type_container.find('input[id^="edit-group-type-flexible"]').prop('checked', true);
});

