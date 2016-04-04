# images

Description of images objects


## loading

#### `fromarray(values, npartitions=None, engine=None)`

Load Series object from a local array-like.

First dimension will be used to index images,
so remaining dimensions after the first should
be the dimensions of the images/volumes,
e.g. (3, 100, 200) for 3 x (100, 200) images

- **`values`** `array-like`

   The array of images

- **`npartitions`** `int` `default = None`

   Number of partitions for parallelization (Spark only)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

#### `frombinary(path, shape=None, dtype=None, ext='bin', start=None, stop=None, recursive=False, nplanes=None, npartitions=None, conf='conf.json', order='C', engine=None, credentials=None)`

Load images from flat binary files.

Assumes one image per file, each with the shape and ordering as given
by the input arguments.

- **`path`** `str`

   Path to data files or directory, specified as either a local filesystem path
or in a URI-like format, including scheme. May include a single '*' wildcard character.

- **`shape`** `tuple of positive int`

   Dimensions of input image data.

- **`ext`** `string` `optional` `default="bin"`

   Extension required on data files to be loaded.

- **`start, stop`** `nonnegative int` `optional` `default=None`

   Indices of the first and last-plus-one file to load, relative to the sorted
filenames matching `path` and `ext`. Interpreted using python slice indexing conventions.

- **`recursive`** `boolean` `optional` `default=False`

   If true, will recursively descend directories from path, loading all files
with an extension matching 'ext'.

- **`nplanes`** `positive integer` `optional` `default=None`

   If passed, will cause single files to be subdivided into nplanes separate images.
Otherwise, each file is taken to represent one image.

- **`npartitions`** `int` `optional` `default=None`

   Number of partitions for computational engine,
if None will use default for engine.

#### `fromexample(name=None, engine=None)`

Load example image data.

Data must be downloaded from S3, so this method requires
an internet connection.

- **`name`** `str`

   Name of dataset, if not specified will print options.

#### `fromlist(items, accessor=None, keys=None, dims=None, dtype=None, npartitions=None, engine=None)`

Load images from a list of items using the given accessor.

- **`accessor`** `function`

   Apply to each item from the list to yield an image

- **`keys`** `list` `optional` `default=None`

   An optional list of keys

- **`dims`** `tuple` `optional` `default=None`

   Specify a known image dimension to avoid computation.

- **`npartitions`** `int`

   Number of partitions for computational engine

#### `frompath(path, accessor=None, ext=None, start=None, stop=None, recursive=False, npartitions=None, dims=None, dtype=None, recount=False, engine=None, credentials=None)`

Load images from a path using the given accessor.

Supports both local and remote filesystems.

- **`accessor`** `function`

   Apply to each item after loading to yield an image.

- **`ext`** `str` `optional` `default=None`

   File extension.

- **`npartitions`** `int` `optional` `default=None`

   Number of partitions for computational engine,
if None will use default for engine.

- **`dims`** `tuple` `optional` `default=None`

   Dimensions of images.

- **`dtype`** `str` `optional` `default=None`

   Numerical type of images.

start, stop: nonnegative int, optional, default=None
Indices of files to load, interpreted using Python slicing conventions.

- **`recursive`** `boolean` `optional` `default=False`

   If true, will recursively descend directories from path, loading all files
with an extension matching 'ext'.

- **`recount`** `boolean` `optional` `default=False`

   Force subsequent record counting.

#### `frompng(path, ext='png', start=None, stop=None, recursive=False, npartitions=None, engine=None, credentials=None)`

Load images from PNG files.

- **`path`** `str`

   Path to data files or directory, specified as either a local filesystem path
or in a URI-like format, including scheme. May include a single '*' wildcard character.

- **`ext`** `string` `optional` `default="tif"`

   Extension required on data files to be loaded.

- **`start, stop`** `nonnegative int` `optional` `default=None`

   Indices of the first and last-plus-one file to load, relative to the sorted
filenames matching `path` and `ext`. Interpreted using python slice indexing conventions.

- **`recursive`** `boolean` `optional` `default=False`

   If true, will recursively descend directories from path, loading all files
with an extension matching 'ext'.

- **`npartitions`** `int` `optional` `default=None`

   Number of partitions for computational engine,
if None will use default for engine.

