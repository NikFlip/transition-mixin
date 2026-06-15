const assert = require('node:assert/strict');
const path = require('node:path');
const { describe, it } = require('node:test');
const sass = require('sass');
const sassTrue = require('sass-true');

sassTrue.runSass(
  { describe, it, sass },
  path.join(__dirname, 'test.scss'),
);

describe('transition-mixin validation', () => {
  it('rejects calls without transitions', () => {
    assert.throws(
      () =>
        sass.compileString(
          `
            @use 'transition-mixin' as transition;

            .example {
              @include transition.transition-mixin();
            }
          `,
          { loadPaths: [__dirname] },
        ),
      /requires at least one transition/,
    );
  });
});
