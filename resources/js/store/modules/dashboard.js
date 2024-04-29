import axios from "axios";
import appService from "../../services/appService";

export const dashboard = {
    namespaced: true,
    state: {
        totalSales: [],
        totalOrders: [],
        totalCustomers: [],
        totalMenuItems: [],
        salesSummary: [],
        customerStates: [],
        featuredItems: [],
        mostPopularItems: [],
    },

    getters: {
        totalSales: function (state) {
            return state.totalSales;
        },
        totalOrders: function (state) {
            return state.totalOrders;
        },
        totalCustomers: function (state) {
            return state.totalCustomers;
        },
        totalMenuItems: function (state) {
            return state.totalMenuItems;
        },
        salesSummary: function (state) {
            return state.salesSummary;
        },
        customerStates: function (state) {
            return state.customerStates;
        },
        featuredItems: function (state) {
            return state.featuredItems;
        },
        mostPopularItems: function (state) {
            return state.mostPopularItems;
        },
    },

    actions: {
        totalSales: function (context,payload) {
            return new Promise((resolve, reject) => {
                let url = "admin/dashboard/total-sales";
                if (payload) {
                    url = url + appService.requestHandler(payload);
                }
                axios.get(url)
                    .then((res) => {
                        context.commit("totalSales", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        totalOrders: function (context,payload) {
            return new Promise((resolve, reject) => {
                let url = "admin/dashboard/total-orders";
                if (payload) {
                    url = url + appService.requestHandler(payload);
                }
                axios.get(url)
                    .then((res) => {
                        context.commit("totalOrders", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        totalCustomers: function (context,payload) {
            return new Promise((resolve, reject) => {
                let url = "admin/dashboard/total-customers";
                if (payload) {
                    url = url + appService.requestHandler(payload);
                }
                axios.get(url)
                    .then((res) => {
                        context.commit("totalCustomers", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        totalMenuItems: function (context,payload) {
            return new Promise((resolve, reject) => {
                let url = "admin/dashboard/total-menu-items";
                if (payload) {
                    url = url + appService.requestHandler(payload);
                }
                axios.get(url).then((res) => {
                        context.commit("totalMenuItems", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        salesSummary: function (context,payload) {
            return new Promise((resolve, reject) => {
                let url = "admin/dashboard/sales-summary";
                if (payload) {
                    url = url + appService.requestHandler(payload);
                }
                axios.get(url).then((res) => {
                        context.commit("salesSummary", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        customerStates: function (context,payload) {
            return new Promise((resolve, reject) => {
                let url = "admin/dashboard/customer-states";
                if (payload) {
                    url = url + appService.requestHandler(payload);
                }
                axios.get(url).then((res) => {
                        context.commit("customerStates", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        featuredItems: function (context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("admin/dashboard/featured-items")
                    .then((res) => {
                        context.commit("featuredItems", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        mostPopularItems: function (context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("admin/dashboard/popular-items")
                    .then((res) => {
                        context.commit("mostPopularItems", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
    },

    mutations: {
        totalSales: function (state, payload) {
            state.totalSales = payload;
        },
        totalOrders: function (state, payload) {
            state.totalOrders = payload;
        },
        totalCustomers: function (state, payload) {
            state.totalCustomers = payload;
        },
        totalMenuItems: function (state, payload) {
            state.totalMenuItems = payload;
        },
        salesSummary: function (state, payload) {
            state.salesSummary = payload;
        },
        customerStates: function (state, payload) {
            state.customerStates = payload;
        },
        featuredItems: function (state, payload) {
            state.featuredItems = payload;
        },
        mostPopularItems: function (state, payload) {
            state.mostPopularItems = payload;
        },
    },
};
