var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var metalPaths = require('metalsmith-path');
var feed = require('@sole/metalsmith-feed-decaf');
var archive = require('metalsmith-archive');


var metadata = {
	site: {
		title: 'Metalsmith blog example',
		url: 'https://example.com',
		author: 'Author name',
		author_url: 'http://author-url.example.com'
	}
};


Metalsmith(__dirname)
	.metadata(metadata)
	.ignore('.DS_Store')
	.source('./src')
	.destination('./build')
	.use(markdown())
	.use(collections({
		posts: {
			pattern: 'posts/*/index.*',
			sortBy: 'date',
			reverse: true
		},
		pages: {
			pattern: 'pages/*'
		}
	}))
	.use(permalinks({ relative: false }))
	.use(metalPaths())
	.use(feed({
		collection: 'posts',
		destination: 'feed/posts.xml',
		generator: metadata.site.title
	}))
	.use(archive({
		collection: 'posts'
	}))
	.use(layouts({
		engine: 'handlebars',
		default: 'default.html',
		partials: './layouts/partials',
		pattern: '**/*.html'
	}))
	.build(function(err, files) {
		if(err) { throw err; }
	});





function pathify(files, metalsmith, done) {
	Object.keys(files).forEach((k) => {
		console.log('pathifying', k);
		var file = files[k];
		file.path = k;
	});
	done();
}


