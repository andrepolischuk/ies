
'use strict';

/**
 * User agent
 */

var ua = navigator.userAgent;

/**
 * Export version
 */

module.exports = parse();

/**
 * Get IE major version number
 *
 * @return {Number}
 * @api private
 */

function parse() {
  var msie = /MSIE.(\d+)/i.exec(ua);
  var rv = /Trident.+rv:(\d+)/i.exec(ua);
  var version = msie || rv || undefined;
  return version ? +version[1] : version;
}
