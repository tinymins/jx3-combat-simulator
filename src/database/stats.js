/**
 * This file is part of the sciter-boilerplate project.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2022 TINYMINS.
 */

/**
 * 面板属性数据库
 */
export const STATS_DATABASE = [
  {
    // 天罗诡道
    kungfu: "10225",
    stats: [
      { key: "spunk", name: "元气", defaultValue: '3861' },
      { key: "basicAttack", name: "基础攻击", defaultValue: '12384' },
      { key: "finalAttack", name: "最终攻击", defaultValue: '19141' },
      { key: "overcome", name: "破防等级", defaultValue: '11703' },
      { key: "overcomePercent", name: "破防%", calc: 'overcome / 35737.50 * 100' },
      { key: "speed", name: "加速等级", defaultValue: '150' },
      { key: "speedPercent", name: "加速%", calc: 'speed / 43856.25 * 100' },
      { key: "surplus", name: "破招", defaultValue: '5693' },
      { key: "weaponAttack", name: "武器伤害", defaultValue: '1173.5' },
      { key: "physicsCriticalStrike", name: "会心%", defaultValue: '34.92' },
      { key: "physicsCriticalDamage", name: "会心效果%", defaultValue: '185.89' },
      { key: "strain", name: "无双%", defaultValue: '34.75' },
      { key: "physicsAttack", name: "外功攻击", defaultValue: '5' },
      { key: "physicsOvercome", name: "外功破防", defaultValue: '11' },
    ],
  },
];
