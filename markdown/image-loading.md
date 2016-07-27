# image loading

Here is complete documentation for loading image data.

#### `fromarray(values, labels=None, npartitions=None, engine=None)`

Load images from an array.

First dimension will be used to index images,
so remaining dimensions after the first should
be the dimensions of the images,
e.g. (3, 100, 200) for 3 x (100, 200) images

- **`values`** `array-like`

   The array of images. Can be a numpy array,
a bolt array, or an array-like.

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should be one-dimensional.

- **`npartitions`** `int` `default = None`

   Number of partitions for parallelization (spark only)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for spark)

#### `frombinary(path, shape=None, dtype=None, ext='bin', start=None, stop=None, recursive=False, nplanes=None, npartitions=None, labels=None, conf='conf.json', order='C', engine=None, credentials=None)`

Load images from flat binary files.

Assumes one image per file, each with the shape and ordering as given
by the input arguments.

- **`path`** `str`

   Path to data files or directory, specified as either a local filesystem path
or in a URI-like format, including scheme. May include a single '*' wildcard character.

- **`shape`** `tuple of positive int`

   Dimensions of input image data.

- **`ext`** `string` `optional` `default = 'bin'`

   Extension required on data files to be loaded.

- **`start, stop`** `nonnegative int` `optional` `default = None`

   Indices of the first and last-plus-one file to load, relative to the sorted
filenames matching `path` and `ext`. Interpreted using python slice indexing conventions.

- **`recursive`** `boolean` `optional` `default = False`

   If true, will recursively descend directories from path, loading all files
with an extension matching 'ext'.

- **`nplanes`** `positive integer` `optional` `default = None`

   If passed, will cause single files to be subdivided into nplanes separate images.
Otherwise, each file is taken to represent one image.

- **`npartitions`** `int` `optional` `default = None`

   Number of partitions for computational engine,
if None will use default for engine.

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should be one-dimensional.

#### `fromexample(name=None, engine=None)`

Load example image data.

Data are downloaded from S3, so this method requires an internet connection.

- **`name`** `str`

   Name of dataset, if not specified will print options.

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

#### `fromlist(items, accessor=None, keys=None, dims=None, dtype=None, labels=None, npartitions=None, engine=None)`

Load images from a list of items using the given accessor.

- **`accessor`** `function`

   Apply to each item from the list to yield an image.

- **`keys`** `list` `optional` `default=None`

   An optional list of keys.

- **`dims`** `tuple` `optional` `default=None`

   Specify a known image dimension to avoid computation.

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should be one-dimensional.

- **`npartitions`** `int`

   Number of partitions for computational engine.

#### `frompath(path, accessor=None, ext=None, start=None, stop=None, recursive=False, npartitions=None, dims=None, dtype=None, labels=None, recount=False, engine=None, credentials=None)`

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

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should be one-dimensional.

- **`start, stop`** `nonnegative int` `optional` `default=None`

   Indices of files to load, interpreted using Python slicing conventions.

- **`recursive`** `boolean` `optional` `default=False`

   If true, will recursively descend directories from path, loading all files
with an extension matching 'ext'.

- **`recount`** `boolean` `optional` `default=False`

   Force subsequent record counting.

#### `frompng(path, ext='png', start=None, stop=None, recursive=False, npartitions=None, labels=None, engine=None, credentials=None)`

Load images from PNG files.

- **`path`** `str`

   Path to data files or directory, specified as either a local filesystem path
or in a URI-like format, including scheme. May include a single '*' wildcard character.

- **`ext`** `string` `optional` `default = 'tif'`

   Extension required on data files to be loaded.

- **`start, stop`** `nonnegative int` `optional` `default = None`

   Indices of the first and last-plus-one file to load, relative to the sorted
filenames matching `path` and `ext`. Interpreted using python slice indexing conventions.

- **`recursive`** `boolean` `optional` `default = False`

   If true, will recursively descend directories from path, loading all files
with an extension matching 'ext'.

- **`npartitions`** `int` `optional` `default = None`

   Number of partitions for computational engine,
if None will use default for engine.

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should be one-dimensional.

#### `fromrandom(shape=(10, 50, 50), npartitions=1, seed=42, engine=None)`

Generate random image data.

- **`shape`** `tuple` `optional` `default=(10` `50` `50)`

   Dimensions of images.

- **`npartitions`** `int` `optional` `default=1`

   Number of partitions.

- **`seed`** `int` `optional` `default=42`

   Random seed.

#### `fromrdd(rdd, dims=None, nrecords=None, dtype=None, labels=None, ordered=False)`

Load images from a Spark RDD.

Input RDD must be a collection of key-value pairs
where keys are singleton tuples indexing images,
and values are 2d or 3d ndarrays.

- **`rdd`** `SparkRDD`

   An RDD containing the images.

- **`dims`** `tuple or array` `optional` `default = None`

   Image dimensions (if provided will avoid check).

- **`nrecords`** `int` `optional` `default = None`

   Number of images (if provided will avoid check).

- **`dtype`** `string` `default = None`

   Data numerical type (if provided will avoid check)

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should be one-dimensional.

- **`ordered`** `boolean` `optional` `default = False`

   Whether or not the rdd is ordered by key

#### `fromtif(path, ext='tif', start=None, stop=None, recursive=False, nplanes=None, npartitions=None, labels=None, engine=None, credentials=None, discard_extra=False)`

Loads images from single or multi-page TIF files.

- **`path`** `str`

   Path to data files or directory, specified as either a local filesystem path
or in a URI-like format, including scheme. May include a single '*' wildcard character.

- **`ext`** `string` `optional` `default = 'tif'`

   Extension required on data files to be loaded.

- **`start, stop`** `nonnegative int` `optional` `default = None`

   Indices of the first and last-plus-one file to load, relative to the sorted
filenames matching 'path' and 'ext'. Interpreted using python slice indexing conventions.

- **`recursive`** `boolean` `optional` `default = False`

   If true, will recursively descend directories from path, loading all files
with an extension matching 'ext'.

- **`nplanes`** `positive integer` `optional` `default = None`

   If passed, will cause single files to be subdivided into nplanes separate images.
Otherwise, each file is taken to represent one image.

- **`npartitions`** `int` `optional` `default = None`

   Number of partitions for computational engine,
if None will use default for engine.

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should be one-dimensional.

- **`discard_extra`** `boolean` `optional` `default = False`

   If True and nplanes doesn't divide by the number of pages in a multi-page tiff, the reminder will
be discarded and a warning will be shown. If False, it will raise an error
