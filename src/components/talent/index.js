/**
 * This file is part of the sciter-boilerplate project.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2022 TINYMINS.
 */

// Reactor is available out of the box.
// This sample is modelled after https://preactjs.com/guide/v10/components#class-components

import { TALENT_DATABASE } from '../../database/talent.js';
import { JCSConfig } from '../../store/index.js';

/**
 * 奇穴组件
 *
 * @export
 * @class JCSTalentComponent
 * @extends {Element}
 */
export class JCSTalentComponent extends Element {
  constructor() {
    super();
    this.talentSlotExpandedIndex = -1;
    this.praseJSCConfig();
  }

  praseJSCConfig() {
    const kungfu = JCSConfig.kungfu;
    const talent = TALENT_DATABASE.find(t => t.kungfu === kungfu.id);
    const talentSlots = talent.slots;
    this.kungfu = kungfu;
    this.talentSlots = talentSlots;
    this.talentSlotsMountedIndex = JCSConfig.talent.map((t, slotIndex) => talentSlots[slotIndex].findIndex(p => p.id === t.id));
  }

  ['on click at .talent-item-wrapper'](evt, el) {
    const slotIndex = Number.parseInt(el.attributes.data);
    this.componentUpdate({
      talentSlotExpandedIndex: this.talentSlotExpandedIndex === slotIndex
        ? -1
        : slotIndex,
    });
  }

  ['on click at .talent-item-select-option'](evt, el) {
    const selected = Number.parseInt(el.attributes.data);
    const talentSlotsMountedIndex = [...this.talentSlotsMountedIndex];
    talentSlotsMountedIndex[this.talentSlotExpandedIndex] = selected;
    JCSConfig.talent[this.talentSlotExpandedIndex] = this.talentSlots[this.talentSlotExpandedIndex][selected];
    this.componentUpdate({ talentSlotsMountedIndex: talentSlotsMountedIndex, talentSlotExpandedIndex: -1 });
  }

  render() {
    return <div styleset="components/talent/index.css#talent">
      <div class="talent">
        <div class="talent-title">
          <div class="talent-title-text">
            {
              this.kungfu.name.split('').map(ch => (<div class="talent-title-char">{ ch }</div>))
            }
          </div>
        </div>
        {
          this.talentSlots.map((ts, groupIndex) => {
            const p = ts[this.talentSlotsMountedIndex[groupIndex]];
            return (
              <div class="talent-item">
                <div class="talent-item-wrapper" data={groupIndex.toString()}>
                  <div class="talent-item-icon-wrapper">
                    <div class="talent-item-icon" style={`background-image: url(https://icon.jx3box.com/icon/${p.icon}.png)`} />
                  </div>
                  <div class="talent-item-icon-cover" />
                  <div class="talent-item-name">{p.name}</div>
                </div>
                <div
                  class="talent-item-select"
                  style={{
                    opacity: this.talentSlotExpandedIndex === groupIndex ? 1 : 0,
                    height: this.talentSlotExpandedIndex === groupIndex ? `${60 * ts.length + 4 * (ts.length - 1)}pt` : '0pt',
                  }}
                >
                  {
                    ts.map((t, index) => {
                      return <div class="talent-item-select-option" data={index.toString()}>
                        <div class="talent-item-select-option__icon" style={`background-image: url(https://icon.jx3box.com/icon/${t.icon}.png)`} />
                        <div class="talent-item-select-option__name">{t.name}</div>
                      </div>
                    })
                  }
                </div>
              </div>
            );
          })
        }
      </div>
    </div>;
  }
}

globalThis.JCSTalentComponent = JCSTalentComponent;
