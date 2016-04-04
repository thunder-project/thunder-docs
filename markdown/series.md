# series

Description of series objects
## loading

#### `fromarray(values, index=None, npartitions=None, engine=None)`

Load Series object from a local numpy array.

Assumes that all but final dimension index the records,
and the size of the final dimension is the length of each record,
e.g. a (2, 3, 4) array will be treated as 2 x 3 records of size (4,)

- **`values`** `array-like`

   An array containing the data.

- **`index`** `array` `optional` `default = None`

   Index for records, if not provided will use (0,1,...,N)
where N is the length of each record.

- **`npartitions`** `int` `default = None`

   Number of partitions for parallelization (Spark only)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

#### `frombinary(path, ext='bin', conf='conf.json', dtype=None, shape=None, skip=0, index=None, engine=None, credentials=None)`

Load a Series object from flat binary files.

- **`path`** `string URI or local filesystem path`

   Directory to load from, can be a URI string with scheme
(e.g. "file://", "s3n://", or "gs://"), or a single file,
or a directory, or a directory with a single wildcard character.

- **`ext`** `str` `optional` `default = 'bin'`

   Optional file extension specifier.

- **`conf`** `str` `optional` `default = 'conf.json'`

   Name of conf file with type and size information.

- **`dtype`** `dtype or dtype specifier` `default 'float64'`

   Numerical type to use for data after converting from text.

- **`shape`** `tuple or list` `optional` `default = None`

   Shape of data if known, will be inferred otherwise.

- **`skip`** `int` `optional` `default = 0`

   Number of items in each record to skip.

- **`index`** `array` `optional` `default = None`

   Index for records, if not provided will use (0, 1, ...)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

- **`credentials`** `dict` `default = None`

   Credentials for remote storage (e.g. S3) in the form {access: ***, secret: ***}

#### `fromexample(name=None, engine=None)`

Load example series data.

Data must be downloaded from S3, so this method requires
an internet connection.

- **`name`** `str`

   Name of dataset, options include 'iris' | 'mouse' | 'fish'.
If not specified will print options.

#### `fromlist(items, accessor=None, index=None, dtype=None, npartitions=None, engine=None)`

Create a Series object from a list of items and optional accessor function.

Will call accessor function on each item from the list,
providing a generic interface for data loading.

- **`items`** `list`

   A list of items to load.

- **`accessor`** `function` `optional` `default = None`

   A function to apply to each item in the list during loading.

- **`index`** `array` `optional` `default = None`

   Index for records, if not provided will use (0,1,...,N)
where N is the length of each record.

- **`dtype`** `string` `default = None`

      Data numerical type (if provided will avoid check)

- **`npartitions`** `int` `default = None`

   Number of partitions for parallelization (Spark only)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

#### `fromrandom(shape=(100, 10), npartitions=1, seed=42, engine=None)`

Generate gaussian random series data.

- **`shape`** `tuple`

   Dimensions of data.

- **`npartitions`** `int`

   Number of partitions with which to distribute data.

- **`seed`** `int`

   Randomization seed.

#### `fromrdd(rdd, nrecords=None, shape=None, index=None, dtype=None)`

Load Series object from a Spark RDD.

Assumes keys are tuples with increasing and unique indices,
and values are 1d ndarrays. Will try to infer properties
that are not explicitly provided.

- **`rdd`** `SparkRDD`

   An RDD containing series data.

- **`shape`** `tuple or array` `optional` `default = None`

   Total shape of data (if provided will avoid check).

- **`nrecords`** `int` `optional` `default = None`

   Number of records (if provided will avoid check).

- **`index`** `array` `optional` `default = None`

   Index for records, if not provided will use (0, 1, ...)

- **`dtype`** `string` `default = None`

      Data numerical type (if provided will avoid check)

#### `fromtext(path, ext='txt', dtype='float64', skip=0, shape=None, index=None, npartitions=None, engine=None, credentials=None)`

Loads Series data from text files.

Assumes data are formatted as rows, where each record is a row
of numbers separated by spaces e.g. 'v v v v v'. You can
optionally specify a fixed number of initial items per row to skip / discard.

- **`path`** `string`

   Directory to load from, can be a URI string with scheme
