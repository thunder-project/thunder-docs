# image methods

Here is complete documentation for methods on image data.

#### `count()`

Count the number of images.

For lazy or distributed data, will force a computation.

#### `first()`

Return the first element.

#### `foreach(func)`

Execute a function on each image.

Functions can have side effects. There is no return value.

#### `gaussian_filter(sigma=2, order=0)`

Spatially smooth images with a gaussian filter.

Filtering will be applied to every image in the collection.

- **`sigma`** `scalar or sequence of scalars` `default = 2`

   Size of the filter size as standard deviation in pixels. 
A sequence is interpreted as the standard deviation for each axis. 
A single scalar is applied equally to all axes.

- **`order`** `choice of 0 / 1 / 2 / 3 or sequence from same set` `optional` `default = 0`

   Order of the gaussian kernel, 0 is a gaussian, 
higher numbers correspond to derivatives of a gaussian.

#### `localcorr(size=2)`

Correlate every pixel in an image sequence to the average of its local neighborhood.

This algorithm computes, for every pixel, the correlation coefficient
between the sequence of values for that pixel, and the average of all pixels
in a local neighborhood. It does this by blurring the image(s) with a uniform filter,
and then correlates the original sequence with the blurred sequence.

- **`size`** `int or tuple` `optional` `default = 2`

   Size of the filter in pixels. If a scalar, will use the same filter size
along each dimension.

#### `map_as_series(func, value_size=None, block_size='150')`

Efficiently apply a function to images as series data.

For images data that represent image sequences, this method
applies a function to each pixel's series, and then returns to
the images format, using an efficient intermediate block
representation.

- **`func`** `function`

   Function to apply to each time series. Should take one-dimensional
ndarray and return the transformed one-dimensional ndarray.

- **`value_size`** `int` `optional` `default = None`

   Size of the one-dimensional ndarray resulting from application of
func. If not supplied, will be automatically inferred for an extra
computational cost.

- **`block_size`** `str` `or tuple of block size per dimension` `optional` `default = '150'`

   String interpreted as memory size (in megabytes e.g. '64'). Tuple of
ints interpreted as 'pixels per dimension'.

#### `map(func, dims=None, with_keys=False)`

Map an array -> array function over each image.

- **`func`** `function`

   The function to apply in the map.

- **`dims`** `tuple` `optional` `default = None`

   If known, the dimensions of the data following function evaluation.

- **`with_keys`** `boolean` `optional` `default = False`

   If true, function should be of both tuple indices and values.

#### `max_min_projection(axis=2)`

Compute maximum-minimum projection along a dimension.

This computes the sum of the maximum and minimum values.

- **`axis`** `int` `optional` `default = 2`

   Which axis to compute projection along.

#### `max_projection(axis=2)`

Compute maximum projections of images along a dimension.

- **`axis`** `int` `optional` `default = 2`

   Which axis to compute projection along.

#### `max()`

Compute the max across images.

#### `mean()`

Compute the mean across images.

#### `median_filter(size=2)`

Spatially filter images using a median filter.

Filtering will be applied to every image in the collection.

parameters
size: int, optional, default = 2
Size of the filter neighbourhood in pixels. 
A sequence is interpreted as the neighborhood size for each axis. 
A single scalar is applied equally to all axes.

#### `min()`

Compute the min across images.

#### `reduce(func)`

Reduce a function over images.

- **`func`** `function`

   A function of two images.

#### `sample(nsamples=100, seed=None)`

Extract a random sample of images.

- **`nsamples`** `int` `optional` `default = 100`

   The number of data points to sample.

- **`seed`** `int` `optional` `default = None`

   Random seed.

#### `squeeze()`

Remove single-dimensional axes from images.

#### `std()`

Compute the standard deviation across images.

#### `subsample(factor)`

Downsample images by an integer factor.

- **`factor`** `positive int or tuple of positive ints`

   Stride to use in subsampling. If a single int is passed, 
each dimension of the image will be downsampled by this factor. 
If a tuple is passed, each dimension will be downsampled by the given factor.

#### `subtract(val)`

Subtract a constant value or an image from all images.

- **`val`** `int` `float` `or ndarray`

   Value to subtract.

#### `sum()`

Compute the sum across images.

#### `tobinary(path, prefix='image', overwrite=False)`

Write out images as flat binary files.

Files will be written into a newly-created directory.

- **`path`** `string`

   Path to output directory, must be one level below an existing directory.

- **`prefix`** `string`

   String to prepend to filenames.

- **`overwrite`** `bool`

   If true, the directory given by path will first be deleted if it exists.

#### `toblocks(size='150')`

Convert to blocks which represent subdivisions of the images data.

- **`size`** `str` `or tuple of block size per dimension,`

   String interpreted as memory size (in megabytes, e.g. '64'). 
Tuple of ints interpreted as 'pixels per dimension'. 
Only valid in spark mode.

#### `tolocal()`

Convert to local mode.

#### `topng(path, prefix='image', overwrite=False)`

Write 2d images as PNG files.

Files will be written into a newly-created directory.
Three-dimensional data will be treated as RGB channels.

- **`path`** `string`

   Path to output directory, must be one level below an existing directory.

- **`prefix`** `string`

   String to prepend to filenames.

- **`overwrite`** `bool`

   If true, the directory given by path will first be deleted if it exists.

#### `toseries(size='150')`

Converts to series data.

This method is equivalent to images.toblocks(size).toSeries().

- **`size`** `string memory size` `optional` `default = '150M'`

   String interpreted as memory size (e.g. '64M').

#### `tospark(engine=None)`

Convert to distributed spark mode.

#### `totif(path, prefix='image', overwrite=False)`

Write 2d images as TIF files.

Files will be written into a newly-created directory.
Three-dimensional data will be treated as RGB channels.

- **`path`** `string`

   Path to output directory, must be one level below an existing directory.

- **`prefix`** `string`

   String to prepend to filenames.

- **`overwrite`** `bool`

   If true, the directory given by path will first be deleted if it exists.

#### `uniform_filter(size=2)`

Spatially filter images using a uniform filter.

Filtering will be applied to every image in the collection.

size: int, optional, default = 2
Size of the filter neighbourhood in pixels. 
A sequence is interpreted as the neighborhood size for each axis. 
A single scalar is applied equally to all axes.

#### `var()`

Compute the variance across images.