#### `fromrandom(shape=(10, 50, 50), npartitions=1, seed=42, engine=None)`

Generate random image data.

- **`shape`** `tuple` `optional` `default=(10` `50` `50)`

   Dimensions of images.

- **`npartitions`** `int` `optional` `default=1`

   Number of partitions.

- **`seed`** `int` `optional` `default=42`

   Random seed.

#### `fromrdd(rdd, dims=None, nrecords=None, dtype=None)`

Load Images object from a Spark RDD.

Must be a collection of key-value pairs
where keys are singleton tuples indexing images,
and values are 2d or 3d ndarrays.

- **`rdd`** `SparkRDD`

   An RDD containing images

- **`dims`** `tuple or array` `optional` `default = None`

   Image dimensions (if provided will avoid check).

- **`nrecords`** `int` `optional` `default = None`

   Number of images (if provided will avoid check).

- **`dtype`** `string` `default = None`

   Data numerical type (if provided will avoid check)

#### `fromtif(path, ext='tif', start=None, stop=None, recursive=False, nplanes=None, npartitions=None, engine=None, credentials=None)`

Loads images from single or multi-page TIF files.

- **`path`** `str`

   Path to data files or directory, specified as either a local filesystem path
or in a URI-like format, including scheme. May include a single '*' wildcard character.

- **`ext`** `string` `optional` `default="tif"`

   Extension required on data files to be loaded.

- **`start, stop`** `nonnegative int` `optional` `default=None`

   Indices of the first and last-plus-one file to load, relative to the sorted
filenames matching 'path' and 'ext'. Interpreted using python slice indexing conventions.

- **`recursive`** `boolean` `optional` `default=False`

   If true, will recursively descend directories from path, loading all files
with an extension matching 'ext'.

- **`nplanes`** `positive integer` `optional` `default=None`

   If passed, will cause single files to be subdivided into nplanes separate images.
Otherwise, each file is taken to represent one image.

- **`npartitions`** `int` `optional` `default=None`

   Number of partitions for computational engine,
if None will use default for engine.


## methods

#### `count()`

Explicit count of the number of items.

For lazy or distributed data, will force a computation.

#### `filter(func)`

Filter images

#### `first()`

Return the first element.

#### `foreach(func)`

Execute a function on each image

#### `gaussian_filter(sigma=2, order=0)`

Spatially smooth images with a gaussian filter.

Filtering will be applied to every image in the collection.

- **`sigma`** `scalar or sequence of scalars` `default=2`

   Size of the filter size as standard deviation in pixels. A sequence is interpreted
as the standard deviation for each axis. A single scalar is applied equally to all
axes.

- **`order`** `choice of 0 / 1 / 2 / 3 or sequence from same set` `optional` `default = 0`

   Order of the gaussian kernel, 0 is a gaussian, higher numbers correspond
to derivatives of a gaussian.

#### `localcorr(neighborhood=2)`

Correlate every pixel to the average of its local neighborhood.

This algorithm computes, for every spatial record, the correlation coefficient
between that record's series, and the average series of all records within
a local neighborhood with a size defined by the neighborhood parameter.
The neighborhood is currently required to be a single integer,
which represents the neighborhood size in both x and y.

- **`neighborhood`** `int` `optional` `default=2`

   Size of the correlation neighborhood (in both the x and y directions), in pixels.

#### `map_as_series(func, value_size=None, block_size='150')`

Efficiently apply a function to each time series

Applies a function to each time series without transforming all the way
to a Series object, but using a Blocks object instead for increased
efficiency in the transformation back to Images.

- **`func`** `function`

   Function to apply to each time series. Should take one-dimensional
ndarray and return the transformed one-dimensional ndarray.

- **`value_size`** `int` `optional` `default=None`

   Size of the one-dimensional ndarray resulting from application of
func. If not supplied, will be automatically inferred for an extra
computational cost.

- **`block_size`** `str` `or tuple of block size per dimension,`

   String interpreted as memory size (in megabytes e.g. "64"). Tuple of
ints interpreted as "pixels per dimension".

#### `map(func, dims=None, with_keys=False)`

Map an array -> array function over each image

#### `max_min_projection(axis=2)`

Compute maximum-minimum projections of images / volumes
along the specified dimension. This computes the sum
of the maximum and minimum values along the given dimension.

