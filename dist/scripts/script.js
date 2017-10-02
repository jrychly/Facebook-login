// This file was generated by modules-webmake (modules for web) project.
// See: https://github.com/medikoo/modules-webmake

(function (modules) {
	'use strict';

	var resolve, getRequire, wmRequire, notFoundError, findFile
	  , extensions = {".js":[".coffee",".jsx",".es6",".es"],".json":[],".css":[],".html":[]}
	  , envRequire = typeof require === 'function' ? require : null;

	notFoundError = function (path) {
		var error = new Error("Could not find module '" + path + "'");
		error.code = 'MODULE_NOT_FOUND';
		return error;
	};
	findFile = function (scope, name, extName) {
		var i, ext;
		if (typeof scope[name + extName] === 'function') return name + extName;
		for (i = 0; (ext = extensions[extName][i]); ++i) {
			if (typeof scope[name + ext] === 'function') return name + ext;
		}
		return null;
	};
	resolve = function (scope, tree, path, fullPath, state, id) {
		var name, dir, exports, module, fn, found, ext;
		path = path.split(/[\\/]/);
		name = path.pop();
		if ((name === '.') || (name === '..')) {
			path.push(name);
			name = '';
		}
		while ((dir = path.shift()) != null) {
			if (!dir || (dir === '.')) continue;
			if (dir === '..') {
				scope = tree.pop();
				id = id.slice(0, id.lastIndexOf('/'));
			} else {
				tree.push(scope);
				scope = scope[dir];
				id += '/' + dir;
			}
			if (!scope) throw notFoundError(fullPath);
		}
		if (name && (typeof scope[name] !== 'function')) {
			found = findFile(scope, name, '.js');
			if (!found) found = findFile(scope, name, '.json');
			if (!found) found = findFile(scope, name, '.css');
			if (!found) found = findFile(scope, name, '.html');
			if (found) {
				name = found;
			} else if ((state !== 2) && (typeof scope[name] === 'object')) {
				tree.push(scope);
				scope = scope[name];
				id += '/' + name;
				name = '';
			}
		}
		if (!name) {
			if ((state !== 1) && scope[':mainpath:']) {
				return resolve(scope, tree, scope[':mainpath:'], fullPath, 1, id);
			}
			return resolve(scope, tree, 'index', fullPath, 2, id);
		}
		fn = scope[name];
		if (!fn) throw notFoundError(fullPath);
		if (fn.hasOwnProperty('module')) return fn.module.exports;
		exports = {};
		fn.module = module = { exports: exports, id: id + '/' + name };
		fn.call(exports, exports, module, getRequire(scope, tree, id));
		return module.exports;
	};
	wmRequire = function (scope, tree, fullPath, id) {
		var name, path = fullPath, t = fullPath.charAt(0), state = 0;
		if (t === '/') {
			path = path.slice(1);
			scope = modules['/'];
			if (!scope) {
				if (envRequire) return envRequire(fullPath);
				throw notFoundError(fullPath);
			}
			id = '/';
			tree = [];
		} else if (t !== '.') {
			name = path.split('/', 1)[0];
			scope = modules[name];
			if (!scope) {
				if (envRequire) return envRequire(fullPath);
				throw notFoundError(fullPath);
			}
			id = name;
			tree = [];
			path = path.slice(name.length + 1);
			if (!path) {
				path = scope[':mainpath:'];
				if (path) {
					state = 1;
				} else {
					path = 'index';
					state = 2;
				}
			}
		}
		return resolve(scope, tree, path, fullPath, state, id);
	};
	getRequire = function (scope, tree, id) {
		return function (path) {
			return wmRequire(scope, [].concat(tree), path, id);
		};
	};
	return getRequire(modules, [], '');
})({
	"FBlogin": {
		"src": {
			"scripts": {
				"script.es6": function (exports, module, require) {
					eval("'use strict';\n\n(function (d, s, id) {\n  var js,\n      fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s);js.id = id;\n  js.src = \"//connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v2.10&appId=197869363974202\";\n  fjs.parentNode.insertBefore(js, fjs);\n})(document, 'script', 'facebook-jssdk');\n\nwindow.fbAsyncInit = function () {\n  FB.init({\n    appId: '197869363974202',\n    autoLogAppEvents: true,\n    xfbml: true,\n    version: 'v2.10'\n  });\n  FB.AppEvents.logPageView();\n\n  FB.getLoginStatus(function (response) {\n    if (response.status === 'connected') {\n      FB.api('/me', 'GET', { \"fields\": \"name,email\" }, function (response) {\n        document.getElementById(\"info\").innerHTML = response.name + \"<br>\" + response.email;\n      });\n    }\n  });\n};//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5lczYiXSwibmFtZXMiOlsiZCIsInMiLCJpZCIsImpzIiwiZmpzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJmYkFzeW5jSW5pdCIsIkZCIiwiaW5pdCIsImFwcElkIiwiYXV0b0xvZ0FwcEV2ZW50cyIsInhmYm1sIiwidmVyc2lvbiIsIkFwcEV2ZW50cyIsImxvZ1BhZ2VWaWV3IiwiZ2V0TG9naW5TdGF0dXMiLCJyZXNwb25zZSIsInN0YXR1cyIsImFwaSIsImlubmVySFRNTCIsIm5hbWUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQyxXQUFTQSxDQUFULEVBQVlDLENBQVosRUFBZUMsRUFBZixFQUFtQjtBQUNwQixNQUFJQyxFQUFKO0FBQUEsTUFBUUMsTUFBTUosRUFBRUssb0JBQUYsQ0FBdUJKLENBQXZCLEVBQTBCLENBQTFCLENBQWQ7QUFDQSxNQUFJRCxFQUFFTSxjQUFGLENBQWlCSixFQUFqQixDQUFKLEVBQTBCO0FBQzFCQyxPQUFLSCxFQUFFTyxhQUFGLENBQWdCTixDQUFoQixDQUFMLENBQXlCRSxHQUFHRCxFQUFILEdBQVFBLEVBQVI7QUFDekJDLEtBQUdLLEdBQUgsR0FBUyxpRkFBVDtBQUNBSixNQUFJSyxVQUFKLENBQWVDLFlBQWYsQ0FBNEJQLEVBQTVCLEVBQWdDQyxHQUFoQztBQUNDLENBTkEsRUFNQ08sUUFORCxFQU1XLFFBTlgsRUFNcUIsZ0JBTnJCLENBQUQ7O0FBUUFDLE9BQU9DLFdBQVAsR0FBcUIsWUFBVztBQUM5QkMsS0FBR0MsSUFBSCxDQUFRO0FBQ05DLFdBQW1CLGlCQURiO0FBRU5DLHNCQUFtQixJQUZiO0FBR05DLFdBQW1CLElBSGI7QUFJTkMsYUFBbUI7QUFKYixHQUFSO0FBTUFMLEtBQUdNLFNBQUgsQ0FBYUMsV0FBYjs7QUFFQVAsS0FBR1EsY0FBSCxDQUFrQixVQUFTQyxRQUFULEVBQW1CO0FBQ25DLFFBQUlBLFNBQVNDLE1BQVQsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkNWLFNBQUdXLEdBQUgsQ0FDSSxLQURKLEVBRUksS0FGSixFQUdJLEVBQUMsVUFBUyxZQUFWLEVBSEosRUFJSSxVQUFTRixRQUFULEVBQW1CO0FBQ2ZaLGlCQUFTTCxjQUFULENBQXdCLE1BQXhCLEVBQWdDb0IsU0FBaEMsR0FBNENILFNBQVNJLElBQVQsR0FBZ0IsTUFBaEIsR0FBeUJKLFNBQVNLLEtBQTlFO0FBQ0gsT0FOTDtBQVFEO0FBQ0YsR0FYRDtBQVlELENBckJEIiwiZmlsZSI6InNjcmlwdC5lczYiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oZCwgcywgaWQpIHtcclxudmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG5pZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcclxuanMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7IGpzLmlkID0gaWQ7XHJcbmpzLnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9jc19DWi9zZGsuanMjeGZibWw9MSZ2ZXJzaW9uPXYyLjEwJmFwcElkPTE5Nzg2OTM2Mzk3NDIwMlwiO1xyXG5manMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbn0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XHJcblxyXG53aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcclxuICBGQi5pbml0KHtcclxuICAgIGFwcElkICAgICAgICAgICAgOiAnMTk3ODY5MzYzOTc0MjAyJyxcclxuICAgIGF1dG9Mb2dBcHBFdmVudHMgOiB0cnVlLFxyXG4gICAgeGZibWwgICAgICAgICAgICA6IHRydWUsXHJcbiAgICB2ZXJzaW9uICAgICAgICAgIDogJ3YyLjEwJ1xyXG4gIH0pO1xyXG4gIEZCLkFwcEV2ZW50cy5sb2dQYWdlVmlldygpO1xyXG5cclxuICBGQi5nZXRMb2dpblN0YXR1cyhmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcclxuICAgICAgRkIuYXBpKFxyXG4gICAgICAgICAgJy9tZScsXHJcbiAgICAgICAgICAnR0VUJyxcclxuICAgICAgICAgIHtcImZpZWxkc1wiOlwibmFtZSxlbWFpbFwifSxcclxuICAgICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpLmlubmVySFRNTCA9IHJlc3BvbnNlLm5hbWUgKyBcIjxicj5cIiArIHJlc3BvbnNlLmVtYWlsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iXX0=\n//# sourceURL=FBlogin/src/scripts/script.js");
				}
			}
		}
	}
})("FBlogin/src/scripts/script");

//# sourceMappingURL=script.js.map
