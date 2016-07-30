# base methods

Here is complete documentation for the base class methods.

#### `astype(dtype, casting='unsafe')`

Cast values to the specified type.

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

See also
--------
   elementwise

#### `dottimes(other)`

Elementwise multiplication.

See also
--------
   elementwise

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

- **`axis`** `tuple or int` `optional` `default=(0,)`

   Axis or multiple axes to filter along.

#### `first()`

Return first element.

#### `iscached()`

Get whether object is cached.

#### `map(func, **kwargs)`

Map a function over elements.

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

dtype: numpy.dtype, optional, default=None
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

See also
--------
   elementwise

#### `npartitions()`

Get number of partitions.

#### `plus(other)`

Elementwise addition.

See also
--------
   elementwise

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

Enable in-memory caching.

#### `var()`

Variance of values computed along the appropriate dimension.
# data methods

Here is complete documentation for the data class methods.

#### `astype(dtype, casting='unsafe')`

Cast values to the specified type.

#### `clip(min=None, max=None)`

Clip values above and below.

- **`min`** `scalar or array-like`

   Minimum value. If array, will be broadcasted

- **`max`** `scalar or array-like`

   Maximum value. If array, will be broadcasted.

#### `count()`

Explicit count of elements.

#### `dotdivide(other)`

Elementwise divison.

See also
--------
   elementwise

#### `dottimes(other)`

Elementwise multiplication.

See also
--------
   elementwise

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

- **`axis`** `tuple or int` `optional` `default=(0,)`

   Axis or multiple axes to filter along.

#### `first()`

Return first element.

#### `map(func, **kwargs)`

Map a function over elements.

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

dtype: numpy.dtype, optional, default=None
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

See also
--------
   elementwise

#### `plus(other)`

Elementwise addition.

See also
--------
   elementwise

#### `std()`

Standard deviation computed of values along the appropriate dimension.

#### `sum()`

Sum of values computed along the appropriate dimension.

#### `toarray()`

Return all records to the driver as a numpy array

This will be slow for large datasets, and may exhaust the available memory on the driver.

#### `tolocal()`

Convert data to local mode.

#### `tospark()`

Convert data to Spark.

#### `var()`

Variance of values computed along the appropriate dimension.
