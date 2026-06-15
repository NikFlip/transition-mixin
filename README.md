# SCSS Transition Mixin

A small Sass mixin for composing one or more CSS transitions.

## Installation

```shell
npm install transition-mixin
```

Load the package with the Sass module system:

```scss
@use 'pkg:transition-mixin' as transition;
```

## Usage

Pass one or more CSS property names to use the default duration and timing
function:

```scss
@use 'pkg:transition-mixin' as transition;

.button {
    @include transition.transition-mixin(
        border-color,
        box-shadow,
        background-size
    );
}
```

This produces:

```css
.button {
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background-size 0.25s ease;
}
```

Use a map when a transition needs individual settings:

```scss
@use 'pkg:transition-mixin' as transition;

$background-transition: (
    property: background-size,
    duration: 0.4s,
    delay: 0.1s,
    timing-function: cubic-bezier(0.44, -0.55, 0.24, 2.7),
);

.button {
    @include transition.transition-mixin(
        border-color,
        box-shadow,
        $background-transition
    );
}
```

This produces:

```css
.button {
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background-size 0.4s 0.1s cubic-bezier(0.44, -0.55, 0.24, 2.7);
}
```

## Options

Each map supports the following optional keys:

| Key | Default | Description |
| --- | --- | --- |
| `property` | `all` | CSS property to transition |
| `duration` | `0.25s` | Transition duration |
| `delay` | omitted | Delay before the transition starts |
| `timing-function` | `ease` | CSS transition timing function |

Property names and map values may be quoted or unquoted. CSS functions and
custom properties such as `cubic-bezier()` and `var()` are supported.

At least one property name or options map is required.

## Development

Install the development dependencies and run the test suite:

```shell
npm ci
npm test
```

The tests use [Sass True](https://www.oddbird.net/true/) with Node's built-in
test runner.

## License

[MIT](LICENSE)
