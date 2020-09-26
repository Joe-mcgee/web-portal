'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');


module.exports = {
  async find(ctx) {
    let entities;
    entities = await strapi.services.projects.find(ctx.query);
    entities = entities.map(entity => sanitizeEntity(entity, { model: strapi.models.projects }));
    for (const [i, entity] of entities.entries()) {
      for (const [j, category] of entity.categories.entries()) {
        category.count = await strapi.services.categories.count({id: category.id})
      }
    }
    return entities

    
  },
};

