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
    - 7.2. Design lists with CSS
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

 example --> *7_StylingWithCSS/Part_1/styles/style.css*

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


Analyze font in web browser
 ![Preview](7_StylingWithCSS/images/WebbrowserFonts.PNG)


### Display fonts with web fonts `@font-face`
With `@font-face` it is possible to use fonts that are not installed on the user's computer. The disadvantage is that the loading time is extended.

   ```
    @font-face { 
        font-family: Arial;
        src: url('path/to/font.ttf') format('truetype');
    }
   ```

#### Embed license-free fonts from Google into the website
The fonts from Google Fonts can be found at [Google Fonts](https://fonts.google.com/).

 example --> *7_StylingWithCSS/Part_2/styles/style.css*

   ```
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');
    body {
        font-family: 'Roboto', sans-serif;
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_2.JPG)


Other license-free and commercial providers of web fonts
- [FontLibrary](http://fontlibrary.org)
- [FontsForWeb](http://fontsforweb.com)


#### Use symbols with icon fonts
There are several providers of icon fonts, one of the most popular is [Font Awesome](https://fontawesome.com/). There you can find a lot of icons that are needed for a website.

First, the CSS file must be included in the HTML document.

   ```
    <link href="styles/all.css" rel="stylesheet">
   ```

Now the font symbols from Font Awesome can be used in the HTML document with the tag `<i>`.

   ```
    <i class="fas fa-home"></i>
   ```

The font size can be adjusted with `font-size`.

   ```
    <i class="fas fa-home" style="font-size:3em;"></i>
   ```

Colors can be changed with `color`.

   ```
    <i class="fas fa-home" style="color:blue;"></i>
   ```

Font Awesome's font icons have special classes that can be used to adjust the icon size with `fa-2x`, `fa-3x`, `fa-4x` and `fa-5x` relative to their container.

   ```
    <i class="fas fa-home fa-2x"></i>
   ```

For symbols with a trademark, the prefix `fab` must be used instead of `fas`. The `b` stands for brand, the `s` in `fas` for solid. 

An overview of Font Awesome's symbols can be found at [Font Awesome - Gallery](https://fontawesome.com/icons?d=gallery). Other interesting information about Font Awesome can be found here [Font Awesome - How to use](https://fontawesome.com/how-to-use/web-fonts-with-css).

 example --> *7_StylingWithCSS/Part_3*

 ![Preview](7_StylingWithCSS/images/Preview_7_3.JPG)

There are other providers besides Font Awesome:
- [Genericons](http://genericons.com)
- [Icomoon](http://icomoon.io)
- [Fontello](http://fontello.com)
- [Entypo](http://www.entypo.com)


!Note!: Many of these icons and fonts are free, but still have some kind of license , which should be read through before using them on the website.


### Set font size with `font-size`

#### Keywords for font size
CSS provides predefined font size keywords such as `small`, `x-small`, `xx-small`, `medium` (base font size), `large`, `x-large` and `xx-large`. These are absolute values. There are also the keywords `smaller` and `larger`, which are relative values (relative to the parent element). They are rarely used, because the actual font size can only be controlled to a limited extent.


#### Relative font sizes with `em`.
An easy way to adjust the font size for the whole document is to set `font-size` for the *body* element. If `font-size: 1em;` (1em = 100%) is set, the default value of the web browser is used. 
The fact that a relative font size of the *body* element controls the font size for the elements of the web page through inheritance, this option is popular in practice. But it is exactly this inheritance that can make adjusting font sizes a bit more complex if not taken care of.
 example --> *7_StylingWithCSS/Part_4/styles/styleA.css*

   ```
    body {
        font-family: Arial, Verdana, Helvetica, sans-serif;
        font-size: 0.95em;
        /* or 95% */
    }

    footer, header {
        background-color: palegreen;
        border: 1px solid black;
        padding: 2% 2%;
        text-align: center;
    }

    article {
        font-family: Georgia, Times, serif;
        font-size: 0.8em;
        /* or 80% */
    }

    p {
        font-size: 0.8em;
        /* or 80% */
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_4A.JPG)


#### Set font size with `rem`
The problem with inheritance of relative values that have with font size with `em` no longer occurs with `rem` (=root em). Since it inherits to the highest root element `<html>` instead of the font size of the corresponding parent element.
 example --> *7_StylingWithCSS/Part_4/styles/styleB.css*

   ```
    html { 
        font-size: 100%; 
    }

    body { 
        font-family: Arial, Verdana, Helvetica, sans-serif;
        font-size: 0.9375rem;
    }

    footer, header {
        background-color: palegreen;
        border: 1px solid black;
        padding: 2% 2%;
        text-align:center;
    }

    article {
        font-family: Georgia, Times, serif;
        font-size: 0.8125rem;  
    }

    p { 
        font-size: 0.8125rem; 
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_4B.JPG)


#### Fixed values with `px` and `pt`
With `px` (pixel) you have full control over the text size. Due to the different screen sizes and resolutions, however, e.g. 16px do not look the same everywhere. I.e. with a higher pixel density on an inch the pixels inevitably becomes smaller.
The unit `pt` (point) is more suitable for printing, if a print version is created with CSS.


#### the responsive units `vw` and `vh`
The *viewport units* with `vw` (view width) and `vh` (view height), are relative to the screen dimensions. This assigns a size to an element, which is calculated in relation to the width and height of the viewport. `1vw` corresponds to 1% of the width of the viewport, exactly the same applies to `vh` (corresponds to 1% of the height of the viewport).
Additionally there are the units `vmin` and `vmax`, which refer to the height or width and use the smaller or larger value.
 example --> *7_StylingWithCSS/Part_4/styles/styleD.css*

   ```
    html { 
        font-size: calc(100% + 0.5vw); 
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_4D.JPG)


### Italic and bold fonts with `font-style` and `font-weight`
An italic font can be rendered with the CSS property `font-style` and the value `italic`. If a font does not have an `italic` cut, the web browser will try to italicize it with `oblique`. The default value is `normal`.

The CSS property `font-weight` can be used to define the thickness of the font. The `bold` value defines a bold font style. The default value is `normal`. Besides `bold` there are also the values `bolder` and `lighter`, as well as the numeric values `100`, `200` to `900` (in steps of 100). `400` stands for `normal` and `700` for `bold`.

 example --> *7_StylingWithCSS/Part_5/styles/style.css*

   ```
    .italic {
        font-style: italic;
    }

    .oblique {
        font-style: oblique;
    }

    .normal {
        font-style: normal;
    }

    .weight-normal {
        font-weight: normal;
    }

    .weight-bold {
        font-weight: bold;
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_5.JPG)


### Create small caps with `font-variant`
With `font-variant` and the value `small-caps` the text will be converted to all uppercase, keeping the size of the lowercase letters.

 example --> *7_StylingWithCSS/Part_6/styles/style.css*

   ```
    .cap  { 
        font-variant:small-caps; 
    }

    .vers { 
        text-transform:uppercase;
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_6.JPG)


### Line spacing with `line-height`
The line spacing defines the distance from baseline to baseline and can be set with the CSS property `line-height`. The line spacing is important for the readability of longer text passages.

 example --> *7_StylingWithCSS/Part_7/styles/style.css*

   ```
    .p-75 { 
        line-height: 75%; 
    }

    .p-100 { 
        line-height: 100%; 
    }

    .p-150 { 
        line-height: 150%; 
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_7.png)


#### The shorthand with `font`
The CSS property `font` is a shorthand notation for the properties in that order `font-style`, `font-weight`, `font-size/line-height`, and `font-family`.

   ```
    p {
        font: italic normal bold 1.2em/120% Georgia, Times, serif;
    }
   ```


### Letter and word spacing with `letter-spacing` and `word-spacing`
If the spacing between the individual letters is to be changed, this can be done with the CSS property `letter-spacing`. This is not suitable for normal continuous text, because it can worsen the readability. It makes more sense for headlines or texts with capital letters only.
With `word-spacing` you can control the spacing between words. By default the spacing is `0.25em`, but this also depends on the web browser.

 example --> *7_StylingWithCSS/Part_8/styles/style.css*

   ```
    .letterspace { 
        letter-spacing: 0.2em; 
    }

    .wordspace { 
        word-spacing: 0.9em;
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_8.png)


### Text alignment with `text-align` 
Important for a good reading flow of texts is the alignment, which can be controlled with the CSS property `text-align`. There are four values for this:
`left` : This aligns the text left, which is usually the default alignment of the web browser. 
`right` : This aligns the text to the right.
`center` : This will center the text, this is good for headings, poems or short texts.
`justify` : This aligns the text in justified text, where the individual lines are of equal width and flush left and right.

 example --> *7_StylingWithCSS/Part_9/styles/style.css*

   ```
    .left { 
        text-align: left; 
    }

    .right { 
        text-align: right; 
    }

    .center { 
        text-align: center; 
    }

    .justify { 
        text-align: justify; 
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_9.png)


### Vertical alignment with `vertical-align`
The CSS property `vertical-align` is used for vertical alignment of inline elements and is not suitable for block elements.

 example --> *7_StylingWithCSS/Part_10/styles/style.css*

   ```
    .vtop {
        vertical-align: top;
    }

    .vmiddle {
        vertical-align: middle;
    }

    .vbottom {
        vertical-align: bottom;
    }

    .vsuper {
        vertical-align: super;
    }

    .vsub {
        vertical-align: sub;
    }

    .vsub-05em {
        vertical-align: -0.5em;
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_10.JPG)


### Indent text with `text-indent`
With the CSS property `text-indent` the first line of text can be indented with a positive value or pulled out with a negative value to maintain the reading flow. This is usually used for books and magazines, but not so much for web pages. 

 example --> *7_StylingWithCSS/Part_11/styles/style.css*

   ```
    .p-ident {  
        font-size: 1em;
        text-indent: 1.3em;
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_11.JPG)


### Underline and line-through text with `text-decoration`

 example --> *7_StylingWithCSS/Part_12/styles/style.css*

   ```
    .underline { text-decoration: underline; }

    .a-no-underline { text-decoration: none; }

    .line-through { text-decoration: line-through; }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_12.JPG)


