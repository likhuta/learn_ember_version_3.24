import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    console.log(params, '  rental router')
    return this.store.findRecord('rental', params.rental_id);
  }
}
