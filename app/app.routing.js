"use strict";
var fera_component_1 = require("./fera/fera.component");
var router_1 = require("@angular/router");
var appRoutes = [
    {
        path: '',
        children: [
            { path: 'home', component: fera_component_1.FeraComponent },
        ]
    }
];
exports.RoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map