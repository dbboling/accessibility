# ARIA jQuery Accordion
An accessibile accordion to fulfill ADA requirements.

When one panel opens, all others close. Also can close all panels by selecting opened panel.

Can use TAB key to select next panel and SHIFT + TAB to select previous panel. ENTER can be used to open/close panels or go to selected link (if selected list item has an anchor).

On click and TAB, focus is set to selected tab.

Additionally, page scrolls opened tab to the top of the page by default (can be disabled in aria_accordion.js by setting "scrollToPanel" to false). Can offset the scroll position to account for fixed headers via the "pageOffset" variable.
