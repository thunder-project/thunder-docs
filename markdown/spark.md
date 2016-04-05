# use with spark

The distributing computing engine [Spark](https://github.com/apache/spark) is useful for analyzing large datasets across a compute cluster. Although all Thunder packages can be used locally and do not require Spark, the exact same code can be used alongside Spark to distribute computation, via the Python API PySpark. Thunder is compatible with Spark versions 1.5 and higher.

Thunder does not provide explicit utilities for starting or managing a Spark cluster. Instead, please consult the official [Spark documentation](http://spark-project.org/docs/latest/) for installation, either on a local machine (for multiprocessing) or on a cluster. For deploying Spark on an Amazon EC2 cluster we recommend the command line tool [`flintrock`](https://github.com/nchammas/flintrock), and for Google Compute Engine we recommend [`spark-gce`](https://github.com/broxtronix/spark-gce).

Once you have a Spark cluster running, how can you use it with Thunder? First, install Thunder and any additional modules you want by running 

```
pip install thunder-python
```

on both the master node and each worker node of the cluster.

Once you have Spark running and Thunder installed, using them together is easy. All the loading methods in Thunder take an optional argument `engine`, which can be passed a `SparkContext`. This is a variable that is automatically created as `sc` when you start Spark from the executable `pyspark`, or it can be created within a python script by calling

```python
from pyspark import SparkContext
sc = SparkContext()
```

When you have this variable, just pass it as an argument to a data loading method. For example, let's create some random image data in Thunder. First, we'll do it locally

```python
from thunder import images
data = images.fromrandom()
data
>> Images
>> mode: local
>> dtype: float64
>> shape: (10, 10, 50)
```

If we instead provide a `SparkContext` as the variable `sc`, we get the same data in distributed form

```python
from thunder import images
data = images.fromrandom(engine=sc)
data
>> Images
>> mode: spark
>> dtype: float64
>> shape: (10, 10, 50)
```

If you are frequently switching between Spark and local mode, you might find the [`station`](https://github.com/freeman-lab/station) package useful, which provides a context manager for isolating blocks of code to execute with a `SparkContext`.