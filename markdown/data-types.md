# data types

Thunder and its associated packages define and make use of two primary types of data: `images` and `series`. Each one is a high-level wrapper for an ndarray, and can be used in either a local setting via [`numpy`](https://github.com/numpy/numpy) or a distributed setting via [`spark`](https://github.com/apache/spark and [`bolt`](https://github.com/bolt-project/bolt). These data types can be loaded from a wide variety of local or remote data, can be manipulated through statistical operators, and can be written to disk in several different formats. These data types are defined as classes in the core [`thunder`](https://github.com/thunder-project/thunder) package. 

See below for an overview of `images` and `series`, and of shared functionality. See the other documentation sections for a detailed list of all loading functions and methods.

## images

The `images` data type in Thunder is used to represent a collection of images or volumes. It is well suited to movie data — where the images come from different points in time — but it can also be used for more generic image collections. `images` can be loaded from several on-disk formats, including tiff, png, and binary, and can also be constructed directly from a list or ndarray. Several domain-specific methods are available for image processing, filtering, and writing to external formats.

## series

The `series` data type in Thunder is used to represent a collection of one-dimensional records that share a common index. It is well suited to time series data — where the index is time — but it can also be used for more generic series data. `series` data can be loaded from several on-disk formats, including binary and text, and  also be constructed directly from a list or ndarray. Domain-specific methods are available for filtering, preprocessing, and statistical aggregation conditional on the index.

## shared

Although both `images` and `series` have domain-specific methods, there are several methods shared by both, including simple aggregations like `mean` and `std`, and generic functional operators like `map` and `reduce`. 

You'll find yourself using `map` anytime you want to apply a generic function to each record, i.e. each individual image or series. This operation will automatically be parallelized in distributed mode. As an example of `map`, this code snippet generates random `series` data and then adds `2` and computes the mean of each record

```python
import thunder as td

data = td.series.fromrandom()
data.shape
>> (100,10)

mapped = data.map(lambda x: (x + 2).mean())
mapped.shape
>> (100,1)
```

Both data types can also be converted to a local `ndarray` using `toarray()`, and can be loaded from `ndarrays` using `thunder.series.fromarray()` or `thunder.images.fromarray()`. These methods are a great way to move data back and forth between `thunder` and other Python data analysis tools like [`pandas`](https://github.com/pydata/pandas) or [`scikit-learn`](https://github.com/scikit-learn/scikit-learn). For example, you could use `thunder` to do distributed time series preprocessing, then call `toarray()`, and do local machine learning with [`scikit-learn`](https://github.com/scikit-learn/scikit-learn).
