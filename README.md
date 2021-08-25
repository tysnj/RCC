# REACT Coding Challenge

<a href="https://tmcnutt-veritone.surge.sh/" target="_blank">Check it out here!</a>

## Overview

OrderedList is a component that implements an alphabetically sorted list; including one button which enables the user to sort either in ascending or descending order, and a second button to permit the list to be cleared.

- After typing the new item, submit with the 'Enter' key.
- Sort between ascending (↓) and descending (↑) order by clicking the sorting button.
- Clear the list and text field by clicking the "Clear List" button

![GIF showing component actions](./docs/RCC.gif)


## Installation

1. `git clone` this [repo](https://github.com/tysnj/RCC) (`git clone git@github.com:tysnj/RCC.git`)
2. `cd` into project directory (`cd RCC`)
3. Run `npm i` to install the project dependencies
4. Run `npm start` to begin the development server & open the app in a browser window (on http://localhost:3000/)


## Technologies

- React, React Hooks
- Cypress
- UUID

## Reflections

- In spirit of learning and hardening best practices, I refactored the OrderedList elements into reusable components; creating a mini component library to assist solution.
- Experimented further with inline styling and explored benefits and drawbacks alike to this method vs .css files vs styled-components; especially in regard to responsive design with the addition of breakpoints.
