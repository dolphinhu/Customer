﻿app.controller("homeController", function ($scope) {
    $scope.status = {
        isopen: false
    };
    $scope.menuItems = [
        {
            displayName: "覆盖优化",
            isActive: true,
            subItems: [
            {
                displayName: "精确覆盖专题",
                url: "/Rutrace",
                tooltip: "综合分析后台指标、MR、路测信令和小区跟踪数据，挖掘小区的重叠覆盖、过覆盖等问题，对精确覆盖的效果进行模拟，并在百度地图上呈现。"
            }, {
                displayName: "专题覆盖优化",
                url: "/Evaluation/RegionDef",
                tooltip: "包括万栋楼宇等室内外场景优化；根据各小区的工程参数模拟覆盖范围，主要覆盖指标（RSRP、SINR）进行分析和呈现"
            }]
        }, {
            displayName: "容量优化",
            isActive: false,
            subItems: [{
                displayName: "网络分析",
                url: "/Parameters/List",
                tooltip: "全网LTE和CDMA基站、小区列表和地理化显示、对全网的基站按照基站名称、地址等信息进行查询，并进行个别基站小区的增删、修改信息的操作"
            }, {
                displayName: "小区流量分析",
                url: "/Kpi/Flow"
            }]
        }, {
            displayName: "质量分析",
            isActive: false,
            subItems: [{
                displayName: "传统指标",
                url: "/Kpi",
                tooltip: "对传统指标（主要是2G和3G）的监控、分析和地理化呈现"
            }, {
                displayName: "工单管控",
                url: "/Kpi/WorkItem",
                tooltip: "对接本部优化部4G网优平台，结合日常优化，实现对日常工单的监控和分析"
            }, {
                displayName: "校园网专题优化",
                url: "/College/Map",
                tooltip: "校园网专项优化，包括数据管理、指标分析、支撑工作管理和校园网覆盖呈现"
            }]
        }, {
            displayName: "基础信息",
            isActive: false,
            subItems: [{
                displayName: "DT基础信息",
                url: "/Dt/List",
                tooltip: "按照区域或专题查看已导入的DT基础信息"
            }]
        }
    ];
});
