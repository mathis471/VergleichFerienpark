import type { ProviderConnector } from './types'
import { MockProviderConnector } from './mock'

/** V1: all provider connectors delegate to the same deterministic demo source.
 * Replace each implementation with an approved API/feed connector in V2.
 */
export class EuroParcsConnector extends MockProviderConnector implements ProviderConnector {}
export class RoompotConnector extends MockProviderConnector implements ProviderConnector {}
export class CenterParcsConnector extends MockProviderConnector implements ProviderConnector {}
export class MolecatenConnector extends MockProviderConnector implements ProviderConnector {}
export class TopParkenConnector extends MockProviderConnector implements ProviderConnector {}
