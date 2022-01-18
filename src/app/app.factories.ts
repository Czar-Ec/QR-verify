import { ConfigurationService } from "./configuration.service";

/**
 * Return the hash configs
 * @param configurationService
 */
 export function hashFactory(configurationService: ConfigurationService) {
  return configurationService.config.hashStorage;
}