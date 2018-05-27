// Generated by CoffeeScript 1.12.7
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Controls.main__page = (function(superClass) {
    extend(main__page, superClass);

    function main__page() {
      return main__page.__super__.constructor.apply(this, arguments);
    }

    main__page.prototype.createDom = function() {
      return "<div class=\"control container main-page\"> \n    <div class=\"content-wr\">\n        <div class=\"content\">\n            <children>\n        </div>\n    </div>\n    <footer>\n        <div class=\"container\">\n            <div class=\"item\">\n                <a class=\"logo\" target=\"_blank\" href=\"http://ajenti.org\">ajenti</a>\n            </div>\n            <div class=\"item\">\n                <a href=\"https://github.com/ajenti/ajenti/releases\" target=\"_blank\" id=\"version-number\">\n                    v\n                </a>\n            </div>\n            <div class=\"item\">\n                <a href=\"https://github.com/ajenti/ajenti/issues/new\" target=\"_blank\">\n                    Report a bug\n                </a>\n            </div>\n            <div class=\"item\">\n                <a href=\"http://support.ajenti.org/\" target=\"_blank\">\n                    Help &amp; support\n                </a>\n            </div>\n            <div class=\"item\">\n                <a href=\"https://github.com/ajenti/ajenti/\" target=\"_blank\">\n                    Code\n                </a>\n            </div>\n            <div class=\"item\">\n                <a href=\"http://docs.ajenti.org/en/latest/\" target=\"_blank\">\n                    Developer docs\n                </a>\n            </div>\n            <div class=\"item\">\n                <a href=\"/licensing\">\n                    Licensing\n                </a>\n            </div>\n        </div>\n    </footer>\n</div>";
    };

    return main__page;

  })(window.Control);

  window.Controls.main__sections_tab = (function(superClass) {
    extend(main__sections_tab, superClass);

    function main__sections_tab() {
      return main__sections_tab.__super__.constructor.apply(this, arguments);
    }

    main__sections_tab.prototype.createDom = function() {
      return "<a href=\"#\" class=\"tab " + (this.s(this.properties.active ? 'active' : '')) + "\">\n    <i class=\"loader pull-right hide-when-loaded icon icon-spinner icon-spin\"></i>\n    <i class=\"icon-" + (this.s(this.properties.icon)) + "\"></i>&nbsp;" + (this.s(this.properties.title)) + "\n</a>";
    };

    return main__sections_tab;

  })(window.Control);

  window.Controls.main__sections_category = (function(superClass) {
    extend(main__sections_category, superClass);

    function main__sections_category() {
      return main__sections_category.__super__.constructor.apply(this, arguments);
    }

    main__sections_category.prototype.createDom = function() {
      return "<div class=\"control container main-sections-category\"> \n    <div>" + (this.s(this.properties.name)) + "</div>\n    <div class=\"content\">\n        <div class=\"__child-container\">\n            <children>\n        </div>\n    </div>\n</div>";
    };

    return main__sections_category;

  })(window.Control);

  window.Controls.main__sections_root = (function(superClass) {
    extend(main__sections_root, superClass);

    function main__sections_root() {
      return main__sections_root.__super__.constructor.apply(this, arguments);
    }

    main__sections_root.prototype.createDom = function() {
      this.requiresAllChildren = true;
      return "<div class=\"control container main-sections-root\">\n    <div class=\"sidebar\">\n        <div class=\"tabs-container\"></div>\n    </div>\n    <div class=\"main\">\n        <div class=\"child-container\">\n            <children>\n        </div>\n        <div class=\"no-sections\">\n            <div>\n                <div class=\"control label bold\">No plugins are allowed for this user</div>\n            </div>\n            <div>\n                <div class=\"control label\">\n                    Please ask your administrator to go to Configuration plugin and give you permissions to access some plugins.\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    };

    main__sections_root.prototype.setupDom = function(dom) {
      var child, i, len, ref, resizeSidebar, results;
      main__sections_root.__super__.setupDom.call(this, dom);
      this.tabsContainer = $(this.dom).find('.tabs-container');
      this.categories = {};
      setTimeout((function(_this) {
        return function() {
          return _this.restoreScroll();
        };
      })(this), 1);
      resizeSidebar = (function(_this) {
        return function() {
          return setTimeout(function() {
            var h;
            h = ($(window).height() - 80) + 'px';
            return $(_this.dom.children[0].children[0]).css({
              height: h
            });
          }, 1);
        };
      })(this);
      $(document).ready(resizeSidebar);
      $(window).resize(resizeSidebar);
      if (!this.properties.is_empty) {
        $(this.dom).find('.no-sections').remove();
      }
      ref = this.children;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        results.push((function(_this) {
          return function(child) {
            var cat, tab;
            if (!_this.categories[child.properties.category]) {
              cat = new Controls.main__sections_category(_this.ui, {
                name: child.properties.category
              });
              cat.setupDom();
              _this.categories[child.properties.category] = cat;
              _this.tabsContainer.append(cat.dom);
            }
            tab = new Controls.main__sections_tab(_this.ui, $.extend(child.properties, {
              visible: true
            }));
            tab.setupDom();
            $(tab.dom).click(function(e) {
              $(tab.dom).find('.loader').show();
              Feedback.emit('Section activated', {
                Class: child.properties.clsname,
                Name: child.properties.title
              });
              _this.event('switch', {
                uid: child.uid
              });
              return e.preventDefault();
            });
            if (!child.properties.hidden) {
              return _this.categories[child.properties.category].append(tab);
            }
          };
        })(this)(child));
      }
      return results;
    };

    main__sections_root.prototype.saveScroll = function() {
      return this.constructor._savedScroll = $(this.dom.children[0].children[0]).scrollTop();
    };

    main__sections_root.prototype.restoreScroll = function() {
      return $(this.dom.children[0].children[0]).scrollTop(this.constructor._savedScroll);
    };

    main__sections_root.prototype.onBroadcast = function(msg) {
      if (msg === 'destruct') {
        return this.saveScroll();
      }
    };

    return main__sections_root;

  })(window.Control);

  window.Controls.main__section = (function(superClass) {
    extend(main__section, superClass);

    function main__section() {
      return main__section.__super__.constructor.apply(this, arguments);
    }

    main__section.prototype.createDom = function() {
      return "<div class=\"control container section " + (this.properties.active ? 'active' : '') + " normal\">\n    <children>\n</div>";
    };

    return main__section;

  })(window.Control);

  window.Controls.body = (function(superClass) {
    extend(body, superClass);

    function body() {
      return body.__super__.constructor.apply(this, arguments);
    }

    body.prototype.createDom = function() {
      return "<div class=\"control container section-body\">\n    <children>\n</div>";
    };

    return body;

  })(window.Control);

}).call(this);