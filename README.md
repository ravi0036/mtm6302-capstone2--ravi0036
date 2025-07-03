#  NASA API - Capstone Project (Part 3)

This is the prototype for the NASA API-themed website created using HTML and CSS. The layout was based on a mockup developed in Part 2, and this version ensures a clean, responsive user interface that displays a "Picture of the Day" and a gallery of celestial images.

---

## Steps Taken to Create the Prototype

1. **Project Setup**
   - Created a new `part-3` branch from `part-2`.
   - Organized files with clear structure:
     - `index.html` – Main content
     - `style/style.css` – Styling
     - `images/` – All assets (e.g., `nasa-logo.jpg`, `galaxy.png`, etc.)
     - `README.md` – Project report

2. **Header Design**
   - Used a centered layout with a NASA logo and heading.
   - Included a placeholder for navigation.
   - Applied navy blue background (`#0b3d91`) to match NASA branding.

3. **Picture of the Day Section**
   - Used a **flex container** to align image and description side by side on larger screens.
   - On small screens, layout switches to vertical using media queries.
   - Applied box shadow, border-radius, and spacing for visual appeal.

4. **Gallery Section**
   - Built using **flexbox layout** with equal spacing between cards.
   - Each card displays an image, heading, and paragraph.
   - On smaller screens, gallery stacks vertically with spacing preserved.

5. **Responsiveness**
   - Applied media queries (`@media max-width: 768px`) to:
     - Stack sections vertically
     - Resize images appropriately
     - Ensure mobile usability

6. **Footer**
   - Full-width footer with consistent branding
   - Background color matches header for visual cohesion

---

##  Resources Used

- [MDN Web Docs – Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/flexbox)
- [MDN Web Docs – Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [CSS Box Shadow Generator](https://cssmash.com/css-box-shadow-generator/)
- [W3C HTML Validator](https://validator.w3.org/)
- Figma mockup (from Part 2)

---

## Challenges Faced

- **Responsive Alignment of "Picture of the Day":**
  Initially, the image and description did not align properly on smaller screens. This was resolved using `flex-direction: column` in a media query.

- **Image Scaling & Cropping:**
  Some images stretched or overflowed. This was fixed using `object-fit: cover` and setting fixed heights with `border-radius` for smooth presentation.

- **Spacing Between Cards:**
  Ensuring equal spacing and alignment in the gallery took fine-tuning using `gap`, `flex: 1`, and consistent padding.

---

## Validation and Testing

- HTML code passed validation with no critical errors.
- CSS tested in:
  - Chrome
  - Firefox
  - Edge
- Responsive design verified using DevTools (mobile, tablet, desktop views).

---



## Project Structure

