package com.kakarote.crm9.erp.crm.controller;

import cn.hutool.core.util.StrUtil;
import com.jfinal.plugin.activerecord.Record;
import com.kakarote.crm9.erp.admin.service.AdminUserService;
import com.kakarote.crm9.erp.crm.service.InstrumentService;
import com.kakarote.crm9.utils.BaseUtil;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;

public class InstrumentController extends Controller {

    @Inject
    private InstrumentService instrumentService;
    @Inject
    private AdminUserService adminUserService;

    /**
     * 销售简报
     *
     * @author zxy
     * type 1.今天 2.昨天 3.本周 4.上周 5.本月6.上月7.本季度8.上季度9.本年10上年11.自定义
     * deptIds 部门id
     * userIds 员工或者部门id拼写id之间用‘,’隔开
     */
    public void queryBulletin() {
        String type = getPara("type");
        String userIds = getPara("userIds");
        String deptIds = getPara("deptIds");
        String startTime = getPara("startTime");
        String endTime = getPara("endTime");
        if (userIds == null) {
            userIds = BaseUtil.getUser().getUserId().intValue() + "";
        } else if (deptIds != null && StrUtil.isNotEmpty(deptIds)) {
            userIds = adminUserService.queryUserIdsByDept(deptIds) + "," + userIds;
        }

        renderJson(instrumentService.queryBulletin(type, userIds,startTime,endTime));
    }

    /**
     * 销售趋势
     * type 1.今天 2.昨天 3.本周 4.上周 5.本月6.上月7.本季度8.上季度9.本年10上年11.自定义
     * userIds 员工id拼写id之间用‘,’隔开
     * deptIds 部门id
     */
    public void sellMonth() {
        String type = getPara("type");
        String userIds = getPara("userIds");
        String deptIds = getPara("deptIds");
        String startTime = getPara("startTime");
        String endTime = getPara("endTime");
        if (userIds == null) {
            userIds = BaseUtil.getUser().getUserId().toString();
        } else if (deptIds != null && StrUtil.isNotEmpty(deptIds)) {
            userIds = adminUserService.queryUserIdsByDept(deptIds) + "," + userIds;
        }
        renderJson(instrumentService.salesTrend(type,userIds,startTime,endTime));
    }

    /**
     * 业绩指标
     * status 1 回款 2.合同
     * deptIds 门id拼写id之间用‘,’隔开
     * userIds 员工id拼写id之间用‘,’隔开
     */
    public void queryPerformance() {
        Integer status = getInt("status");
        String userIds = getPara("userIds");
        String startTime = getPara("startTime");
        String endTime = getPara("endTime");
        String deptIds = getPara("deptIds");
        String type = getPara("type");
        String allUsetIds = userIds;
        if (StrUtil.isNotEmpty(deptIds)) {
            Record record = adminUserService.queryByDeptIds(deptIds,userIds);
            userIds = record.getStr("userIds");
            deptIds = record.getStr("deptIds");
            allUsetIds = record.getStr("arrUserIds");
        }
        renderJson(instrumentService.queryPerformance(startTime, endTime, userIds,deptIds, status,type,allUsetIds));
    }
    /**
     * 销售漏斗
     */
    public void queryBusiness() {
        String type = getPara("type");
        String userIds = getPara("userIds");
        String deptIds = getPara("deptIds");
        String startTime = getPara("startTime");
        String endTime = getPara("endTime");
        Integer typeId = getInt("typeId");
        if (userIds == null) {
            userIds = BaseUtil.getUser().getUserId().intValue() + "";
        } else if (deptIds != null && StrUtil.isNotEmpty(deptIds)) {
            userIds = adminUserService.queryUserIdsByDept(deptIds) + "," + userIds;
        }
        renderJson(instrumentService.sellFunnel(type,userIds,startTime, endTime,typeId));
    }

}
