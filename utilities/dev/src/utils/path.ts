import { paths } from '../scripts/common/common';
import { logger } from './logger';

async function checkParent({
  parent,
  path,
  execute,
  log,
}: {
  parent: string;
  path: string;
  execute: () => Promise<void> | void;
  log: { parent: string; task: string };
}) {
  if (path.includes(parent) && path !== parent) {
    await execute();
  } else {
    logger(
      `[${log.task}] This command can only be used in a subdirectory of ${log.parent} directory`
    );
  }
}

async function checkCwdInComponents({ task }: { task: string }, execute: () => {}) {
  await checkParent({
    parent: paths.components,
    path: paths.root,
    log: { parent: 'components', task },
    execute: () => {
      execute();
    },
  });
}

export { checkParent, checkCwdInComponents };
