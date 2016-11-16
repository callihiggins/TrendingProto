require.config({
  baseUrl: "./js/",
  paths: {
    jquery:                     'lib/jquery-1.8.2',
    underscore:                 'lib/underscore-1.8.3',
    backbone:                   'lib/backbone-1.3.3',
    'backbone.localStorage':    'lib/backbone.localStorage',
    'backbone.giraffe':         'lib/backbone.giraffe',
    'backbone.giraffe.contrib': 'lib/backbone.giraffe.contrib',
    'text':                     'lib/text',
    'stache':                   'lib/stache',
    mustache:                   'lib/mustache',
  },
  config: {
    'stache': {
        extension: '.mustache'
    }
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'backbone.giraffe': {
      deps: ['backbone'],
      exports: 'Giraffe'
    },
    'backbone.giraffe.contrib': {
      deps: ['backbone.giraffe'],
      exports: 'GiraffeContrib'
    }
  }
});

define([
    'jquery',
    'underscore',
    'backbone',
    'backbone.giraffe',
    'collections/articles',
    'views/MasterView'
  ], function($, _, Backbone, Giraffe, Articles, MasterView) {
    
    var Router = Backbone.Router.extend({
        routes: {
          "": "main"
        },

        main: function(){
          console.log('main');
          var that = this;
          var articles = new Articles([]);

          articles.fetch({
            dataType: "jsonp",
            jsonpCallback: "top_pages_callback",
            success: function(collection, response, options){
              var masterView = new MasterView({collection: collection});
              $("#container").html(masterView.render().el);
            },
            error: function(collection, response, options) {
              console.log(response.resonse_text);
            },
          });
        }
    });
    
    var router = new Router();
    Backbone.history.start();
});




