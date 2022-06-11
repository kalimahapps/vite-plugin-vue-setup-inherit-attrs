# vite-plugin-vue-setup-inherit-attrs
[![npm](https://img.shields.io/npm/v/vite-plugin-vue-setup-inherit-attrs.svg)](https://www.npmjs.com/package/vite-plugin-vue-setup-inherit-attrs) 
[![npm](https://img.shields.io/npm/dt/vite-plugin-vue-setup-inherit-attrs.svg)](https://www.npmjs.com/package/vite-plugin-vue-setup-inherit-attrs)
[![license](https://img.shields.io/github/license/kalimah-apps/vite-plugin-vue-setup-inherit-attrs.svg)](LICENSE)
![vue-3](https://img.shields.io/badge/vue-3-%2342b883)

Add support for inheritAttrs in vue-setup using vite

## Install
```
npm install vite-plugin-vue-setup-inherit-attrs -D
```

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


## Config
No config needed :)
## License
[MIT License](LICENSE)