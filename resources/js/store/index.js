import {createStore} from "vuex";

import createPersistedState from "vuex-persistedstate";
import {auth} from "./modules/auth";
import {company} from "./modules/company";
import {itemCategory} from "./modules/itemCategory";
import {itemAttribute} from "./modules/itemAttribute";
import {branch} from "./modules/branch";
import {offer} from "./modules/offer";
import {item} from "./modules/item";
import {itemVariation} from "./modules/itemVariation";
import {tax} from "./modules/tax";
import {currency} from "./modules/currency";
import {mail} from "./modules/mail";
import {menuSection} from "./modules/menuSection";
import {page} from "./modules/page";
import {menuTemplate} from "./modules/menuTemplate";
import {customer} from "./modules/customer";
import {otp} from "./modules/otp";
import {administrator} from "./modules/administrator";
import {defaultAccess} from "./modules/defaultAccess";
import {administratorAddress} from "./modules/administratorAddress";
import {customerAddress} from "./modules/customerAddress";
import {license} from "./modules/license";
import {analytic} from "./modules/analytic";
import {analyticSection} from "./modules/analyticSection";
import {role} from "./modules/role";
import {permission} from "./modules/permission";
import {theme} from './modules/theme';
import {employee} from './modules/employee';
import {employeeAddress} from './modules/employeeAddress';
import {itemExtra} from './modules/itemExtra';
import {itemAddon} from './modules/itemAddon';
import { language } from './modules/language';
import {frontendBranch} from "./modules/frontend/frontendBranch";
import {frontendLanguage} from "./modules/frontend/frontendLanguage";
import {frontendSetting} from "./modules/frontend/frontendSetting";
import {frontendPage} from "./modules/frontend/frontendPage";
import {globalState} from "./modules/frontend/globalState";
import { timezone } from './modules/timezone';
import { site } from './modules/site';
import { dashboard } from './modules/dashboard';
import { offerItem } from './modules/offerItem';
import { paymentGateway } from './modules/paymentGateway';
import { smsGateway } from './modules/smsGateway';
import { salesReport } from './modules/salesReport';
import { itemsReport } from './modules/itemsReport';
import { frontendEditProfile } from './modules/frontend/frontendEditProfile';
import { frontendCountryCode } from './modules/frontend/frontendCountryCode';
import {diningTable} from "./modules/diningTable";
import {frontendItem} from "./modules/frontend/frontendItem";
import { countryCode } from './modules/countryCode';
import {frontendSignup} from "./modules/frontend/frontendSignup";
import {backendGlobalState} from "./modules/backendGlobalState";
import { myOrderDetails } from './modules/myOrderDetails';
import { posCart } from './modules/posCart';
import { posOrder } from './modules/posOrder';
import { transaction } from './modules/transaction';
import { creditBalanceReport } from './modules/creditBalanceReport';
import { user } from './modules/user';
import { posCategory } from './modules/posCategory';
import {tableItemCategory} from "./modules/table/tableItemCategory";
import {tableCart} from "./modules/table/tableCart";
import {tableDiningTable} from "./modules/table/tableDiningTable";
import {tableDiningOrder} from "./modules/table/tableDiningOrder";
import { tableOrder } from './modules/tableOrder';
import { notificationAlert } from './modules/notificationAlert';
import { notification } from './modules/notification';


export default new createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        company,
        itemCategory,
        itemAttribute,
        branch,
        offer,
        item,
        itemVariation,
        tax,
        currency,
        mail,
        page,
        menuSection,
        menuTemplate,
        customer,
        customerAddress,
        otp,
        administrator,
        defaultAccess,
        administratorAddress,
        license,
        analytic,
        analyticSection,
        role,
        permission,
        theme,
        employee,
        employeeAddress,
        itemExtra,
        itemAddon,
        language,
        globalState,
        frontendBranch,
        frontendLanguage,
        frontendSetting,
        frontendPage,
        timezone,
        site,
        dashboard,
        offerItem,
        paymentGateway,
        smsGateway,
        salesReport,
        itemsReport,
        frontendEditProfile,
        frontendCountryCode,
        frontendItem,
        countryCode,
        frontendSignup,
        backendGlobalState,
        myOrderDetails,
        posCart,
        posOrder,
        transaction,
        creditBalanceReport,
        user,
        posCategory,
        diningTable,
        tableItemCategory,
        tableCart,
        tableDiningTable,
        tableDiningOrder,
        tableOrder,
        notificationAlert,
        notification
    },
    plugins: [
        createPersistedState({
            paths: ["auth", "globalState", "frontendCart", "frontendSignup", "GuestSignup","posCart", "tableCart"],
        }),
    ],
});
