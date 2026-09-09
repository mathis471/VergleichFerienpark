import type { ProviderConnector } from './types'
import { EuroParcsConnector, RoompotConnector, CenterParcsConnector, MolecatenConnector, TopParkenConnector } from './providers'
export const connectors:Record<string,ProviderConnector>={
 europarcs:new EuroParcsConnector(), roompot:new RoompotConnector(), 'center-parcs':new CenterParcsConnector(), molecaten:new MolecatenConnector(), topparken:new TopParkenConnector()
}
