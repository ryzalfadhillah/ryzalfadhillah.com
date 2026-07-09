// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'mxkcjxob', // Project ID cloud Sanity kamu
    dataset: 'production'  // Dataset target kamu
  }
});