define(['backbone.giraffe', 'stache!templates/article'], function(Giraffe, template) {
  var ArticleView = Giraffe.View.extend({
    className: 'article',
    template: template,
    templateStrategy: 'jst',
   
    serialize: function() {
        return this.model.toJSON();
    }

  });
  return ArticleView;
});