(e.g. "file://", "s3n://", or "gs://"), or a single file,
or a directory, or a directory with a single wildcard character.

- **`ext`** `str` `optional` `default = 'txt'`

   File extension.

- **`dtype`** `dtype or dtype specifier` `default 'float64'`

   Numerical type to use for data after converting from text.

- **`skip`** `int` `optional` `default = 0`

   Number of items in each record to skip.

- **`shape`** `tuple or list` `optional` `default = None`

   Shape of data if known, will be inferred otherwise.

- **`index`** `array` `optional` `default = None`

   Index for records, if not provided will use (0, 1, ...)

- **`npartitions`** `int` `default = None`

   Number of partitions for parallelization (Spark only)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

- **`credentials`** `dict` `default = None`

   Credentials for remote storage (e.g. S3) in the form {access: ***, secret: ***}


## methods

#### `aggregate_by_index(function, level=0)`

Aggregrate data in each record, grouping by index values.

For each unique value of the index, applies a function to the group
indexed by that value. Returns a Series indexed by those unique values.
For the result to be a valid Series object, the aggregating function should
return a simple numeric type. Also allows selection of levels within a
multi-index. See select_by_index for more info on indices and multi-indices.

- **`function`** `function`

   Aggregating function to map to Series values. Should take a list or ndarray
as input and return a simple numeric value.

- **`level`** `list of ints` `optional` `default=0`

   Specifies the levels of the multi-index to use when determining unique index values.
If only a single level is desired, can be an int.

#### `between(left, right)`

Select subset of values within the given index range

Inclusive on the left; exclusive on the right.

- **`left`** `int`

   Left-most index in the desired range

right: int
Right-most index in the desired range

#### `center(axis=1)`

Center series data by subtracting the mean
either within or across records

- **`axis`** `int` `optional` `default = 0`

   Which axis to center along, within (1) or across (0) records

#### `correlate(signal)`

Correlate series data against one or many one-dimensional arrays.

- **`signal`** `array` `or str`

   Signal(s) to correlate against, can be a numpy array or a
MAT file containing the signal as a variable

#### `count_by_index(level=0)`

Count the number for each unique index value (across levels, if multi-index)

#### `count()`

Explicit count of the number of items.

For lazy or distributed data, will force a computation.

#### `cov()`

Compute covariance of a distributed matrix.

- **`axis`** `int` `optional` `default = None`

   Axis for performing mean subtraction, None (no subtraction), 0 (rows) or 1 (columns)

#### `filter(func)`

Filter by applying a function to each series.

#### `first()`

Return the first element.

#### `flatten()`

Reshape all dimensions but the last into a single dimension

#### `gramian()`

Compute gramian of a distributed matrix.

The gramian is defined as the product of the matrix
with its transpose, i.e. A^T * A.

#### `map(func, index=None, with_keys=False)`

Map an array -> array function over each series

#### `max_by_index(level=0)`

Compute maximum values for each unique index value (across levels, if multi-index)

#### `max()`

Compute the max across images

#### `mean_by_index(level=0)`

Compute means for each unique index value (across levels, if multi-index)

#### `mean_by_panel(length)`

Compute the mean across fixed sized panels of each record.

Splits each record into panels of size `length`,
and then computes the mean across panels.
Panel length must subdivide record exactly.

- **`length`** `int`

   Fixed length with which to subdivide.

#### `mean()`

Compute the mean across images

#### `median_by_index(level=0)`

Compute medians for each unique index value (across levels, if multi-index)

#### `min_by_index(level=0)`

Compute minimum values for each unique index value (across level, if multi-index)

#### `min()`

Compute the min across images

#### `reduce(func)`

Reduce over series.

#### `sample(nsamples=100, seed=None)`

Extract random sample of series.

- **`nsamples`** `int` `optional` `default = 100`

   The number of data points to sample.

- **`seed`** `int` `optional` `default = None`

   Random seed.

#### `select_by_index(val, level=0, squeeze=False, filter=False, return_mask=False)`

Select or filter elements of the Series by index values (across levels, if multi-index).

The index is a property of a Series object that assigns a value to each position within
the arrays stored in the records of the Series. This function returns a new Series where,
within each record, only the elements indexed by a given value(s) are retained. An index
where each value is a list of a fixed length is referred to as a 'multi-index',
as it provides multiple labels for each index location. Each of the dimensions in these
sublists is a 'level' of the multi-index. If the index of the Series is a multi-index, then
the selection can proceed by first selecting one or more levels, and then selecting one
or more values at each level.

