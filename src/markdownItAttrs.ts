module.exports = {
  default: function(context) {
    return {
      plugin: require('markdown-it-attrs'),
      assets: function() {
        return [
          { name: 'markdownit-attrs.css' }
        ];
      },
      attrsOptions: {
        allowedAttributes: ['id', 'class', /^regex.*$/]
      }
    }
  }
}
