/**
 * This file is part of the sciter-boilerplate project.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2022 TINYMINS.
 */

import { $ } from '@sciter';

import { SIMULATOR_NAME } from './config/index.js';

const view = Window.this;
if (view) {
  view.caption = SIMULATOR_NAME;
}

const titleEl = $('title');
if (titleEl) {
  titleEl.textContent = SIMULATOR_NAME;
}

const captionEl = $('window-caption');
if (captionEl) {
  captionEl.textContent = SIMULATOR_NAME;
}