- **`val`** `list of lists`

   Specifies the selected index values. List must contain one list for each level of the
multi-index used in the selection. For any singleton lists, the list may be replaced
with just the integer.

- **`level`** `list of ints` `optional` `default=0`

   Specifies which levels in the multi-index to use when performing selection. If a single
level is selected, the list can be replaced with an integer. Must be the same length
as val.

- **`squeeze`** `bool` `optional` `default=False`

   If True, the multi-index of the resulting Series will drop any levels that contain
only a single value because of the selection. Useful if indices are used as unique
identifiers.

- **`filter`** `bool` `optional` `default=False`

   If True, selection process is reversed and all index values EXCEPT those specified
are selected.

- **`return_mask`** `bool` `optional` `default=False`

   If True, return the mask used to implement the selection.

#### `select(crit)`

Select subset of values that match a given index criterion

- **`crit`** `function` `list` `str` `int`

   Criterion function to map to indices, specific index value,
or list of indices

#### `series_max()`

Compute the value maximum of each record in a Series

#### `series_mean()`

Compute the value mean of each record in a Series

#### `series_median()`

Compute the value median of each record in a Series

#### `series_min()`

Compute the value minimum of each record in a Series

#### `series_percentile(q)`

Compute the value percentile of each record in a Series.

- **`q`** `scalar`

   Floating point number between 0 and 100 inclusive, specifying percentile.

#### `series_stat(stat)`

Compute a simple statistic for each record in a Series

- **`stat`** `str`

   Which statistic to compute

#### `series_stats()`

Compute many statistics for each record in a Series

#### `series_std()`

return self.series_stat('stdev')

series_stat(self, stat):

#### `series_sum()`

Compute the value sum of each record in a Series

#### `squelch(threshold)`

Set all records that do not exceed the given threhsold to 0

- **`threshold`** `scalar`

   Level below which to set records to zero

#### `standardize(axis=1)`

Standardize series data by dividing by the standard deviation
either within or across records

- **`axis`** `int` `optional` `default = 0`

   Which axis to standardize along, within (1) or across (0) records

#### `stat_by_index(stat, level=0)`

Compute the desired statistic for each uniue index values (across levels, if multi-index)

- **`stat`** `string`

   Statistic to be computed: sum, mean, median, stdev, max, min, count

- **`level`** `list of ints` `optional` `default=0`

   Specifies the levels of the multi-index to use when determining unique index values.
If only a single level is desired, can be an int.

#### `std_by_index(level=0)`

Compute means for each unique index value (across levels, if multi-index)

#### `std()`

Compute the standard deviation across images

#### `sum_by_index(level=0)`

Compute sums for each unique index value (across levels, if multi-index)

#### `sum()`

Compute the sum across images

#### `times(other)`

Multiply a matrix by another one.

Other matrix must be a numpy array, a scalar,
or another matrix in local mode.

- **`other`** `Matrix` `scalar` `or numpy array`

   A matrix to multiply with

#### `tobinary(path, prefix='series', overwrite=False, credentials=None)`

Write data to binary files.

- **`path`** `string path or URI to directory to be created`

   Output files will be written underneath path.
Directory will be created as a result of this call.

- **`prefix`** `str` `optional` `default = 'series'`

   String prefix for files.

- **`overwrite`** `bool`

   If true, path and all its contents will be deleted and
recreated as partof this call.

#### `toimages(size='150')`

Converts Series to Images.

Equivalent to calling series.toBlocks(size).toImages()

- **`size`** `str` `optional` `default = "150M"`

   String interpreted as memory size.

#### `tolocal()`

Convert to local representation.

#### `tospark(engine=None)`

Convert to spark representation.

#### `totimeseries()`

Convert Series to TimeSeries, a subclass for time series computation.

#### `var()`

Compute the variance across images

#### `zscore(axis=1)`

Zscore series data by subtracting the mean and
dividing by the standard deviation either
within or across records

- **`axis`** `int` `optional` `default = 0`

   Which axis to zscore along, within (1) or across (0) records


