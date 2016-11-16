define(['underscore', 
        'backbone.giraffe', 
        '../models/article'
  ],function(_, Giraffe, Article) {
  
  var Articles = Giraffe.Collection.extend({
    model: Article,
    url: function() {
         return 'https://s1.nyt.com/du/trending/top_pages.jsonp?';
    },

    parse: function(response) {
      return response.top_pages;
    }
 
  })

  return Articles;

});
