# series methods

Here is complete documentation for methods on with series data.

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

Select subset of values within the given index range.

Inclusive on the left; exclusive on the right.

- **`left`** `int`

   Left-most index in the desired range.

right: int
Right-most index in the desired range.

#### `center(axis=1)`

Subtract the mean either within or across records.

- **`axis`** `int` `optional` `default = 0`

   Which axis to center along, within (1) or across (0) records.

#### `convolve(signal, mode='full')`

Conolve series data against another signal.

- **`signal`** `array`

   Signal to convolve with (must be 1D)

- **`var`** `str`

   Variable name if loading from a MAT file

- **`mode`** `str` `optional` `default='full'`

   Mode of convolution, options are 'full', 'same', and 'same'

#### `correlate(signal)`

Correlate records against one or many one-dimensional arrays.

- **`signal`** `array-like`

   One or more signals to correlate against.

#### `count_by_index(level=0)`

Count the number for each unique index value (across levels, if multi-index)

#### `count()`

Count the number of records.

For lazy or distributed data, will force a computation.

#### `cov()`

Compute covariance of a distributed matrix.

- **`axis`** `int` `optional` `default = None`

   Axis for performing mean subtraction, None (no subtraction), 0 (rows) or 1 (columns)

#### `crosscorr(signal, lag=0)`

Cross correlate series data against another signal.

- **`signal`** `array`

   Signal to correlate against (must be 1D).

- **`lag`** `int`

   Range of lags to consider, will cover (-lag, +lag).

#### `detrend(method='linear', order=5)`

Detrend series data with linear or nonlinear detrending.

Preserve intercept so that subsequent operations can adjust the baseline.

- **`method`** `str` `optional` `default = 'linear'`

   Detrending method

- **`order`** `int` `optional` `default = 5`

   Order of polynomial, for non-linear detrending only

#### `first()`

Return the first element.

#### `flatten()`

Reshape all dimensions but the last into a single dimension

#### `fourier(freq=None)`

Compute statistics of a Fourier decomposition on series data.

- **`freq`** `int`

   Digital frequency at which to compute coherence and phase

#### `gramian()`

Compute gramian of a distributed matrix.

The gramian is defined as the product of the matrix
with its transpose, i.e. A^T * A.

#### `map(func, index=None, with_keys=False)`

Map an array -> array function over each record.

- **`func`** `function`

   A function of a single record.

- **`index`** `array-like` `optional` `default = None`

   If known, the index to be used following function evaluation.

- **`with_keys`** `boolean` `optional` `default = False`

   If true, function should be of both tuple indices and series values.

#### `max_by_index(level=0)`

Compute maximum values for each unique index value (across levels, if multi-index)

#### `max()`

Compute the max across records.

#### `mean_by_index(level=0)`

Compute means for each unique index value (across levels, if multi-index)

#### `mean_by_panel(length)`

Compute the mean across fixed sized panels of each record.

Splits each record into panels of size `length`,
and then computes the mean across panels.
Panel length must subdivide record exactly.

- **`length`** `int`

   Fixed length with which to subdivide.

#### `mean_by_window(indices, window)`

Average series across multiple windows specified by their centers.

- **`indices`** `array-like`

   List of times specifying window centers

- **`window`** `int`

   Window size

#### `mean()`

Compute the mean across records

#### `median_by_index(level=0)`

Compute medians for each unique index value (across levels, if multi-index)

#### `min_by_index(level=0)`

Compute minimum values for each unique index value (across level, if multi-index)

#### `min()`

Compute the min across records.

#### `normalize(method='percentile', window=None, perc=20, offset=0.1)`

Normalize by subtracting and dividing by a baseline.

Baseline can be derived from a global mean or percentile,
or a smoothed percentile estimated within a rolling window.
Windowed baselines may only be well-defined for
temporal series data.

- **`baseline`** `str` `optional` `default = 'percentile'`

   Quantity to use as the baseline, options are 'mean', 'percentile',
'window', or 'window-exact'.

- **`window`** `int` `optional` `default = 6`

   Size of window for baseline estimation,
for 'window' and 'window-exact' baseline only.

- **`perc`** `int` `optional` `default = 20`

   Percentile value to use, for 'percentile',
'window', or 'window-exact' baseline only.

- **`offset`** `float` `optional` `default = 0.1`

    Scalar added to baseline during division to avoid division by 0.

#### `reduce(func)`

Reduce a function over records.

- **`func`** `function`

   A function of two records.

#### `sample(nsamples=100, seed=None)`

Extract random sample of records.

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

Select subset of values that match a given index criterion.

- **`crit`** `function` `list` `str` `int`

   Criterion function to map to indices, specific index value,
or list of indices.

#### `squelch(threshold)`

Set all records that do not exceed the given threhsold to 0.

- **`threshold`** `scalar`

   Level below which to set records to zero

#### `standardize(axis=1)`

Divide by standard deviation either within or across records.

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

Compute the standard deviation across records.

#### `subsample(sampleFactor=2)`

Subsample series by an integer factor.

- **`sampleFactor`** `positive integer` `optional` `default=2`

   

#### `sum_by_index(level=0)`

Compute sums for each unique index value (across levels, if multi-index)

#### `sum()`

Compute the sum across records.

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

Convert to local mode.

#### `tospark(engine=None)`

Convert to spark mode.

#### `var()`

Compute the variance across records

#### `zscore(axis=1)`

Subtract the mean and divide by standard deviation within or across records.

- **`axis`** `int` `optional` `default = 0`

   Which axis to zscore along, within (1) or across (0) records
