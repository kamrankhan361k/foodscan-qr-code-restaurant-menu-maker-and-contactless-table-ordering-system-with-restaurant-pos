<template>
    <div v-if="theme === 'frontend'">
        <router-view></router-view>
    </div>

    <div v-if="theme === 'backend'">
        <main class="db-main" v-if="logged">
            <BackendNavbarComponent/>
            <BackendMenuComponent/>
            <router-view></router-view>
        </main>

        <div v-if="!logged">
            <router-view></router-view>
        </div>
    </div>

    <div v-if="theme === 'table'">
        <TableNavbarComponent/>
        <TableCartComponent/>
        <router-view></router-view>
        <TableFooterComponent/>
    </div>

</template>

<script>
import BackendNavbarComponent from "./layouts/backend/BackendNavbarComponent";
import BackendMenuComponent from "./layouts/backend/BackendMenuComponent";
import TableNavbarComponent from "./layouts/table/TableNavBarComponent.vue";
import TableFooterComponent from "./layouts/table/TableFooterComponent.vue";
import TableCartComponent from "./layouts/table/TableCartComponent.vue";

export default {
    name: "DefaultComponent",
    components: {
        TableCartComponent,
        TableFooterComponent,
        TableNavbarComponent,

        BackendNavbarComponent,
        BackendMenuComponent
    },
    data() {
        return {
            theme: "frontend",
        }
    },
    computed: {
        logged: function () {
            return this.$store.getters.authStatus;
        }
    },
    beforeMount() {
        this.$store.dispatch('frontendSetting/lists').then(res => {
            this.$store.dispatch('frontendLanguage/show', res.data.data.site_default_language).then(res => {
                
            }).catch();

            this.$store.dispatch("globalState/init", {
                branch_id: res.data.data.site_default_branch,
                language_id: res.data.data.site_default_language
            });
        }).catch();
    },
    watch: {
        $route(e) {
            if (e.meta.isFrontend === true) {
                this.theme = "frontend";
            } else if(e.meta.isTable === true) {
                this.theme = "table";
            } else {
                this.theme = "backend";
            }
        }
    }
}
</script>
