import * as path from 'path';
import { Extractor, ExtractorConfig, ExtractorResult } from '@microsoft/api-extractor';
import { paths } from './common';
import { logger } from '../../utils/logger';

function apiExtractor() {
  const apiExtractorJsonPath: string = path.resolve(paths.root, 'config/api-extractor.json');
  const extractorConfig: ExtractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);
  const extractorResult: ExtractorResult = Extractor.invoke(extractorConfig, {
    showVerboseMessages: false,
  });

  if (!extractorResult.succeeded) {
    logger(
      `Api Extractor completed with ${extractorResult.errorCount} errors and ${extractorResult.warningCount} warnings`
    );
    process.exitCode = 1;
  }
}

export { apiExtractor };
