# Open Social Theme for Yeebo

Created by Beat and Arthur

## Changelog

- Added `yeebo_v1.theme` file with a function to set a class if the `complementary_top` region is empty (for usage in CSS).
- Mobile fix: Complementary section was sticking to header
- Bugfix Firefox mobile: sub menu position was totally off.
- Added styles for custom feedback teaser block that has been added after navigation update.
- Removed unwanted image label that was printed above the image in a page teaser.
- Added a `layout-tweaks.css` and fixed a bug on Firefox Mobile where the navigation was below the content.
- Added custom maintenance template with its own CSS file that has been defined in `themes/custom/yeebo_v1/yeebo_v1.libraries.yml`. Needs to be activated in `sites/default/default.settings.php` setting `$settings['maintenance_theme']` to `yeebo_v1`. Requires emptying of cache.
- Added group link to event- and topics sidebar
- Modified `.gitignore` and added `.editorconfig`
