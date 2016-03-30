# installation

All packages associated with Thunder are simple Python packages that support Python 2.7 or 3.4. Most of them depend on the same set of standard scientific Python packages, including [`numpy`](https://github.com/numpy/numpy), [`scipy`](https://github.com/scipy/scipy), [`scikit-learn`](https://github.com/scikit-learn/scikit-learn) and [`scikit-image`](https://github.com/scikit-image/scikit-image). If you are just getting started with Python, we recommend installing the [Anaconda](https://www.continuum.io/downloads) distribution, which includes all of these packages. If you are coming from Matlab to Python, check out this great [cheatsheet](http://mathesaurus.sourceforge.net/matlab-numpy.html).

To install the core `thunder` package just use the Python package manager `pip`

```bash
pip install thunder-python
```

And you can install any of the associated modules the same way, for example

```bash
pip install thunder-regression
pip install thunder-factorization
```

Only install the ones you need!

See the section "use with spark" for information about how to run Thunder alongside the distributed computing engine [Spark](http://spark.apache.org/).