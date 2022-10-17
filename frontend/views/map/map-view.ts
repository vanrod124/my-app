import '@vaadin/map';
import { Map } from '@vaadin/map';
import { html, PropertyValues } from 'lit';
import { customElement, query } from 'lit/decorators.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import TileLayer from 'ol/layer/Tile';
// eslint-disable-next-line import/no-extraneous-dependencies
import { fromLonLat } from 'ol/proj';
// eslint-disable-next-line import/no-extraneous-dependencies
import OSM from 'ol/source/OSM';
// eslint-disable-next-line import/no-extraneous-dependencies
import OLView from 'ol/View';
import { View } from '../../views/view';

@customElement('map-view')
export class MapView extends View {
  @query('.map')
  private map!: Map;

  render() {
    return html`<vaadin-map theme="borderless" class="map"></vaadin-map>`;
  }

  firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.map.configuration.addLayer(
      new TileLayer({
        source: new OSM(),
      })
    );
    this.map.configuration.setView(
      new OLView({
        center: fromLonLat([10, 55]),
        zoom: 4,
      })
    );
  }
}
