'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');
module.exports = {

  async find(ctx) {
    let entities;
    entities = await strapi.services.categories.find(ctx.query);
    entities = entities.map(entity => sanitizeEntity(entity, { model: strapi.models.categories }));
    for (const [i, entity] of entities.entries()) {
        entity.count = await strapi.services.posts.count({'categories': entity.id})
    }
    return entities
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    let entity = await strapi.services.categories.findOne({ id });
    entity = sanitizeEntity(entity, { model: strapi.models.categories });
    entity.count = await strapi.services.posts.count({'categories': entity.id})
    return entity
  },

};
