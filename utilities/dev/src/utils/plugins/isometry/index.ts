import * as esbuild from 'esbuild';
import * as fs from 'fs-extra';
import * as path from 'path';
import { paths } from '../../../common/common';
import { process } from './process';

const isometryNamespace = 'isometry-css-ns';
const isometryFileFilter = /\.isometry$/;

const isometry: esbuild.Plugin = {
  name: 'isometry',
  setup(build) {
    build.onResolve({ filter: isometryFileFilter }, (args) => {
      return {
        path: args.path,
        namespace: isometryNamespace,
      };
    });

    build.onLoad({ filter: /.*/, namespace: isometryNamespace }, (args) => {
      // const contents = `.button{color:green}`;
      // const contents = fs.readFileSync(args.path);
      // const data = Object(contents);
      // fs.writeFile(path.resolve(paths.output, 'isometry.css'), data);
      return {
        contents: '',
        loader: 'ts',
      };
    });
  },
};

export default isometry;
