# thunder-docs

> documentation for [`thunder`](https://github.com/thunder-project/thunder) and related modules

This repository contains two things:

- example tutorial notebooks
- a static documentation site made with [`minidocs`](https://github.com/freeman-lab/minidocs)

You can run the notebooks interactively by clicking this badge.

[![Binder](http://mybinder.org/badge.svg)](http://mybinder.org/repo/thunder-project/thunder-docs)

### for developers

If you want to add documentation, clone this repo and modify the source material as approrpiate, then call

```
npm install
npm start
```

And your browser should open with the rendered site.

### python components

Some site content is derived from Python source files, including source code for automatic method documentation, or Jupyter notebooks. To regenerate markdown content derived from these source files, call

```
npm run build
```

You need to have the `jupyter convert` command line tool available on your system for building.

### deployment

To generate the browserify bundle for deployment, call

```
npm run bundle
```