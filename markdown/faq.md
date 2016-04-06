# frequently asked questions

#### how is Thunder related to [pandas](https://github.com/pydata/pandas) or [xarray](https://github.com/pydata/xarray)?

At a high-level, Thunder is similar to [pandas](https://github.com/pydata/pandas) or [xarray](https://github.com/pydata/xarray) in that it defines data objects that wrap multi-dimensional arrays, and provides methods on those objects. However, the methods in Thunder are tailored to data types like image sequences and collections of time series, as opposed to more generic tabular data. In addition, Thunder naturally supports both local and distributed use cases with a common API. Because Thunder, pandas, and xarray all wrap ndarrays, it's easy to use them together! For example, here are a few lines that load an image sequence as `image` data in Thunder, convert it to `series` data, perform time domain filtering (a fourier transform), then load it into a `DataFrame` for further analysis.

```python
import thunder as td
data = td.images.fromrandom()
ts = data.toseries().fourier(freq=3).flatten().toarray()

import pandas as pd
df = pd.DataFrame(ts)
```

#### i was previously using Thunder 0.6.x, what's changed in 1.0.0?

A lot! The two biggest changes are (1) Thunder is much easier to use locally, as it no longer has a hard dependency on Spark, and (2) some of the functionality previously in Thunder is now provided in separate packages like [`thunder-regression`](https://github.com/thunder-project/thunder-regression) and [`thunder-registration`](https://github.com/thunder-project/thunder-registration). The API has also been streamlined, and made compatible with Python 2.7 and 3.4. Beyond that, most of the core functionality remains intact, in particular the concept of `image` and `series` data objects, the ability to load and save them from a variety of formats, and perform analyses on them.

#### does Thunder require Spark?

No! But it works great with Spark. In many data analysis settings, and even during different stages of analyzing the same data, we encounter a wide range of scales. Let's say we start with an 100TB data set. We might perform some initial preprocessing that, due to the data set size, benefits enormously from parallelization. But after that preprocessing, the data is much smaller, and local computation is fine. Or, you might want to perform the exact same analysis on the raw data, where parallelization matters, and on a downsampled version of the data, where local is fine. One of the goals of Thunder and its associated packages is to make it very easy to switch between these two regimes, using an identical API. So you can install Thunder and use it locally without Spark. But if you want to start distributing your computation, you can install and deploy Spark, and use the exact same code to perform distributed analyses.

#### can you help me deploy a Spark cluster?

In earlier versions, Thunder provided utilities for starting Spark clusters, including a command-line tool `thunder-ec2`. This became difficult to maintain because it required continually adapting to changes in Spark's own deployment process. For now, you'll need to manage Spark deployment yourself. But once you have a Spark cluster deployed and configured, installing Thunder is as easy as running `pip install thunder-python` on the master and worker nodes of your cluster. Services like [Databricks](https://databricks.com/product/databricks) also provide on-demand cloud-based Spark clusters that you might want to check out. Within Databricks, it's easy to install custom Python packages like Thunder into the cluster after deployment.
