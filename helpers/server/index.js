import "dotenv/config.js"; // eslint-disable-line import/no-unassigned-import
import getPort from "get-port";
import sinon from "sinon";
import supertest from "supertest";
import { testConfig } from "@indiekit-test/config";
import { Indiekit } from "@indiekit/indiekit";

export const testServer = async (options) => {
  sinon.stub(console, "info"); // Disable console.info
  const config = await testConfig(options);
  const indiekit = new Indiekit({ config });
  const app = await indiekit.server({
    port: await getPort(),
  });
  const server = supertest.agent(app);

  return server;
};
