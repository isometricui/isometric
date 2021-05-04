import * as ts from 'typescript';

function compile(fileNames: string[], options: ts.CompilerOptions): void {
  ts.createProgram(fileNames, options).emit();
}

function buildTsDeclarationFiles(entry: string) {
  const files = [entry];

  compile(files, {
    target: ts.ScriptTarget.ES2016,
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    jsx: ts.JsxEmit.React,
    emitDeclarationOnly: true,
    declaration: true,
    outDir: 'dist',
  });
}

export { buildTsDeclarationFiles };