### Case sensitive text with `text-transform`
With the CSS property `text-transform` and the value `uppercase` the text is displayed in upper case and with `lowercase` in lower case. With `capitalize` only the first letter is displayed as uppercase.

 example --> *7_StylingWithCSS/Part_13/styles/style.css*

   ```
    .uppercase { text-transform: uppercase; }

    .lowercase { text-transform: lowercase; }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_13.JPG)


### Add a shadow to the text with `text-shadow`

   ```
    text-shadow: 5px    /* Horizontal offset */
                 5px    /* Vertical offset */
                 5px    /* Shadow gradient radius */
                 gray;  /* Shadow color */
   ```

 example --> *7_StylingWithCSS/Part_14/styles/style.css*

   ```
    .shadow-one { 
        text-shadow: 3px 3px 5px gray; 
    }

    .shadow-two { 
        color: lightgray;
        text-shadow: 0px -2px 1px black;
    }

    .shadow-three {
        color: #ff0000b3;
        text-shadow:
            15px -15px 5px yellow,
            -5px 15px 8px orange;
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_14.JPG)


### Split text with `column-count` into several columns
With the CSS property `column-count` it is possible to split a text automatically into a multi-column set. Is very useful for wide screens, and increases the readability of the text. With `column-gap` the gap between the columns is controlled.

 example --> *7_StylingWithCSS/Part_15/styles/style.css*

   ```
    .column {
        column-count: 2;
        column-gap: 1.5rem;
    }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_15.JPG)


Instead of `column-count` also `column-width` can be used. This will automatically create as many columns depending on this width as they have space in the viewport of the web browser. With the CSS property `columns` there is also a shorthand notation for the two properties `column-width` and `column-count`.

   ```
    .column {
        /*columns: 20em 2;*/
        columns-width: 250px;
        column-gap: 1.5rem;
   ```


## 7.2. Design lists with CSS

### Bullets with `list-style-type`
For ordered lists with `<ul>` the following values are available:
- `none` : no bullets
- `disc` : filled circle, default
- `circle` : empty circle
- `square` : square character

For ordered lists with `<ol>` the following values are available:
- `none` : no numbering
- `decimal` : numbering like 1., 2,. 3. ...
- `decimal-leading-zero` : numbering like 01., 02., 03. ...
- `lower-alpha` and `lower-latin` : numbering like a., b., c. ...
- `upper-alpha` and `upper-latin` : numbering like A., B., C. ...
- `lower-roman` : numbering like i., ii., iii., iv. ...
- `upper-roman` : numbering like I., II., III., IV. ...

 example --> *7_StylingWithCSS/Part_16/styles/style.css*

   ```
    ul { list-style-type: square; }

    ol { list-style-type: upper-roman; }
   ```

 ![Preview](7_StylingWithCSS/images/Preview_7_16.JPG)


### Images as bullets with `list-style-image`









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