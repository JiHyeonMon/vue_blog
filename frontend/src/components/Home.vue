<template>
  <div class="wrap">
    <h1>HOME</h1>
    <div>
        <router-link :to="{ name: 'userPage'}" class="link">사용자 데이터</router-link>
        <router-link :to="{ name: 'movieIndex'}" class="link">영화 데이터</router-link>
    </div>
</template>

<script>
</script>