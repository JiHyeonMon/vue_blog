<template>
    <div>
        <li v-for="user in users" class="item" :key="user.id">
            <p>아이디: {{user.id}}</p>
            <p>비밀번호: {{user.password}}</p>
            <p>이름: {{user.name}}</p>
        </li>
        <router-link :to="{ name: 'home'}" class="link">돌아가기</router-link>
        <router-link :to="{ name: 'signIn'}" class="link">로그인 하러 가기</router-link>
        <router-link :to="{ name: 'signUp'}" class="link">회원가입 하러 가기</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
        };
    }, 
    created() {
        this.$http.get('/api/login').then((res) => {
            const users = res.data.users;
            if (users) {
                this.users = users;
            }
        }).catch((err) => {
            console.error(err);
        })
    }
}
</script>

<style></style>