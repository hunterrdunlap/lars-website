# Lars' Website

This repository contains the code for Lars' professional website, designed to showcase his consultancy services.

## Overview

This website was created by adapting an existing template and customizing it to meet Lars' specific needs for his consultancy business. The site aims to present Lars' professional services, expertise, and contact information in a clean and accessible format.

## Development

- **Template**: The site is based on a pre-existing template that has been modified to fit Lars' branding and requirements
- **Customization**: Various elements have been tailored to highlight Lars' specific consultancy offerings
- **Responsive Design**: The site is optimized for viewing on various devices and screen sizes

## Usage

This website serves as Lars' professional online presence, allowing potential clients to:

- Learn about his consultancy services
- Review his expertise and qualifications
- Contact him for business inquiries

## Editing Website Content

This website is built using HTML files. The text content you see on the live website is written directly within these files. If you need to make text updates (e.g., change a description, add a new publication, update your Vita), you will need to edit the relevant HTML file.

**Key Files for Content:**

- `index.html`: The main homepage content, including the "About Me" section.
  - Example: "About Me" text is between lines 409 and 451.
- `leistungen.html`: Contains descriptions of the services offered.
  - Example: Service descriptions are within `<article>` tags, like lines 327-348.
- `publikationen.html`: Lists all publications. Each publication is typically within a `<div class="publication-entry">` tag.
  - Example: Publication entries start around line 333.
- `vita.html`: Contains the details of your professional and academic career.
  - Example: Vita entries are often within `<li>` tags, like lines 661-691.

**How to Edit:**

1.  **Identify the File:** Determine which page contains the text you want to change (Home, Services, Publications, Vita) and open the corresponding `.html` file (e.g., `vita.html` for Vita updates).
2.  **Find the Text:** Open the file in a simple text editor (like Notepad on Windows, TextEdit on Mac, or more advanced editors like VS Code or Sublime Text). Use the search function (Ctrl+F or Cmd+F) to find the specific sentence or phrase you want to edit.
3.  **Edit Carefully:** The text you see on the website is usually located _between_ HTML tags. For example, you might see `<p>This is a paragraph of text.</p>`. You would edit the text "This is a paragraph of text." Be careful not to delete the `<p>` or `</p>` tags themselves, as this can break the page layout.
4.  **Check for Languages:** Many text elements have versions for both German and English using `data-lang-de` and `data-lang-en` attributes within the HTML tag, like this example from `index.html`:
    ```html:index.html
    startLine: 401
    endLine: 407
    ```
    In these cases, you need to edit the text _between_ the opening tag (`<span>`) and the closing tag (`</span>`), like "Über mich" in the example above. Make sure to update both the German and English text if necessary, or just the one relevant to the language you are editing. The text directly between the tags is usually the default (German in this case).
5.  **Save the File:** After making your changes, save the HTML file.
6.  **Upload (If Necessary):** If you are editing the files locally, you will need to upload the modified file(s) to the web server where the website is hosted, replacing the old version. The exact method depends on how the website is hosted.

**Important:** Always back up the original file before making edits, just in case something goes wrong. It's best to change only the text content and avoid altering the surrounding HTML structure unless you are comfortable with HTML.

## Setup

Instructions for local development and deployment will be added as the project progresses.

## Credits

- Original template: Template Monster
- Customization and development: Hunter Dunlap

## Project TODO List

### Content & Assets

- [ ] **Select Images:** Choose appropriate and high-quality images for the following pages and sections:
  - `index.html`: Header background (`style` attribute on line 242), main header image (`images/lars-haffke-header-placeholder.jpg` on line 248), "About Me" section image (`images/lars-haffke-about-placeholder.jpg` on line 460).
  - `leistungen.html`: Replace placeholder industry logos (`images/logos/industry-placeholder-*.png` between lines 424 and 492).
  - `publikationen.html`: Consider if a relevant header or section image is needed.
  - `vita.html`: Consider if a relevant header or section image is needed.
- [ ] **Select Logos:** Choose appropriate and high-quality logos for the "References & Media" section on `index.html` (replace `images/logos/placeholder-*.png` between lines 496 and 540).
- [ ] **Add Detailed Descriptions:** Fill in the "Detaillierte Beschreibung folgt in Kürze" sections on `leistungen.html`:
  - Externer Geldwäschebeauftragter (lines 306-324)
  - Beratung in Geldwäscheprävention (lines 327-348)
  - Schulungen (lines 351-372)
  - Vorträge (lines 373-394)

### Styling & Layout

- [ ] **Fix Image/Logo Spacing:** Review and adjust CSS or layout for consistent and visually appealing spacing around images and logos across all pages. Pay attention to:
  - Header logo (`index.html` lines 79-85, `vita.html` lines 144-150, `leistungen.html` lines 102-108, `contacts.html` lines 58-66).
  - Reference logos (`index.html` lines 493-542).
  - Industry logos (`leistungen.html` lines 421-498, check `.industry-box` styles lines 40-61).
  - Content images (`index.html` lines 247-249, 459-464).
- [ ] **Improve `publikationen.html` Styling:** Enhance the visual presentation of the publications list. Consider:
  - Reviewing existing styles (`publikationen.html` lines 40-97).
  - Improving typography, spacing, and visual hierarchy between entries and sections.
  - Potentially adding icons or other visual cues for different publication types or links.

### Project Management & Feedback

- [ ] **Gather Feedback:** Schedule a meeting with Lars to review the current state of the website.
- [ ] **Discuss Content Management:** Determine how Lars wants to manage updates (e.g., adding new publications, updating vita). Explore options like a simple CMS, markdown files, or direct HTML editing training.
- [ ] **Empower Lars:** Based on the discussion, provide necessary training or tools for Lars to maintain the site content himself, if desired.
