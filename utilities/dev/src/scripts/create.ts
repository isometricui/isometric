import * as fs from 'fs-extra';
import * as path from 'path';

function createComponent({ name, dryRun = false }: { name: string; dryRun: boolean }) {
  const uppercasedName = name
    .split('-')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  const capitalizedName = uppercasedName.join('');
  const presentationalName = uppercasedName.join(' ');

  const paths = {
    rushRoot: path.resolve(__dirname, '../../../'),
    template: path.resolve(__dirname, '../src/templates/component'),
    temporary: path.resolve(__dirname, '../../../components/.temp'),
    temporaryTarget: path.resolve(__dirname, '../../../components/.temp', name),
    target: path.resolve(__dirname, '../../../components', name),
  };

  const namedFiles = [
    { path: 'src', extension: '.tsx' },
    { path: 'src', extension: '.css' },
    { path: 'src/__tests__', extension: '.tsx' },
  ];

  const templatedFiles = [
    { path: './', name: 'package.json' },
    { path: './', name: 'README.md' },
    { path: 'src', name: 'index.ts' },
    { path: 'src', name: 'styles.css' },
    { path: 'src', name: 'Component.tsx' },
    { path: 'src/__tests__', name: 'Component.tsx' },
  ];

  // Empty temporary directory
  fs.emptyDirSync(paths.temporary);
  // Copy template to temporary directory
  fs.copySync(paths.template, paths.temporaryTarget);

  // Replace COMPONENT_NAME and COMPONENT_NAME_CAPS inside files
  templatedFiles.map((file) => {
    const contents = fs.readFileSync(
      path.resolve(paths.temporaryTarget, file.path, file.name),
      {
        encoding: 'utf8',
      }
    );
    const replacedContents = contents
      .replace(/PRESENTATIONAL_NAME/g, presentationalName)
      .replace(/CAPITAL_NAME/g, capitalizedName)
      .replace(/DASHED_NAME/g, name);
    fs.writeFileSync(
      path.resolve(paths.temporaryTarget, file.path, file.name),
      replacedContents,
      {
        encoding: 'utf8',
      }
    );
  });

  // Rename filenames (Component -> TargetComponentName)
  namedFiles.map((file) => {
    fs.renameSync(
      path.resolve(paths.temporaryTarget, file.path, `Component${file.extension}`),
      path.resolve(
        paths.temporaryTarget,
        file.path,
        `${capitalizedName}${file.extension}`
      )
    );
  });

  if (!dryRun) {
    // Copy from temporary directory to target directory
    fs.copySync(paths.temporaryTarget, paths.target);

    // Add new package entry in rush.json
    const rushJson = fs.readJSONSync(path.resolve(paths.rushRoot, 'rush.json'));
    const newPackage = {
      packageName: `@isometric/${name}`,
      projectFolder: `components/${name}`,
      reviewCategory: 'component',
    };
    const updatedRushJson = { ...rushJson, projects: [...rushJson.projects, newPackage] };
    fs.writeFileSync(
      path.resolve(paths.rushRoot, 'rush.json'),
      JSON.stringify(updatedRushJson, null, 2)
    );

    // Clean-up temporary directory
    fs.emptyDirSync(paths.temporary);
  }
}

export { createComponent };
