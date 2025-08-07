# CSS Units

This project demonstrates the various CSS units with real-time HTML and CSS examples. Each unit has its own CSS file and dynamic content that appears when selected from the sidebar.

## Units Explained

### px
- Absolute unit.
- Represents a single pixel on the screen.
- Commonly used for fixed dimensions like buttons or borders.

### em
- Relative unit.
- Based on the font-size of the parent element.
- Useful for scalable spacing or font sizing within components.

### rem
- Relative unit.
- Based on the root (html) element's font-size.
- Useful for consistent global scaling.

### vw / vh
- Relative to 1% of the viewport width (vw) or height (vh).
- Great for full-screen layouts or responsive sizing.

### vmin / vmax
- vmin: 1% of the smaller viewport dimension.
- vmax: 1% of the larger viewport dimension.
- Useful for responsive squares or fullscreen background.

### percent (%)
- Relative to the parent element’s size.
- Width: 50% means half of parent width.
- Height: Only works when parent has a defined height.
- Nested percentages are relative to the immediate parent.

### print units (pt, cm, in, mm, pc)
- Absolute units.
- Recommended for print media.
- Not reliable on screen displays.

### unitless
- You can use unitless `0` for properties like `padding: 0`, `margin: 0`.

## How to Use

1. Open `index.html` in a browser.
2. Click on a unit name from the left sidebar.
3. The main section will load the example and apply that unit's CSS dynamically.
