/**
 * This file is part of the sciter-boilerplate project.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2022 TINYMINS.
 */

// Reactor is available out of the box.
// This sample is modelled after https://preactjs.com/guide/v10/components#class-components

import { STATS_DATABASE } from '../../database/stats.js';
import { JCSConfig } from '../../store/index.js';

/**
 * 基础属性设置
 *
 * @export
 * @class JCSStatsComponent
 * @extends {Element}
 */
export class JCSStatsComponent extends Element {
  constructor() {
    super();
    this.praseJSCConfig();
  }

  praseJSCConfig() {
    const kungfu = JCSConfig.kungfu;
    const stats = STATS_DATABASE.find(p => p.kungfu === kungfu.id).stats;
    this.kungfu = kungfu;
    this.stats = stats;
    this.statsValues = JCSConfig.stats;
  }

  ['on input at .stats-item-value'](evt, el) {
    const key = el.attributes.data;
    const value = el.value;
    const statsValues = { ...this.statsValues, [key]: value };
    JCSConfig.stats = statsValues;
    this.componentUpdate({ statsValues });
  }

  render() {
    return <div class="stats" styleset="components/stats/index.css#stats">
      <div class="stats-names">
        {
          this.stats.map(p => (
            <div class="stats-item-name">{ p.name }</div>
          ))
        }
      </div>
      <div class="stats-values">
        {
          this.stats.map(p => (
            <input
              class="stats-item-value"
              data={p.key}
              type="number"
              value={
                p.calc
                  ? new Function(...this.stats.map(p => p.key), `return ${p.calc}`)(...this.stats.map(p => this.statsValues[p.key]))
                  : this.statsValues[p.key]
              }
              disabled={p.calc ? true : false}
            />
          ))
        }
      </div>
    </div>;
  }
}

globalThis.JCSStatsComponent = JCSStatsComponent;
