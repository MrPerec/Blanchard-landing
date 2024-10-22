# Blanchard-landing
Blanchard landing layout training project

##html:
<ul>
  <li>all decorative elements are made through css</li>
  <li>the semantics are observed, the elements header, footer, main, nav, section, time, address, etc. are used.</li>
  <li>The markup is not overloaded, there are no unnecessary wrappers of elements</li>
  <li>Classes have meaningful names - by purpose, not by appearance</li>
  <li>The markup of the same element is not duplicated for different screen resolutions </li>
  <li>the html code complies with all the rules of the codestyle (indentation, tabulation, attribute order, etc.). </li>
</ul>
css:
- CSS selectors lack cascade (nesting)
- The indents in the project are made according to the recommendations
- Normalize.css was used, default margins are not reset via * (all resets via classes)
- the css code complies with all the rules of the codestyle (indentation, tabulation, order of css properties, etc.)
- The !important directive is not used
- The number of breakpoints is no more than 6
Appearance:
- The document display corresponds to the layout
- The layout is made by Pixel Perfect, the maximum difference from the layout is 3 pixels
- The layout passes the overflow test for both text and blocks
- The layout is displayed the same way in the following browsers: Chrome, Edge, Safari, Opera, Firefox
- All interactive elements have states :hover, :active, :focus (all states are smooth)
Adaptive layout:
- The site looks neat on any width from 320 and above. 
- Pixel perfect is implemented on breakpoints corresponding to the site layouts. 
- There is no horizontal scrolling
- Adaptive rubber
- Safe breakpoints are used 
BEM:
- There are no elements without a block
- Missing elements of the element (block__elem__elem)
- There are no modifiers without a block or element
- There are no modifier modifiers
- BEM entity naming styles do not mix
Other:
- The folder structure is organized correctly: styles in the css folder, scripts in js, images in img, libraries in libs, etc.
- Cursor: pointer has been added to interactive elements (if it is not present initially)
- The fonts have a fallback font, such as sans-serif
- The images are named in English according to the meaning
Availability:
- The website interface is accessible from the keyboard
- The website interface is available when using the screen reader
