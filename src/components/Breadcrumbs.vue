<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mt-3">
      <li class="breadcrumb-item">
        <router-link exact to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link exact to="/">{{ service }}</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">{{ page }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: ['service', 'page']
}
</script>


