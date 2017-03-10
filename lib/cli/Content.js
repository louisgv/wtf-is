'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function () {
	function Content() {
		(0, _classCallCheck3.default)(this, Content);
	}

	(0, _createClass3.default)(Content, null, [{
		key: 'generateManContent',
		value: function generateManContent(filename) {
			return new _promise2.default(function (resolve, reject) {
				_child_process2.default.exec('man ' + filename, function (err, stdout, stderr) {
					if (err || stderr) {
						return reject({
							err: err,
							stderr: stderr
						});
					}
					resolve(stdout);
				});
			});
		}
	}, {
		key: 'generateApplicationList',
		value: function generateApplicationList(_ref) {
			var applications = _ref.applications;

			if (!applications) {
				return "";
			}
			return "\n\nApplications:\n" + applications.reduce(function (p, c) {
				return p + ('\n  ' + _chalk2.default.green(c.name) + '\n    ' + c.description + '\n');
			}, "");
		}
	}, {
		key: 'generateInfoContent',
		value: function generateInfoContent(_ref2) {
			var filename = _ref2.filename,
			    info = _ref2.info,
			    cwd = _ref2.cwd;

			return '\n  ' + _chalk2.default.green(filename) + '\n  ' + cwd + '\n\nUsage:\n\n\t' + info.usage + '\n\nDescription:\n\n\t' + info.description + '\n' + Content.generateApplicationList(info);
		}
	}]);
	return Content;
}();

exports.default = Content;