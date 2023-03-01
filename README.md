# Landing Page Project

## Table of Contents

* [Instructions]
* [Development]
* [Dependencies]

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Development

### JavaScript

The JavaScript file has been structured in the following code:

* [GLOBAL_VARIABLE] => variables that are used in multiple functions.
* [BUILDER] => js code that builds HTML elements, in this case our navigation bar.
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

## Dependencies

Some code of this project has been insipired by UdaCity's Knowledge Forum, such as:

- makeActiv() function
- hide navigation bar when not scrolling

The rest of the code is a compilation of a lot of internet research with various examples tailored to the
the requirements of this project.

## Unanswered Questions

the project has been designed so that as many requirements as possible are met. However, there are still few unanswered questions:

1. In the development strategy, it is asked if there is an event listener set up for building navigation. How could this be beneficial? Whether or not sections exist in the HTML file is already somewhat of a condition for the navigation bar to be built.
