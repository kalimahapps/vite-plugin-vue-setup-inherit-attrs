# vite-plugin-vue-setup-inherit-attrs
Add support for inheritAttrs in vue-setup using vite

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

In vue template add inherit-attrs="false":
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