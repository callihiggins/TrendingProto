define(['backbone.giraffe.contrib', 
        'views/article',
        'stache!templates/articles'
  ], function(GiraffeContrib, ArticleView, template) {
    var ArticlesList   = GiraffeContrib.CollectionView.extend({
      modelView:        ArticleView,
      template:         template,
      modelViewEl:      '.articles',
      templateStrategy: 'jst'
    });
    return ArticlesList;
});


  