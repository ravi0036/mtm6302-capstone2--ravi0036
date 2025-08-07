# Capstone Project Part 4 – NASA Astronomy Picture of the Day Viewer

## Project Overview

This is a responsive and interactive web application that displays NASA’s Astronomy Picture of the Day (APOD). Users can select a date to view a picture from that day and explore recent pictures in a gallery. The app uses HTML, CSS, and JavaScript, including Fetch API for async data retrieval and localStorage for caching data.

## Features

- Displays NASA’s Astronomy Picture of the Day dynamically.
- Date picker form to fetch pictures from specific dates.
- Recent pictures gallery showing the last 3 days’ images.
- Responsive layout using Flexbox for mobile and desktop.
- Local storage caching for offline fallback and faster loading.
- Error handling and fallback to local images if API fails.
- Clean and accessible UI with consistent styling.

## Files

- `index.html` – Contains the webpage structure.
- `style.css` – Contains styling for layout, responsiveness, and theming.
- `script.js` – Handles Fetch API requests, DOM updates, form submission, and localStorage caching.

## How to Use

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.
3. Use the date picker to select any date (up to today) to fetch the NASA APOD.
4. Scroll down to explore recent pictures in the gallery.

## Resources Used

- NASA APOD API: https://api.nasa.gov/
- MDN Web Docs for Fetch API and localStorage
- Flexbox for responsive layout

## Challenges Faced

- Handling API rate limits and potential fetch failures, solved by caching in localStorage.
- Ensuring responsive layout worked smoothly across various devices using Flexbox.
- Managing asynchronous data loading and DOM updates without page refresh.
- Implementing graceful fallback to local images when the API is not reachable.

## Author

Ravina Rani  
Interactive Media Design  
Algonquin College  
