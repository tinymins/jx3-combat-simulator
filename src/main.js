/**
 * This file is part of the sciter-boilerplate project.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2022 TINYMINS.
 */

import { $ } from "@sciter";

import { SIMULATOR_NAME } from './config/index.js';

const view = Window.this;

view.caption = SIMULATOR_NAME;
$('title').textContent = SIMULATOR_NAME;
