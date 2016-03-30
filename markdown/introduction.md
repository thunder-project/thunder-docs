# introduction

Thunder is an ecosystem of tools for the analysis of image and time series data in Python. It provides data structures and algorithms for loading, processing, and analyzing these kinds of data, and can be useful in a variety of domains, including neuroscience, medical imaging, video analysis, and geospatial and climate analysis.

Analyses in Thunder are designed to scale to very large data sets through the distributed comptuing engine [`spark`](https://github.com/apache/spark), but they can also be run on local data. Every analysis in Thunder **runs identically on local and distributed data**, and will try to use the fastest data structures available in each environment. We achieve this through data types that expose the same `ndarray`-like interface whether backed by a local numpy array or a distributed dataset. 

Thunder is designed around modularity and composability — the core package only defines common data structures and read/write patterns, and most functionality is broken out into several related packages. Each package is independently versioned, with its own GitHub repository for organizing issues and contributions. Some packages will remain general, whereas others will be tailored to particular use case (e.g. neuroscience or medical imaging analysis).

All the packages work well together, but each can also be used on its own, or alongside other tools in the Python data analysis ecosystem, like [`pandas`](https://github.com/pydata/pandas), [`scikit-learn`](https://github.com/scikit-learn/scikit-learn), and [`scikit-image`](https://github.com/scikit-image/scikit-image).

