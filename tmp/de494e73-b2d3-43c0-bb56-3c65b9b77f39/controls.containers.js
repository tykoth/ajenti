// Generated by CoffeeScript 1.12.7
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Controls.pad = (function(superClass) {
    extend(pad, superClass);

    function pad() {
      return pad.__super__.constructor.apply(this, arguments);
    }

    pad.prototype.createDom = function() {
      return "<div class=\"control container pad\">\n    <children>\n</div>";
    };

    return pad;

  })(window.Control);

  window.Controls.indent = (function(superClass) {
    extend(indent, superClass);

    function indent() {
      return indent.__super__.constructor.apply(this, arguments);
    }

    indent.prototype.createDom = function() {
      return "<div class=\"control container indent\">\n    <children>\n</div>";
    };

    return indent;

  })(window.Control);

  window.Controls.box = (function(superClass) {
    extend(box, superClass);

    function box() {
      return box.__super__.constructor.apply(this, arguments);
    }

    box.prototype.createDom = function() {
      var h, w;
      w = this._int_to_px(this.properties.width);
      h = this._int_to_px(this.properties.height);
      return "<div class=\"control container box\" style=\"width: " + w + "; height: " + h + ";\n    overflow: " + (this.properties.scroll ? 'auto' : 'hidden') + "\">\n    <children>\n</div>";
    };

    return box;

  })(window.Control);

  window.Controls.well = (function(superClass) {
    extend(well, superClass);

    function well() {
      return well.__super__.constructor.apply(this, arguments);
    }

    well.prototype.createDom = function() {
      return "<div class=\"control container well\">\n    <children>\n</div>";
    };

    return well;

  })(window.Control);

  window.Controls.center = (function(superClass) {
    extend(center, superClass);

    function center() {
      return center.__super__.constructor.apply(this, arguments);
    }

    center.prototype.createDom = function() {
      return "<div class=\"control container center\">\n    <children>\n</div>";
    };

    return center;

  })(window.Control);

  window.Controls.right = (function(superClass) {
    extend(right, superClass);

    function right() {
      return right.__super__.constructor.apply(this, arguments);
    }

    right.prototype.createDom = function() {
      return "<div class=\"control container right\">\n    <children>\n</div>";
    };

    return right;

  })(window.Control);

  window.Controls.hc = (function(superClass) {
    extend(hc, superClass);

    function hc() {
      return hc.__super__.constructor.apply(this, arguments);
    }

    hc.prototype.createDom = function() {
      return "<table class=\"control container hc " + (this.s(this.properties.style)) + "\">\n    <tr class=\"__child-container\">\n        <children>\n    </tr>\n</table>";
    };

    hc.prototype.wrapChild = function(child) {
      return "<td>" + child.html + "</td>";
    };

    hc.prototype.wrapChildLive = function(child) {
      return $('<td></td>').append(child.dom)[0];
    };

    return hc;

  })(window.Control);

  window.Controls.vc = (function(superClass) {
    extend(vc, superClass);

    function vc() {
      return vc.__super__.constructor.apply(this, arguments);
    }

    vc.prototype.createDom = function() {
      return "<div class=\"control container vc " + (this.s(this.properties.style)) + " __child-container\">\n    <children>\n</div>";
    };

    vc.prototype.wrapChild = function(child) {
      return "<div>" + child.html + "</div>";
    };

    vc.prototype.wrapChildLive = function(child) {
      return $('<div></div>').append(child.dom)[0];
    };

    return vc;

  })(window.Control);

  window.Controls.formline = (function(superClass) {
    extend(formline, superClass);

    function formline() {
      return formline.__super__.constructor.apply(this, arguments);
    }

    formline.prototype.createDom = function() {
      return "<div class=\"control formline\">\n    <div class=\"control label\">" + (this.s(this.properties.text)) + "</div>\n    <div>\n        <children>\n    </div>\n</div>";
    };

    return formline;

  })(window.Control);

  window.Controls.formgroup = (function(superClass) {
    extend(formgroup, superClass);

    function formgroup() {
      return formgroup.__super__.constructor.apply(this, arguments);
    }

    formgroup.prototype.createDom = function() {
      return "<div class=\"control formgroup\">\n    <div>" + (this.s(this.properties.text)) + "</div>\n    <children>\n</div>";
    };

    return formgroup;

  })(window.Control);

  window.Controls.toolbar = (function(superClass) {
    extend(toolbar, superClass);

    function toolbar() {
      return toolbar.__super__.constructor.apply(this, arguments);
    }

    toolbar.prototype.createDom = function() {
      return "<div class=\"control container toolbar\">\n    <children>\n</div>";
    };

    return toolbar;

  })(window.Control);

  window.Controls.dt = (function(superClass) {
    extend(dt, superClass);

    function dt() {
      return dt.__super__.constructor.apply(this, arguments);
    }

    dt.prototype.createDom = function() {
      var w;
      w = this._int_to_px(this.properties.width);
      return "<table cellspacing=\"0\" cellpadding=\"0\"\n    class=\"control table " + (this.s(this.properties.style)) + " " + ((!!this.properties.addrow) ? 'has-addrow' : '') + " " + ((!!this.properties.filtering) ? 'has-filterrow' : '') + " " + ((this.childCount === 0) ? 'empty' : '') + "\"\n    style=\"width: " + w + "\">\n    <tbody>\n        <tr class=\"filterrow\">\n            <td colspan=\"999\">\n                <i class=\"icon-search\"></i>\n                <input type=\"text\" placeholder=\"" + (this.s(this.properties.filterrow)) + "\" />\n            </td>\n        </tr>\n        <children>\n        <tr class=\"emptyrow\">\n            <td colspan=\"999\">\n                " + this.properties.emptytext + "\n            </td>\n        </tr>\n        <tr class=\"addrow\">\n            <td colspan=\"999\">\n                <a>\n                    <i class=\"icon-plus\"></i> " + this.properties.addrow + "\n                </a>\n            </td>\n        </tr>\n    </tbody>\n</table>";
    };

    dt.prototype.setupDom = function(dom) {
      dt.__super__.setupDom.call(this, dom);
      $(this.dom).children('tbody').children('tr.addrow').find('td > a').click((function(_this) {
        return function() {
          return _this.event('add');
        };
      })(this));
      this.filterInput = $(this.dom).children('tbody').children('tr.filterrow').find('td > input');
      this.filterInput.keyup((function(_this) {
        return function() {
          return _this.filter(_this.filterInput.val());
        };
      })(this));
      this.filterInput.val(this.properties.filter);
      return this.filter(this.properties.filter);
    };

    dt.prototype.detectUpdates = function() {
      var filter, oldvalue, r;
      r = {};
      filter = $(this.filterInput).val();
      oldvalue = this.properties.filter || "";
      if (this.properties.type === 'integer') {
        filter = parseInt(filter) || null;
      }
      if (filter !== oldvalue) {
        r.filter = filter;
      }
      this.properties.filter = filter;
      return r;
    };

    dt.prototype.filter = function(query) {
      var _collect_strings, child, j, len, ref, results, visible;
      _collect_strings = function(el) {
        var child, j, len, p, r, ref, ref1, v;
        r = '';
        ref = el.children;
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          r += '|' + _collect_strings(child);
        }
        ref1 = el.properties;
        for (p in ref1) {
          v = ref1[p];
          if (p === 'name' || p === 'title' || p === 'text' || p === 'value') {
            r += '|' + v;
          }
        }
        return r;
      };
      ref = this.children;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        visible = !query || child.properties.header || _collect_strings(child).toUpperCase().indexOf(query.toUpperCase()) !== -1;
        results.push(child.dom.style.display = visible ? 'table-row' : 'none');
      }
      return results;
    };

    return dt;

  })(window.Control);

  window.Controls.sortabledt = (function(superClass) {
    extend(sortabledt, superClass);

    function sortabledt() {
      return sortabledt.__super__.constructor.apply(this, arguments);
    }

    sortabledt.prototype.setupDom = function(dom) {
      var child, i, j, len, ref, results;
      sortabledt.__super__.setupDom.call(this, dom);
      this.tbody = jQuery(this.dom).children('tbody');
      this.tbody.sortable({
        distance: 5,
        cancel: 'input,button,a,.CodeMirror'
      });
      this.order = [];
      i = 1;
      ref = this.children;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        this.order.push(i);
        $(child.dom).attr('data-order', i);
        results.push(i += 1);
      }
      return results;
    };

    sortabledt.prototype.detectUpdates = function() {
      var hasChanges, i, j, r, ref;
      this.newOrder = [];
      hasChanges = false;
      this.tbody.children('.row').each((function(_this) {
        return function(i, e) {
          var idx;
          idx = parseInt($(e).attr('data-order'));
          if ((i + 1) !== idx) {
            hasChanges = true;
          }
          return _this.newOrder.push(idx);
        };
      })(this));
      r = {};
      for (i = j = 0, ref = this.order.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        if (this.newOrder[i] !== this.order[i]) {
          r.order = this.newOrder;
          break;
        }
      }
      r.order = this.newOrder;
      this.order = this.newOrder;
      return r;
    };

    return sortabledt;

  })(window.Controls.dt);

  window.Controls.dtr = (function(superClass) {
    extend(dtr, superClass);

    function dtr() {
      return dtr.__super__.constructor.apply(this, arguments);
    }

    dtr.prototype.createDom = function() {
      return "<tr class=\"row " + (this.properties.header ? 'header-row' : '') + " __child-container\"><children></tr>";
    };

    return dtr;

  })(window.Control);

  window.Controls.dtd = (function(superClass) {
    extend(dtd, superClass);

    function dtd() {
      return dtd.__super__.constructor.apply(this, arguments);
    }

    dtd.prototype.createDom = function() {
      var fw, w;
      w = this._int_to_px(this.properties.width);
      fw = this._int_to_px(this.properties.forcewidth);
      return "<td style=\"width: " + w + "; max-width: " + fw + "\"><children></td>";
    };

    return dtd;

  })(window.Control);

  window.Controls.dth = (function(superClass) {
    extend(dth, superClass);

    function dth() {
      return dth.__super__.constructor.apply(this, arguments);
    }

    dth.prototype.createDom = function() {
      var w;
      w = this._int_to_px(this.properties.width);
      return "<th style=\"width: " + w + "\">" + (this.s(this.properties.text)) + "<children></th>";
    };

    dth.prototype.setupDom = function(dom) {
      dth.__super__.setupDom.call(this, dom);
      if (this.children.length > 0) {
        return $(this.dom).addClass('nopad');
      }
    };

    return dth;

  })(window.Control);

  window.Controls.lt = (function(superClass) {
    extend(lt, superClass);

    function lt() {
      return lt.__super__.constructor.apply(this, arguments);
    }

    lt.prototype.createDom = function() {
      var w;
      w = this._int_to_px(this.properties.width);
      return "<table cellspacing=\"0\" cellpadding=\"0\" class=\"control layout-table\" style=\"width: " + w + "\">\n    <tbody><children></tbody>\n</table>";
    };

    return lt;

  })(window.Control);

  window.Controls.ltr = (function(superClass) {
    extend(ltr, superClass);

    function ltr() {
      return ltr.__super__.constructor.apply(this, arguments);
    }

    ltr.prototype.createDom = function() {
      return "<tr class=\"__child-container\"><children></tr>";
    };

    return ltr;

  })(window.Control);

  window.Controls.ltd = (function(superClass) {
    extend(ltd, superClass);

    function ltd() {
      return ltd.__super__.constructor.apply(this, arguments);
    }

    ltd.prototype.createDom = function() {
      var w;
      w = this._int_to_px(this.properties.width);
      return "<td style=\"width: " + w + "\"><children></td>";
    };

    return ltd;

  })(window.Control);

  window.Controls.collapserow = (function(superClass) {
    extend(collapserow, superClass);

    function collapserow() {
      return collapserow.__super__.constructor.apply(this, arguments);
    }

    collapserow.prototype.createDom = function() {
      return "<tr class=\"row\">\n    <td colspan=\"999\" class=\"control container collapserow\">\n        <div class=\"header\"></div>\n        <div class=\"children\"><children></div>\n    </td>\n</tr>";
    };

    collapserow.prototype.setupDom = function(dom) {
      var dom_child_first, dom_children, dom_header;
      collapserow.__super__.setupDom.call(this, dom);
      dom_header = this.dom.children[0].children[0];
      dom_children = this.dom.children[0].children[1];
      dom_child_first = dom_children.children[0];
      this.container = dom_children;
      this.expanded = this.properties.expanded;
      if (!this.properties.expanded) {
        this.container.style.display = 'none';
      }
      dom_header.appendChild(dom_child_first);
      this.header = dom_header;
      this.header.addEventListener('click', (function(_this) {
        return function(e) {
          _this.expanded = !_this.expanded;
          jQuery(_this.container).toggle('blind');
          if (_this.expanded) {
            _this.broadcast('visible');
          }
          return _this.cancel(e);
        };
      })(this), false);
      return this;
    };

    collapserow.prototype.detectUpdates = function() {
      var r;
      r = {};
      if (this.expanded !== this.properties.expanded) {
        r.expanded = this.expanded;
      }
      this.properties.expanded = this.expanded;
      return r;
    };

    return collapserow;

  })(window.Control);

  window.Controls.tabs = (function(superClass) {
    extend(tabs, superClass);

    function tabs() {
      return tabs.__super__.constructor.apply(this, arguments);
    }

    tabs.prototype.createDom = function() {
      this.requiresAllChildren = true;
      this.lastTabIndex = 0;
      return "<div class=\"control tabs\">\n    <ul></ul>\n    <children>\n</div>";
    };

    tabs.prototype.setupDom = function(dom) {
      var child, fn, j, len, ref;
      tabs.__super__.setupDom.call(this, dom);
      this.active = this.properties.active;
      this.headers = $(this.dom).children('ul');
      ref = this.children;
      fn = (function(_this) {
        return function(child) {
          var header;
          header = $$("<li><a href=\"#uid-" + child.uid + "\">" + child.properties.title + "</a></li>");
          $(header).click((function(child) {
            return function(e) {
              var k, len1, ref1, x;
              _this.active = child.tabIndex;
              _this.event('switch', {});
              _this.headers.find('li').removeClass('active');
              $(header).addClass('active');
              if (_this.properties.client) {
                ref1 = _this.children;
                for (k = 0, len1 = ref1.length; k < len1; k++) {
                  x = ref1[k];
                  $(x.dom).hide();
                }
                $(child.dom).show();
              }
              return _this.cancel(e);
            };
          })(child));
          $(child.dom).hide();
          if (child.tabIndex === _this.active) {
            $(child.dom).show();
            $(header).addClass('active');
          }
          return _this.headers.append(header);
        };
      })(this);
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        fn(child);
      }
      return this;
    };

    tabs.prototype.detectUpdates = function() {
      var r;
      r = {};
      if (this.active !== this.properties.active) {
        r.active = this.active;
      }
      this.properties.active = this.active;
      return r;
    };

    tabs.prototype.wrapChild = function(child) {
      child.tabIndex = this.lastTabIndex;
      this.lastTabIndex += 1;
      return "<div data-index=\"" + child.tabIndex + "\">" + child.html + "</div>";
    };

    return tabs;

  })(window.Control);

  window.Controls.collapse = (function(superClass) {
    extend(collapse, superClass);

    function collapse() {
      return collapse.__super__.constructor.apply(this, arguments);
    }

    collapse.prototype.createDom = function() {
      return "<div class=\"control collapse\">\n    <div class=\"header\"></div>\n    <div class=\"children\">\n        <children>\n    </div>\n</div>";
    };

    collapse.prototype.setupDom = function(dom) {
      collapse.__super__.setupDom.call(this, dom);
      this.header = this.dom.children[0];
      this.container = this.dom.children[1];
      this.expanded = this.properties.expanded;
      if (!this.properties.expanded) {
        this.container.style.display = 'none';
      }
      this.header.addEventListener('click', (function(_this) {
        return function(e) {
          _this.expanded = !_this.expanded;
          jQuery(_this.container).toggle('blind');
          if (_this.expanded) {
            _this.broadcast('visible');
          }
          return _this.cancel(e);
        };
      })(this), false);
      return this.header.appendChild(this.container.children[0]);
    };

    collapse.prototype.detectUpdates = function() {
      var r;
      r = {};
      if (this.expanded !== this.properties.expanded) {
        r.expanded = this.expanded;
      }
      this.properties.expanded = this.expanded;
      return r;
    };

    return collapse;

  })(window.Control);

}).call(this);