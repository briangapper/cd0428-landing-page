# Landing Page Project

The **Landing Page Project** is the result of an exercise that builds on a static website and makes it interactive for the user. It has been developed by Ollivier Anneix.

## Table of Contents

* [Instructions]
* [Development]
* [Usage]
* [Dependencies]

## Development

The code for this project has been written with **Visual Studio Code**.

The development consisted of automatically creating the navigation bar based on the number of sections in the HTML file. In addition, the navigation items should be able to scroll down to the relevant section when the user clicks on them. The sections should be collapsible and a scroll-to-top button should appear when the user is at the bottom of the page.

Finally, the navigation item should be highlighted when the corresponding section is in the viewport of the screen.

### JavaScript

The JavaScript file has been structured in the following code:

* [GLOBAL_VARIABLE] => variables that are used in multiple functions.
* [BUILDER] => js code that builds HTML elements, in this case the navigation bar.
* [FUNCTIONS] => functions that ensure smooth scrolling where needed and and addition of active classes.
* [EVENTS] => siv different event listeners.
* [PERFORMANCE] => performance functions.

### CSS

The CSS files has been strcutured in the following code:

* [BODY_General] => general rules for body.
* [TYPOGRAPHY_General] => general rules for typography.
* [LAYOUT_General] => general rules for layout.
* [STYLES_General] => specific styling of all elements (header, navbar, collapsible, btn, footer).
* [RULES_General] => rules for pseudo-elements.
* [STATE_RULES] => rules for active state elements.

### HTML

The HTML has been added with the following code:

- Each section also has an upper button sibling element, which represents the collapsible.
- At the bottom of all sections, a scroll-to-top anchor has been added.

## Usage

To test the website, simply open the **index.html** file in any browser and start playig around with the navigation bar. If interested, check out the HTML code in the developer tool (press F12) to see how the 'active' classes are added or removed in the sections and navigation items when they are in the viewport.

Again in the developer tool, also try to simulate different screen sizes to check the responsiveness of the website (phones, tables, laptops).

## Dependencies

Some code of this project has been insipired by UdaCity's Knowledge Forum, such as:

- makeActiv() function
- hide navigation bar when not scrolling

The rest of the code is a compilation of a lot of internet research with various examples tailored to the requirements of this project.