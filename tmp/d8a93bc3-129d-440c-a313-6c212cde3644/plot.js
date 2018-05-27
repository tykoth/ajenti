// Generated by CoffeeScript 1.12.7
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Controls.munin__plot = (function(superClass) {
    extend(munin__plot, superClass);

    function munin__plot() {
      return munin__plot.__super__.constructor.apply(this, arguments);
    }

    munin__plot.prototype.createDom = function() {
      var url;
      url = '/ajenti:munin-proxy/' + encodeURIComponent(this.properties.url);
      if (this.properties.period) {
        url += this.properties.period + '.png';
      }
      return "<div class=\"control munin-plot " + (this.properties.widget ? 'widget-mode' : '') + "\">\n    <img src=\"" + url + "\" />\n    <a href=\"#\" class=\"control button style-normal\"><i class=\"icon-plus\"></i> Add widget</a>\n</div>";
    };

    munin__plot.prototype.setupDom = function(dom) {
      munin__plot.__super__.setupDom.call(this, dom);
      return $(this.dom).find('a').click((function(_this) {
        return function() {
          return _this.event('widget', {
            url: _this.properties.url,
            period: _this.properties.period
          });
        };
      })(this));
    };

    return munin__plot;

  })(window.Control);

}).call(this);
