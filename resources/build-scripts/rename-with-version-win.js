'use strict';
/**
 * External Dependencies
 */
var fs = require( 'fs' );

/**
 * Internal dependencies
 */
var config = require( '../lib/config' );

fs.renameSync( './release/' + config.name + ' Setup ' + config.version + '.exe', './release/' + config.name + '-' + config.version + '-Setup.exe' );
