# thunder-docs

> documentation for [`thunder`](https://github.com/thunder-project/thunder) and related modules

This repository contains two things:

- example tutorial notebooks
- a static documentation site made with [`minidocs`](https://github.com/freeman-lab/minidocs)

You can run the notebooks interactively by clicking this badge.

[![Binder](http://mybinder.org/badge.svg)](http://mybinder.org/repo/thunder-project/thunder-docs)

### for developers

If you want to add documentation, to see the rendered site, clone this repo and call

```
npm install
```

Then start it by calling

```
npm start
```

And your browser should open with the site.

### python components

Some site components are built from Python source files, including source code for automatic method documentation, or Jupyter notebooks. To regenerate these components, call

```
npm run build
```

You need to have the `jupyter convert` command line tool available on your system for building.

### deployment

To generate the browserify bundle for deployment, call

```
npm run bundle
```