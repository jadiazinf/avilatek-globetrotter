import logger, { AppLogger } from "@/libs/logger/logger";

export abstract class AppModel {
  private readonly _tableName: string;
  private readonly _logger: AppLogger;

  constructor(tableName: string) {
    this._tableName = tableName;
    this._logger = logger;
  }

  get tableName(): string {
    return this._tableName;
  }

  get logger(): AppLogger {
    return this._logger;
  }
}
