# SCSS Transition Mixin

This SASS mixin gives you more control over transition properties

## Install

Clone this repository or get the content from transition-mixin.scss file.

Then import the mixin to your scss file: `@import 'transition-mixin'`

## Usage

When the mixin has been imported you're able to use it in multiple ways:

```scss
.my-selector {
    @include transition('border-color', 'box-shadow', 'background-size');
}
```

Will print this:

```css
.my-selector {
  -webkit-transition: border-color 0.25s ease, box-shadow 0.25s ease, background-size 0.25s ease;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background-size 0.25s ease;
}
```

Or more individual:

```scss
$my-special-transition: (
    property: background-size,
    timing-function: cubic-bezier(0.44,-0.55, 0.24, 2.7)
);

@include transition('border-color', 'box-shadow', $my-special-transition);
```

Will print this:

```css
.my-selector {
  -webkit-transition: border-color 0.25s ease, box-shadow 0.25s ease, background-size 0.25s cubic-bezier(0.44, -0.55, 0.24, 2.7);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background-size 0.25s cubic-bezier(0.44, -0.55, 0.24, 2.7);
}
```

## Parameters

The mixin expects a key value map that looks like this:

```scss
$map: (
    duration: .25s,
    property: background-size,
    timing-function: ease-in,
)
```

All these values are optional. If one of these is missing, the default value will be used.

## Testing

For simple mixin tests I use [true](https://github.com/oddbird/true]).
Just type `$ yarn test` in your console.

It prints two selector blocks: assert and expect.

A test looks like this:
```css
/* Test: Outputs two fully declarations - for color and transform */
/*   ASSERT:    */
/*   OUTPUT   */
.test-output {
  transition: color 0.25s ease, transform 0.25s ease; }

/*   END_OUTPUT   */
/*   EXPECTED   */
.test-output {
  transition: color 0.25s ease, transform 0.25s ease; }
```