<script setup lang="ts">
import {inject} from "vue";

export interface ButtonProps {
  label: string
  className: string
}

const {label, className} = inject<ButtonProps>("config")!
</script>

<template>
<button class={{className}}>
  {{label}}
</button>
</template>