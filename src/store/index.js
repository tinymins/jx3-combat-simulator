/**
 * This file is part of the sciter-boilerplate project.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2022 TINYMINS.
 */

import { DEFAULT_KUNGFU, DEFAULT_TALENT } from '../config/index.js';
import { KUNGFU_DATABASE } from '../database/kungfu.js';
import { TALENT_DATABASE } from '../database/talent.js';

/**
 * 通过心法 ID 生成默认配置项数据
 * @param {string} kungfuId 心法 ID
 * @returns 默认配置项
 */
const createConfig = (kungfuId) => {
  const kungfu = KUNGFU_DATABASE.find(k => k.id === kungfuId) || KUNGFU_DATABASE[0];
  const talent = TALENT_DATABASE.find(t => t.kungfu === kungfuId);
  const config = {
    kungfu: kungfu,
    talent: talent.slots.map((slotOptions, slotIndex) => slotOptions.find(t => t.id === DEFAULT_TALENT[kungfu.id][slotIndex]) || slotOptions[0]),
  };
  return config;
}

/**
 * 用户配置数据
 */
export const JCSConfig = createConfig(DEFAULT_KUNGFU);

/**
 * 装备新的心法
 * @param {string} kungfuId 心法 ID
 */
export const mountKungfu = (kungfuId) => {
  Object.assign(JCSConfig, createConfig(kungfuId));
};
