// Reactor is available out of the box.
// This sample is modelled after https://preactjs.com/guide/v10/components#class-components

import { KUNGFU_NAME } from '../../config/index.js';

// 奇穴组件

export class JCSTalentComponent extends Element {
  constructor() {
    super();
    this.time = Date.now();
  }

  render() {
    return <div styleset="components/talent/index.css#talent">
      <div class="talent">
        <div class="talent-title">
          <div class="talent-title-text">
            {
              KUNGFU_NAME.split('').map(ch => (<div class="talent-title-char">{ ch }</div>))
            }
          </div>
        </div>
        {
          [
            { icon: 16217, name: '血影留痕' },
            { icon: 3224, name: '蚀肌之伤' },
            { icon: 3291, name: '弩击急骤' },
            { icon: 3205, name: '千机之威' },
            { icon: 3230, name: '千机巨搫' },
            { icon: 3231, name: '聚精凝神' },
            { icon: 3188, name: '化血迷心' },
            { icon: 3237, name: '蚀肌化血' },
            { icon: 7438, name: '秋风散影' },
            { icon: 3202, name: '回肠荡气' },
            { icon: 3180, name: '曙色催寒' },
            { icon: 3223, name: '雷甲三铉' },
          ].map(p => (
            <div class="talent-item">
              <div class="talent-item-wrapper">
                <div class="talent-item-icon-wrapper">
                  <div class="talent-item-icon" style={`background-image: url(https://icon.jx3box.com/icon/${p.icon}.png)`} />
                </div>
                <div class="talent-item-icon-cover" />
                <div class="talent-item-name">{p.name}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>;
  }
}

globalThis.JCSTalentComponent = JCSTalentComponent;
