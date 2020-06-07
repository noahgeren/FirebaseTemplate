<template>
    <b-row>
        <b-col cols="12" md="4" offset-md="4" class="bg-white my-4 py-3 border border-primary rounded">
            <h1 class="pb-3 border-bottom">Login</h1>
            <b-alert v-model="loggedOut" variant="success" dismissible>You have been logged out.</b-alert>
            <b-alert v-model="error" variant="danger" dismissible>Incorrect username or password.</b-alert>
            <b-form @submit.prevent="login">
                <b-form-group
                    label="Email:"
                    label-for="email">
                    <b-form-input v-model="email" id="email" name="email" required></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Password:"
                    label-for="password">
                    <b-form-input type="password" v-model="password" id="password" name="password" required></b-form-input>
                </b-form-group>
                <div class="text-center">
                    <b-button type="submit" variant="primary" :disabled="loading">Login</b-button>
                </div>
            </b-form>
        </b-col>
    </b-row>
</template>
<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            loading: false,
            error: false,
            loggedOut: !!this.$route.query.logout
        };
    },
    methods: {
        login() {
            this.loading = true;
            this.$store.dispatch("signIn", {email: this.email, password: this.password})
                .then(() => {
                    this.$router.push(this.$route.query.to ?? '/');
                }).catch(error => {
                    this.error = true;
                }).finally(() => {
                    this.loading = false;
                });
        }
    },
    watch: {
        loggedOut(newValue) {
            if(!newValue){
                this.$router.push(this.$route.path);
            }
        }
    }
};
</script>