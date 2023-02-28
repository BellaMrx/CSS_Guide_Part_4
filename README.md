# CSS Guide Part 4

Detailed guide about CSS (all basics for CSS).

Part 4 contains : Styling with CSS, testing and organizing.

The code examples in the guide can be found in the listed folders.

-----------------------------------------------------------------------------------------

## Contents
### [CSS Guide Part I]()
1. Introduction to CSS
    - 1.1. History of CSS 
    - 1.2. Principle of CSS application
    - 1.3. Embedding CSS into HTML
    - 1.4. Analyze CSS in the web browser
2. The CSS selectors
    - 2.1. The simple selectors of CSS
    - 2.2. Combinators
3. Inheritance and the cascade 
    - 3.1 The principle of inheritance in CSS
    - 3.2. Understanding the control system of the cascade
    - 3.3. Pass values to CSS properties
### [CSS Guide Part II]()
4. The box model of CSS 
    - 4.1. The classic box model
    - 4.2. The newer alternative box model of CSS
    - 4.3. Design boxes
    - 4.4. CSS Vendor Prefixes
5. CSS positioning
    - 5.1. Positioning with the CSS property `position`
    - 5.2. Stacking with `z-index`
    - 5.3. Floating boxes with `float`
    - 5.4. Flexible boxes (flexbox model)
### [CSS Guide Part III]()
6. Responsive layouts with CSS
    - 6.1. Theoretical basic knowledge about responsive web design
    - 6.2. Create a responsive layout
    - 6.3. Responsive layouts with images
    - 6.4. The CSS Grid Layout
    - 6.5. Change the behavior of HTML elements with `display`
    - 6.6. Calculation with CSS and the `calc()` function
### CSS Guide Part IV
7. Styling with CSS
    - 7.1. Text design with CSS
8. Testing and organizing


--------------------------------------------------------------------------------------------

# 7. Styling with CSS
Here you can find some more examples to make websites more beautiful or readable.


## 7.1. Text design with CSS
CSS offers a lot of features to design and customize text for websites.


### Select fonts with `font-family`

    ```
     body { font-family: Arial;}
    ```

This puts the *Arial* font between `<body>` and `</body>`. I.e. the whole HTML document uses the font *Arial*. In order to be able to use this font, it must be installed locally on the visitor's system (*Arial* is installed on most computers). However, it is also possible to offer alternative fonts, separated by a comma (*font-stack*).

    ```
     body { font-family: Arial, Calibri, sans-serif; }
    ```

If no font is installed on the computer, the default font of the web browser is used. If a font contains a space, then it must be indicated by quotation marks e.g. `"Courier New"`. To be on the safe side, it is recommended to specify a generic font (e.g. `sans-serif`) at the end.

Overview of generic fonts
| Font Class | Meaning                                                                       | Examples  |
| ---------- | ----------------------------------------------------------------------------- | --------- |
| serif | here are small fine lines or ticks at the end of the letter stroke across the basic direction | Times, Times New Roman, Georgia, Bookman |
| sans-serif | are sans serif fonts, with a straight line at the end of the stroke. | Arial, Helvetica, Lucida, Verdana |
| monospace | are fonts with a fixed width, where all letters have the same width | Andale Mono, Courier, Courier New, Fixed |
| cursive | this font is intended to give the impression of a cursive script | Comic Sans MS, Florence, Parkavenue, Monotype Corsiva |
| fantasy | are often decorative ornamental fonts that can be used for creative purposes | Brushstroke, Impact, Haettenschweiler, Oldtown |

 example --> *7_StylingWithCSS/Part_1/style.css*

   ```
    body {
        font-family: Arial, Verdana, Helvetica, sans-serif;
    }

    .footer, .header {
        background-color: lightyellow;
        border: 1px solid black;
        padding: 2% 2%;
        text-align: center;
        font-family: cursive;
    }

    .article {
        font-family: Georgia, Times, serif;
    }
   ```
 ![Preview](7_StylingWithCSS/images/Preview_7_1.JPG)


#### Analyze font in web browser
 ![Preview](7_StylingWithCSS/images/WebbrowserFonts.PNG)


### Display fonts with web fonts `@font-face`
With `@font-face` it is possible to use fonts that are not installed on the user's computer. The disadvantage is that the loading time is extended.

    ```
     @font-face { 
        font-family: Arial;
        src: url('path/to/font.ttf') format('truetype');
        }
    ```

### Embed license-free fonts from Google into the website
The fonts from Google Fonts can be found at [Google Fonts](https://fonts.google.com/).

    ```
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');
    body {
        font-family: 'Roboto', sans-serif;
    }

    .footer, .header {
        background-color: lightyellow;
        border: 1px solid black;
        padding: 2% 2%;
        text-align: center;
    }
    ```

 ![Preview](7_StylingWithCSS/images/Preview_7_2.JPG)


#### Other license-free and commercial providers of web fonts
- [FontLibrary](http://fontlibrary.org)
- [FontsForWeb](http://fontsforweb.com)


### Use symbols with icon fonts






------------------------------------------------------------------------------------------------

This is the end of CSS Guide Part 4. 

The other parts you can find here:
- [CSS Guide Part I]().
- [CSS Guide Part II]().
- [CSS Guide Part III]().

On my Twitter account [@bella_mrx](https://twitter.com/bella_mrx) you can find more useful stuff about HTML and web development. 

Or check out my [GitHub](https://github.com/BellaMrx) profile.


Thanks for reading. 
I hope you enjoyed it or at least learned something.