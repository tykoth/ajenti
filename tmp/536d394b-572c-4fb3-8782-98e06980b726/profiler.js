// Generated by CoffeeScript 1.12.7
(function() {
  var Profiler;

  Profiler = (function() {
    function Profiler() {
      this.profiles = {};
      this.results = {};
      this.timeout = null;
      this.stack = [];
    }

    Profiler.prototype.start = function(id) {
      var base;
      if (this.profiles[id]) {
        return this.stack.push(null);
      } else {
        if ((base = this.profiles)[id] == null) {
          base[id] = new Date().getTime();
        }
        return this.stack.push(id);
      }
    };

    Profiler.prototype.stop = function(id) {
      var base;
      if (id == null) {
        id = this.stack.pop();
      }
      if (id === null) {
        return;
      }
      if ((base = this.results)[id] == null) {
        base[id] = 0.0;
      }
      this.results[id] += new Date().getTime() - this.profiles[id];
      this.profiles[id] = void 0;
      clearTimeout(this.timeout);
      return this.timeout = setTimeout((function(_this) {
        return function() {
          return _this.dump();
        };
      })(this), 1000);
    };

    Profiler.prototype.dump = function() {
      var id;
      for (id in this.results) {
        console.log('Profiled', id, this.results[id] / 1000, 's');
      }
      return this.results = {};
    };

    return Profiler;

  })();

  window.profiler = new Profiler();

}).call(this);
