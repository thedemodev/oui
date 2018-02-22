# About OUI

## Philosophy
OUI, Optimizely's UI library, is a collection of CSS/HTML/JS elements and objects meant to be combined and extended to create larger interfaces, influenced by Harry Robert's work on inuit.css and Johnathon Snooks [SMACSS](https://smacss.com/), among others. The goals of this library are to provide code that is…

1. **Abstracted.** Component names shouldn't be derived from the content they contain. Class names should convey structural meaning.

2. Reusable. Components should be generic enough to be reused throughout the site. They should make no assumptions what page/view they will be used on. Problems solved in one area should be easily applied elsewhere.

3. Mixable. Components should be able to join together to create larger blocks.

4. Powered by variables. Nearly all design elements — colors, fonts, spacings, shadows — should be defined using the pre-existing variables.

By achieving these goals our code becomes...

1. Scalable. Reusing patterns means new elements can be created faster and with minimal additional CSS.

2. Consistent. Not only will developers be able to read each other's code more easily we'll have a better end-user experience across the product.

3. Smaller and DRYer. Since we're constantly reusing low-level objects to build larger ones we cut down on CSS bloat. Less code means fewer bugs.


### Writing Good Classes

In order to write HTML and CSS classes that provide meaning for developers we're using the BEM syntax. BEM stands for Block, Element, Modifier and is becoming a popular approach to building CSS and HTML that describes an object's internal relationships.

```
<div class="grid grid--gutter">
    <div class="grid__cell">
        <div class="docs-dummy-content">grid cell</div>
    </div>
    <div class="grid__cell">
        <div class="docs-dummy-content">grid cell</div>
    </div>
    <div class="grid__cell">
        <div class="docs-dummy-content">grid cell</div>
    </div>
</div>
```

*In the example above...*

- **Block** is represented by grid and is the parent class of the object.
- **Elements** are children of the object. They are named by joining the parent class name and a child class with a double underscore. In this case grid__cell.
- **Modifiers** are variations on the default. In this case we have a grid--gutter. This provides spacing between the cells.

Though somewhat verbose, this syntax makes it easy to determine the child/parent relationships between bits of code, especially when different objects are mixed together. It can be tricky naming elements so some judgment is required. This becomes easier over time.

For a longer discussion Harry Roberts provides a good introduction to the syntax.

Futher Reading
Building & Maintaining OUI: Part 1 and Part 2. Article about the making of OUI, published at CSS Tricks.
MindBEMding – getting your head ’round BEM syntax. Introduction to BEM.
About HTML semantics and front-end architecture. What is a meaningful class name?
OOCSS + Sass = The best way to CSS. Some examples of bulding on existing objects using @extend in Sass.
Hacks for dealing with specificity. Some more technical details around specificity.
Normalising designs for better quality CSS (Video). A conference presentation about normalizing designs and the process from design to HTML.