- **`axis`** `int` `optional` `default = 2`

   Which axis to compute projection along

#### `max_projection(axis=2)`

Compute maximum projections of images / volumes
along the specified dimension.

- **`axis`** `int` `optional` `default = 2`

   Which axis to compute projection along

#### `max()`

Compute the max across images

#### `mean()`

Compute the mean across images

#### `median_filter(size=2)`

Spatially filter images using a median filter.

Filtering will be applied to every image in the collection.

parameters
size: int, optional, default=2
Size of the filter neighbourhood in pixels. A sequence is interpreted
as the neighborhood size for each axis. A single scalar is applied equally to all
axes.

#### `min()`

Compute the min across images

#### `reduce(func)`

Reduce over images

#### `sample(nsamples=100, seed=None)`

Extract random sample of series.

- **`nsamples`** `int` `optional` `default = 100`

   The number of data points to sample.

- **`seed`** `int` `optional` `default = None`

   Random seed.

#### `squeeze()`

Remove single-dimensional axes from images.

#### `std()`

Compute the standard deviation across images

#### `subsample(factor)`

Downsample an image volume by an integer factor

- **`sample_factor`** `positive int or tuple of positive ints`

   Stride to use in subsampling. If a single int is passed, each dimension of the image
will be downsampled by this same factor. If a tuple is passed, it must have the same
dimensionality of the image. The strides given in a passed tuple will be applied to
each image dimension.

#### `subtract(val)`

Subtract a constant value or an image / volume from
all images / volumes in the data set.

- **`val`** `int` `float` `or ndarray`

   Value to subtract

#### `sum()`

Compute the sum across images

#### `tobinary(path, prefix="image", overwrite=False)`

Write out images or volumes as flat binary files.

Files will be written into a newly-created directory.

- **`path`** `string`

   Path to output directory, must be one level below an existing directory.

- **`prefix`** `string`

   String to prepend to filenames.

- **`overwrite`** `bool`

   If true, the directory given by path will first be deleted if it exists.

#### `toblocks(size='150')`

Convert to Blocks, each representing a subdivision of the larger Images data.

- **`size`** `str` `or tuple of block size per dimension,`

   String interpreted as memory size (in megabytes, e.g. "64"). Tuple of ints interpreted as
"pixels per dimension". Only valid in spark mode.

#### `tolocal()`

Convert to local representation.

#### `topng(path, prefix="image", overwrite=False)`

Write 2d or 3d images as PNG files.

Files will be written into a newly-created directory.
Three-dimensional data will be treated as RGB channels.

- **`path`** `string`

   Path to output directory, must be one level below an existing directory.

- **`prefix`** `string`

   String to prepend to filenames.

- **`overwrite`** `bool`

   If true, the directory given by path will first be deleted if it exists.

#### `toseries(size='150')`

Converts this Images object to a Series object.

This method is equivalent to images.toblocks(size).toSeries().

- **`size`** `string memory size` `optional` `default = "150M"`

   String interpreted as memory size (e.g. "64M").

#### `tospark(engine=None)`

Convert to spark representation.

#### `totif(path, prefix="image", overwrite=False)`

Write 2d or 3d images as TIF files.

Files will be written into a newly-created directory.
Three-dimensional data will be treated as RGB channels.

- **`path`** `string`

   Path to output directory, must be one level below an existing directory.

- **`prefix`** `string`

   String to prepend to filenames.

- **`overwrite`** `bool`

   If true, the directory given by path will first be deleted if it exists.

#### `totimeseries(size='150')`

Converts this Images object to a TimeSeries object.

This method is equivalent to images.asBlocks(size).asSeries().asTimeSeries().

- **`size`** `string memory size` `optional` `default = "150M"`

   String interpreted as memory size (e.g. "64M").

- **`units`** `string` `either "pixels" or "splits"` `default = "pixels"`

   What units to use for a tuple size.

#### `uniform_filter(size=2)`

Spatially filter images using a uniform filter.

Filtering will be applied to every image in the collection.

parameters
size: int, optional, default=2
Size of the filter neighbourhood in pixels. A sequence is interpreted
as the neighborhood size for each axis. A single scalar is applied equally to all
axes.

#### `var()`

Compute the variance across images


