# Style guide

## Mood
Bold, loud and minimal. One electric lime color fills the page, dark text sits on it, and there is lots of empty space. It should feel fast, sporty and confident, not busy. This comes from the landonorris.com reference.

## Colors
Every color is a theme color. Use the names in the templates, never raw values.

| Role | Theme name | Value | Used for |
| --- | --- | --- | --- |
| Page background | base-100 | lime, `oklch(94% 0.23 123)` | The main page |
| Slightly deeper lime | base-200 / base-300 | `oklch(90% 0.22 123)` / `oklch(85% 0.2 123)` | Sections, cards, borders |
| Text | base-content | near-black, `oklch(22% 0.01 120)` | All normal text |
| Main dark | primary | near-black, `oklch(22% 0.01 120)` | Header, banner, main buttons |
| Text on dark | primary-content | lime, `oklch(94% 0.23 123)` | Text on the header and banner |
| Second dark | secondary | deep olive, `oklch(35% 0.08 125)` | Secondary buttons |
| Highlight | accent | white, `oklch(100% 0 0)` | Small highlights |
| Dark surface | neutral | near-black, `oklch(22% 0.01 120)` | Footers, badges |
| Messages | info, success, warning, error | blue, green, amber, red | Alerts only |

All text and background pairs are dark on lime or lime on dark, so contrast is very high (WCAG AA or better).

## Fonts
Barlow Condensed (from Google Fonts), a tall, tight, sporty font. Headings are bold and UPPERCASE with tight line spacing. Body text uses the same font at regular or medium weight. The italic bold weight is loaded in case you want a slanted logo or word, like the slanted "l" on landonorris.com.

## Shapes and spacing
- Sharp corners (almost no rounding) so everything feels crisp.
- Flat: no shadows, no textures.
- Borders are thick (2px) when used.
- Generous space around things. Let one big element breathe instead of filling the page.

## Layout ideas
- One big, centered word or title on a full-color page (landonorris.com).
- A tiny uppercase label at the bottom center, like a signature.
- Dark bars (header, banner) against the lime page for strong contrast.
- Stack everything in one column on phones and open it up on larger screens.

## Avoid
- Copying the reference's logo, name, texts or exact layout. Only the feel is borrowed.
- Raw color values in templates.
- Lime text on a lime background, or gray text on lime (it is hard to read).
- Many different colors at once. Stay with lime, near-black and a little white.
- Rounded, soft, shadowy "bubbly" shapes.
