'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */


/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');


module.exports = {
  async find(ctx) {
    let entities;
    entities = await strapi.services.posts.find(ctx.query);
    entities = entities.map(entity => sanitizeEntity(entity, { model: strapi.models.posts }));
    for (const [i, entity] of entities.entries()) {
      for (const [j, category] of entity.categories.entries()) {
        category.count = await strapi.services.posts.count({categories: category.id})
      }
    }
    return entities
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    let entity = await strapi.services.posts.findOne({ id });
    entity = sanitizeEntity(entity, { model: strapi.models.posts });
    for (const [j, category] of entity.categories.entries()) {
      category.count = await strapi.services.posts.count({categories: category.id})
    }
    return entity
  },
};

