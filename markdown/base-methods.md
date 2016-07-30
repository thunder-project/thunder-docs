# base methods

Here is complete documentation for methods available on all data types.

#### `astype(dtype, casting='unsafe')`

Cast values to the specified type.

- **`dtype`** `str or dtype`

   Typecode or data-type to which the array is cast.
- **`casting`** `['no'` `'equiv'` `'safe'` `'same_kind'` `'unsafe']` `optional`

   Controld what kind of data casting may occur. Defaluts to 'unsafe' for backwards compatibility.
'no' means the data types should not be cast at all.
'equiv' means only byte-order changes are allowed.
'safe' means only casts which can preserve values are allowed.
'same_kind' means only safe casts or casts within a kind, like float64 to float32, are allowed.
'unsafe' means any data conversions may be done.

#### `cache()`

Enable in-memory caching (Spark only).

#### `clip(min=None, max=None)`

Clip values above and below.

- **`min`** `scalar or array-like`

   Minimum value. If array, will be broadcasted

- **`max`** `scalar or array-like`

   Maximum value. If array, will be broadcasted.

#### `coalesce(npartitions)`

Coalesce data (Spark only).

- **`npartitions`** `int`

   Number of partitions after coalescing.

#### `compute()`

Force lazy computations to execute for datasets backed by Spark (Spark only).

#### `count()`

Explicit count of elements.

#### `dotdivide(other)`

Elementwise divison.

#### `dottimes(other)`

Elementwise multiplication.

#### `element_wise(other, op)`

Apply an elementwise operation to data.

Both self and other data must have the same mode.
If self is in local mode, other can also be a numpy array.
Self and other must have the same shape, or other must be a scalar.

- **`other`** `Data or numpy array`

   Data to apply elementwise operation to

- **`op`** `function`

   Binary operator to use for elementwise operations, e.g. add, subtract

#### `filter(func)`

Filter array along an axis.

Applies a function which should evaluate to boolean,
along a single axis or multiple axes. Array will be
aligned so that the desired set of axes are in the
keys, which may require a transpose/reshape.

- **`func`** `function`

   Function to apply, should return boolean

#### `first()`

Return first element.

#### `iscached()`

Get whether object is cached (Spark only).

#### `map(func, value_shape=None, dtype=None, with_keys=False)`

Apply an array -> array function across an axis.

Array will be aligned so that the desired set of axes
are in the keys, which may require a transpose/reshape.

- **`func`** `function`

   Function of a single array to apply. If with_keys=True,
function should be of a (tuple, array) pair.

- **`axis`** `tuple or int` `optional` `default=(0,)`

   Axis or multiple axes to apply function along.

- **`value_shape`** `tuple` `optional` `default=None`

   Known shape of values resulting from operation. Only
valid in spark mode.

- **`dtype`** `numpy dtype` `optional` `default=None`

   Known shape of dtype resulting from operation. Only
valid in spark mode.

- **`with_keys`** `bool` `optional` `default=False`

   Include keys as an argument to the function

#### `max()`

Maximum of values computed along the appropriate dimension.

#### `mean()`

Mean of values computed along the appropriate dimension.

#### `min()`

Minimum of values computed along the appropriate dimension.

#### `minus(other)`

Elementwise subtraction.

#### `npartitions()`

Get number of partitions (Spark only).

#### `plus(other)`

Elementwise addition.

#### `repartition(npartitions)`

Repartition data (Spark only).

- **`npartitions`** `int`

   Number of partitions after repartitions.

#### `std()`

Standard deviation computed of values along the appropriate dimension.

#### `sum()`

Sum of values computed along the appropriate dimension.

#### `toarray()`

Return all records to the driver as a numpy array

This will be slow for large datasets, and may exhaust the available memory on the driver.

#### `tolocal()`

Convert data to local mode.

#### `tordd()`

Return an RDD for datasets backed by Spark (Spark only).

#### `tospark()`

Convert data to Spark.

#### `uncache()`

Disable in-memory caching (Spark only).

#### `var()`

Variance of values computed along the appropriate dimension.
