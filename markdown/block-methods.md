# block methods

Here is complete documentation for methods on blocks.

#### `collect_blocks()`

Collect the blocks in a list

#### `count()`

Explicit count of the number of items.

For lazy or distributed data, will force a computation.

#### `first()`

Return the first element.

#### `map_generic(func)`

Apply an arbitrary array -> object function to each blocks.

#### `map(func, value_shape=None, dtype=None)`

Apply an array -> array function to each block

#### `toarray()`

Convert blocks to local ndarray

#### `toimages()`

Convert blocks to images.

#### `toseries()`

Converts blocks to series.
