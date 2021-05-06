import * as ts from 'typescript';

function compile({ files, options }: { files: string[]; options: ts.CompilerOptions }): void {
  ts.createProgram(files, options).emit();
}

function generateTsDeclaration({ entry, output }: { entry: string; output: string }) {
  const files = [entry];
  const options = {
    target: ts.ScriptTarget.ES2016,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    jsx: ts.JsxEmit.React,
    emitDeclarationOnly: true,
    declaration: true,
    declarationMap: true,
    sourceMap: true,
    outDir: output,
  };
  compile({ files, options });
}

export { generateTsDeclaration };
