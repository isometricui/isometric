import { paths } from '../common/common';
import { logger } from './logger';

async function checkParent({
  parentPaths,
  path,
  execute,
  log,
}: {
  parentPaths: string[];
  path: string;
  execute: () => Promise<void> | void;
  log: { parent: string; task: string };
}) {
  parentPaths.map(async (parent) => {
    if (path.includes(parent) && path !== parent) {
      await execute();
    } else {
      logger(
        `[${log.task}] This command can only be used in a subdirectory of ${log.parent} directory`
      );
    }
  });
}

async function checkCwdInComponents({ task }: { task: string }, execute: () => {}) {
  await checkParent({
    parentPaths: [paths.components, paths.utils],
    path: paths.root,
    log: { parent: 'components', task },
    execute: () => {
      execute();
    },
  });
}

export { checkParent, checkCwdInComponents };
