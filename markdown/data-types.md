# data types

Thunder and its associated packages define and make use of two primary types of data: `images` and `series`. Each one is a high-level wrapper for an ndarray, and can be used in either a local setting (via [`numpy`](https://github.com/numpy/numpy)) or a distributed setting (via [`spark`](https://github.com/apache/spark) and [`bolt`](https://github.com/bolt-project/bolt)). These data types can be loaded from a wide variety of local or remote data, can be manipulated through statistical operators, and can be written to disk in several different formats. These data types are defined as classes in the core [`thunder`](https://github.com/thunder-project/thunder) package. See the documentation sections on "image data" and "series data" for a list of methods for loading and manipulating these data types.

Both `images` and `series` data have several domain-specific methods, like `detrend` for `series` data and `gaussian_filter` for `images` data. But there are also methods shared by both, including simple aggregations like `mean` and `std`, and generic functional operators like `map` and `reduce`. You'll find yourself using `map` anytime you want to apply a generic function to each record, i.e. each individual image or series. This operation will also automatically be parallelized for data loaded in distributed mode.

As an example of `map`, this code snippet generates random `series` data and then adds `2` and computes the mean of each record

```python
import thunder as td

data = td.series.fromrandom()
data.shape
>> (100,10)

mapped = data.map(lambda x: (x + 2).mean())
mapped.shape
>> (100,1)
```

Both data types can be converted to a local `ndarray` using `toarray()`, and can be loaded from `ndarrays` using `thunder.series.fromarray()` or `thunder.images.fromarray()`. These methods are a great way to move data back and forth between `thunder` and other Python data analysis tools like [`pandas`](https://github.com/pydata/pandas) or [`scikit-learn`](https://github.com/scikit-learn/scikit-learn). For example, you could use `thunder` with [`spark`](https://github.com/apache/spark) to do distributed time series preprocessing, call `toarray()`, and then do some local machine learning with [`scikit-learn`](https://github.com/scikit-learn/scikit-learn).