# Star Wars Search Application

## Description

This is a React-based application for searching and managing Star Wars entities using the public [Star Wars API](https://swapi.dev). The app provides an autocomplete search field that allows users to search for Star Wars characters, planets, starships, and more. The search results are displayed per category, and users can navigate to the category page for more detailed information.

### Main Features:

- **Search Field (Autocomplete)**: Search results are dynamically displayed as the user types. Results are categorized into entities such as films, people, planets, etc.
- **Category Pages**: After selecting a category, users can view a list of items (e.g., people) with the option to edit or delete them.
- **Create New and Edit Character**: On the people page, users can create new characters locally (without persistence).

## Technologies Used

- **React JS** with TypeScript
- **React Query** for API data fetching
- **Styled Components** for styling
- **Ant Design** for UI components

## App Screens

### Search Page Example

![Search Page](https://i.ibb.co/smtcq0d/Whats-App-Image-2024-11-21-at-11-43-43.jpg)

### People Category Page

![People Page](https://i.ibb.co/x235Sf9/Whats-App-Image-2024-11-21-at-11-45-07.jpg)

### Edit Character Modal

![Edit Character Modal](https://i.ibb.co/KyKCqqY/Whats-App-Image-2024-11-21-at-11-45-27.jpg)

## UX Improvements

The search input field allows users to quickly find Star Wars entities as they type, with categories displayed dynamically as they narrow down the results. To prevent unnecessary API calls, a `useDebounce` hook is used to delay the search request until the user stops typing, ensuring smoother and more responsive interactions.

## Usage

- Open Terminal and run `git clone https://github.com/matan3sh/esh-assignment`
- Go to `cd esh-assignment`
- Go to `eash-assignment` folder then install dependencies with `npm i` and **run** `npm run dev` running on `http://localhost:5173`
- Open Browser --> http://localhost:5173
