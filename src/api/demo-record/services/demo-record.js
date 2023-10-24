'use strict';

/**
 * demo-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-record.demo-record');
