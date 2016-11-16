define([
    'backbone.giraffe',
    'views/articlesList',
  ], function(Giraffe, ArticlesList) {
  var MasterView = Giraffe.View.extend({
    
    className: 'masterView',

    afterRender: function() {
      var articleList = new ArticlesList({collection: this.collection});
      this.attach(articleList, {el: this.$el});
    }
   
  });
  return MasterView;
});