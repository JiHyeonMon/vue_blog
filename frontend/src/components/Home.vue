<template>
  <div class="wrap">
    <h1>HOME</h1>
    <div>
        <router-link :to="{ name: 'userPage'}" class="link">사용자</router-link>
        <router-link :to="{ name: 'blogHome'}" class="link">블로그</router-link>
        <router-link :to="{ name: 'movieIndex'}" class="link">영화 데이터</router-link>
    </div>
  </div>
</template>

<script>
</script>