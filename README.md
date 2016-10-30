# Metalsmith blog example

> An example of using [Metalsmith](http://metalsmith.io/) as static blog generator

Use as guide, as starting point, however you want.

Clone or [get the ZIP](https://github.com/sole/metalsmith-blog-example/archive/master.zip), then make sure to run `npm install` before anything else, to get dependencies installed.

* Blog contents are in the `src` folder--each post on its own folder. So you can add images on the folder and make them relative to each post.
* Templates are defined in the `layouts` folder.

Edit everything to make it your own!

## Commands

* `npm run start` will build the blog into `build`
* `npm run watch` will build the blog, start an http server serving pages from `build` so you can test locally. It also sets a file watcher to rebuild the blog as you make changes to the files, without having to manually initiate the rebuilds.
* `npm run publish` will publish the contents of `build` to a `gh-pages` branch in GitHub and push to the remote repository. Which means that if you are using GitHub, you get your blog published to their platform with just a command! 💯
