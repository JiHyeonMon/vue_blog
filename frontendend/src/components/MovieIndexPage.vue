<template>
    <div class="app">
        <h1>5월의 마지막 주 영화 예매 순위</h1>
        <ul class="movies">
            <li v-for="movie in movies" :key="movie.id" class="item">
                <span class="rank">{{movie.id}}</span>
                <router-link :to="{ name:'show', params:{id:movie.id}}">
                    <img v-bind:src = "movie.poster" class="poster"/>
                </router-link>

                <div class="detail">
                    <strong class="rate">예매율</strong>
                    <span class="num">{{movie.rate}}</span>
                    <router-link :to="{name:'show', params:{id:movie.id}}" class="link">자세히 보기</router-link>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    created() {
        this.$http.get('/api/movies').then((response) => {
            this.movies = response.data
        }).catch(err => {
            console.log(err)
        })
    },
    data () {
        return {
            movies: []
        }
    }
}
</script>
