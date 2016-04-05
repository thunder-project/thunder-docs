# series loading

Here is complete documentation for loading series data.

#### `fromarray(values, index=None, labels=None, npartitions=None, engine=None)`

Load series data from an array.

Assumes that all but final dimension index the records,
and the size of the final dimension is the length of each record,
e.g. a (2, 3, 4) array will be treated as 2 x 3 records of size (4,)

- **`values`** `array-like`

   An array containing the data. Can be a numpy array,
a bolt array, or an array-like.

- **`index`** `array` `optional` `default = None`

   Index for records, if not provided will use (0,1,...,N)
where N is the length of each record.

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should have same shape as values.shape[:-1].

- **`npartitions`** `int` `default = None`

   Number of partitions for parallelization (Spark only)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

#### `frombinary(path, ext='bin', conf='conf.json', dtype=None, shape=None, skip=0, index=None, labels=None, engine=None, credentials=None)`

Load series data from flat binary files.

- **`path`** `string URI or local filesystem path`

   Directory to load from, can be a URI string with scheme
(e.g. 'file://', 's3n://', or 'gs://'), or a single file,
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

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should have shape of shape[:-1].

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

- **`credentials`** `dict` `default = None`

   Credentials for remote storage (e.g. S3) in the form {access: ***, secret: ***}

#### `fromexample(name=None, engine=None)`

Load example series data.

Data are downloaded from S3, so this method requires an internet connection.

- **`name`** `str`

   Name of dataset, options include 'iris' | 'mouse' | 'fish'.
If not specified will print options.

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

#### `fromlist(items, accessor=None, index=None, labels=None, dtype=None, npartitions=None, engine=None)`

Load series data from a list with an optional accessor function.

Will call accessor function on each item from the list,
providing a generic interface for data loading.

- **`items`** `list`

   A list of items to load.

- **`accessor`** `function` `optional` `default = None`

   A function to apply to each item in the list during loading.

- **`index`** `array` `optional` `default = None`

   Index for records, if not provided will use (0,1,...,N)
where N is the length of each record.

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should have same length as items.

- **`dtype`** `string` `default = None`

   Data numerical type (if provided will avoid check)

- **`npartitions`** `int` `default = None`

   Number of partitions for parallelization (Spark only)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

#### `fromrandom(shape=(100, 10), npartitions=1, seed=42, engine=None)`

Generate random gaussian series data.

- **`shape`** `tuple` `optional` `default = (100,10)`

   Dimensions of data.

- **`npartitions`** `int` `optional` `default = 1`

   Number of partitions with which to distribute data.

- **`seed`** `int` `optional` `default = 42`

   Randomization seed.

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

#### `fromrdd(rdd, nrecords=None, shape=None, index=None, labels=None, dtype=None)`

Load series data from a Spark RDD.

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

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should have shape of shape[:-1].

- **`dtype`** `string` `default = None`

   Data numerical type (if provided will avoid check)

#### `fromtext(path, ext='txt', dtype='float64', skip=0, shape=None, index=None, labels=None, npartitions=None, engine=None, credentials=None)`

Loads series data from text files.

Assumes data are formatted as rows, where each record is a row
of numbers separated by spaces e.g. 'v v v v v'. You can
optionally specify a fixed number of initial items per row to skip / discard.

- **`path`** `string`

   Directory to load from, can be a URI string with scheme
(e.g. 'file://', 's3n://', or 'gs://'), or a single file,
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

- **`labels`** `array` `optional` `default = None`

   Labels for records. If provided, should have length equal to number of rows.

- **`npartitions`** `int` `default = None`

   Number of partitions for parallelization (Spark only)

- **`engine`** `object` `default = None`

   Computational engine (e.g. a SparkContext for Spark)

- **`credentials`** `dict` `default = None`

   Credentials for remote storage (e.g. S3) in the form {access: ***, secret: ***}
