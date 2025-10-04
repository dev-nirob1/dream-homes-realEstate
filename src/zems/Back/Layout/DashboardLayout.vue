<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="large-6 gap-1">
    <aside class="large-span-2">
      <ul>
        <ListItem>
          <RouterLink to="">link</RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink to="">link</RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink to="">link</RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink to="">link</RouterLink>
        </ListItem>
      </ul>
    </aside>
    <div class="large-span-4">
      <RouterView />
    </div>
  </div>
</template>
