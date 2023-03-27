<p align="center">
<h1 align="center">vite-plugin-vue-setup-inherit-attrs</h1>
</p>


<p align="center">
<h3 align="center">Add support for inheritAttrs in vue-setup using vite</h3>
<br>
<br>
</p>

<p align="center">
<a target="_blank" href="https://www.npmjs.com/package/vite-plugin-vue-setup-inherit-attrs">
  <img src="https://img.shields.io/npm/v/vite-plugin-vue-setup-inherit-attrs.svg">
</a>
<a target="_blank" href="https://www.npmjs.com/package/vite-plugin-vue-setup-inherit-attrs">
  <img src="https://img.shields.io/npm/dt/vite-plugin-vue-setup-inherit-attrs.svg">
</a>
<img src="https://img.shields.io/badge/vue-3-%2342b883">
</a>
<img src="https://img.shields.io/github/license/kalimah-apps/vite-plugin-vue-setup-inherit-attrs.svg">
</p>

<p align="center">
<a target=_blank href="https://twitter.com/KalimahApps">
  <img src="https://img.shields.io/twitter/follow/KalimahApps?style=for-the-badge">
</a>
</p>

<br>
<br>

## Install
```
npm install vite-plugin-vue-setup-inherit-attrs -D
```

<br>
<br>

## Usage
In vite.config.ts import the plugin and add plugins array:

```ts
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import inheritAttrs from 'vite-plugin-vue-setup-inherit-attrs';

export default defineConfig({
  plugins: [vue(), inheritAttrs()],
})
```

In vue template add `inherit-attrs="false"`:
```html
<template>
  <div class="root-element">
	  <div class="nested-element" v-bind="$attrs">
		  $attrs will be added to this element instead of the root element
	  </div>
  </div>
</template>

<script lang="ts" setup inherit-attrs="false">
  // code here
</script>
```


<br>
<br>

## Config
No config needed :)

<br>
<br>

## Change Log
### 1.0.4
- Moved to full ESM

<br>
<br>

## Other projects
### [Vue Icons](https://www.npmjs.com/package/@kalimahapps/vue-icons)
60,000+ SVG icons from popular icon sets that you can add seamlessly to your vue projects

### [Vue Popper](https://www.npmjs.com/package/@kalimahapps/vue-popper)
A tooltip component for Vue 3 based on popper.js

### [KalimahApps Eslint Config](https://www.npmjs.com/package/@kalimahapps/eslint-config)
Comprehensive eslint rules for vue projects with typescript


<br>
<br>

## License
[MIT License](LICENSE)
