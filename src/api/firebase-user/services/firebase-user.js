'use strict';

/**
 * firebase-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::firebase-user.firebase-user');
