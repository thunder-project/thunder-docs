# frequently asked questions

#### How is Thunder related to [pandas](https://github.com/pydata/pandas) or [xarray](https://github.com/pydata/xarray)?

At a high-level, Thunder is similar to, but more specific than, [pandas](https://github.com/pydata/pandas) or [xarray](https://github.com/pydata/xarray). Like those packages, Thunder's data objects basically wrap ndarrays, and provide extra domain-specific semantics. But whereas [pandas](https://github.com/pydata/pandas) and [xarray](https://github.com/pydata/xarray) support generic labeled tabular or labeled ndarray data, Thunder focuses on the more specific cases of images, series, time series, or movies. Because all these packages just wrap ndarrays, it's easy to move from one to another. For example, here are a few lines that load `image` data in Thunder, convert it to `timeseries` data, perform time domain filtering (a fourier transform), then load it into a `DataFrame` for further analysis.

```
import thunder as td
data = td.images.fromrandom()
ts = data.totimeseries().fourier(freq=3).flatten().toarray()

import pandas as pd
df = pd.DataFrame(ts)
```

#### I was previously using Thunder 0.6.x, what's changed in 1.0.0?

A lot! The two biggest changes are (1) Thunder is much easier to use locally, as it no longer has a hard dependency on Spark, and (2) some of the functionality previously in Thunder is now provided in separate packages. The API has also been streamlined, and made compatible with Python 2.7 and 3.4. Beyond that, most of the core functionality remains intact, in particular the concept of `image` and `series` data objects, the ability to load and save them from a variety of formats, and perform analyses on them.

#### Does Thunder require Spark?

No! But it works great with Spark. In many data analysis settings, and even during different stages of analyzing the same data, we encounter a wide range of scales. Let's say we start with an 100TB data set. We might perform some initial preprocessing that, due to the data set size, benefits enormously from parallelization. But after that preprocessing, the data is much smaller, and local computation is fine. Or, you might want to perform the exact same analysis on the raw data, where parallelization matters, and on a downsampled version of the data, where local is fine. One of the goals of Thunder and its associated packages is to make it very easy to switch between these two regimes, using an identical API. So you can install Thunder and use it locally without Spark. But if you want to start distributing your computation, you can install and deploy Spark, and use the exact same code to perform distributed analyses.

#### Can you help me deploy a Spark cluster?

In earlier versions, Thunder provided utilities for starting Spark clusters, including a command-line tool `thunder-ec2`. This became difficult to maintain because it required continually adapting to changes in Spark's own deployment process. For now, you'll need to manage Spark deployment yourself. But once you have a Spark cluster deployed and configured, installing Thunder is as easy as running `pip install thunder-python` on the master and worker nodes of your cluster. You might also be interested in [Databricks](https://databricks.com/product/databricks), which provides on-demand cloud-based Spark clusters, and makes it easy to install custom Python packages like Thunder into the cluster after deployment. And we may write small packages in the future for simplifying Spark deployments with custom packages.
