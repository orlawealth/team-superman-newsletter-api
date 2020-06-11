import swagger from './swagger.json';

import subscribe from './subscription/subscribe.json';
import unsubscribe from './subscription/unsubscribe.json';
import getSubscribers from './subscription/getSubscribers.json';
import getActiveSubscribers from './subscription/getActiveSubscribers.json';

swagger.paths['/subscription/subscribe'] = subscribe;
swagger.paths['/subscription/unsubscribe'] = unsubscribe;
swagger.paths['/subscription/'] = getSubscribers;
swagger.paths['/subscription/active'] = getActiveSubscribers;

export default swagger;
