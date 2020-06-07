<template>
    <div>
        <b-row>
            <b-col class="text-right">
                Logged in as {{ user.email }}
                <b-link @click="logout">Logout</b-link>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user: this.$store.state.user
        };
    },
    methods: {
        logout() {
            this.$store.dispatch('signOut')
                .then(() => {
                    this.$router.push({
                        path: '/login',
                        query: { logout: true }
                    });
                });
        }
    }
}
</script>