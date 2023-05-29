import { IndiekitError } from "@indiekit/error";
import { getConfig, queryConfig } from "../config.js";
import { getMf2Properties, jf2ToMf2 } from "../mf2.js";

/**
 * Query previously published posts
 * @type {import("express").RequestHandler}
 */
export const queryController = async (request, response, next) => {
  const { application, publication } = request.app.locals;

  try {
    const config = getConfig(application, publication);

    let { page, limit, offset } = request.query;
    page = Number.parseInt(page, 10) || 1;
    limit = Number.parseInt(limit, 10) || 40;
    offset = Number.parseInt(offset, 10) || (page - 1) * limit;

    let { filter, properties, q, url } = request.query;
    if (!q) {
      throw IndiekitError.badRequest(
        response.locals.__("BadRequestError.missingParameter", "q")
      );
    }

    // `category` param is used to query `categories` configuration property
    q = q === "category" ? "categories" : String(q);

    switch (q) {
      case "config": {
        response.json(config);

        break;
      }

      case "source": {
        if (!application.hasDatabase) {
          throw IndiekitError.notImplemented(
            response.locals.__("NotImplementedError.database")
          );
        }

        // Return mf2 for a given source URL (optionally filtered by properties)
        if (url) {
          const item = await publication.posts.findOne({
            "properties.url": url,
          });

          if (!item) {
            throw IndiekitError.notFound(
              response.locals.__("NotFoundError.resource", "post")
            );
          }

          const mf2 = jf2ToMf2(item.properties);
          response.json(getMf2Properties(mf2, properties));
        }

        // Return mf2 for previously published posts
        const posts = await publication.posts
          .find()
          .sort({ "properties.published": -1 })
          .skip(offset)
          .limit(limit)
          .toArray();

        response.json({
          _count: await publication.posts.countDocuments(),
          items: posts.map((post) => jf2ToMf2(post.properties)),
        });

        break;
      }

      default: {
        // Query configuration value (can be filtered, limited and offset)
        if (config[q]) {
          response.json({
            [q]: queryConfig(config[q], { filter, limit, offset }),
          });
        }

        throw IndiekitError.notImplemented(
          response.locals.__("NotImplementedError.query", {
            key: "q",
            value: q,
          })
        );
      }
    }
  } catch (error) {
    next(error);
  }
};
