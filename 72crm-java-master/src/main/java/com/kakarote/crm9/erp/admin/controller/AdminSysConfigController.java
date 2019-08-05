package com.kakarote.crm9.erp.admin.controller;

import com.alibaba.fastjson.JSON;
import com.jfinal.aop.Clear;
import com.jfinal.aop.Inject;
import com.kakarote.crm9.erp.admin.service.AdminFileService;
import com.kakarote.crm9.utils.BaseUtil;
import com.kakarote.crm9.utils.R;
import com.jfinal.core.Controller;
import com.jfinal.kit.Kv;
import com.jfinal.plugin.redis.Cache;
import com.jfinal.plugin.redis.Redis;
import com.jfinal.upload.UploadFile;

import java.util.Map;

/**
 * 系统配置
 * @author hmb
 */
public class AdminSysConfigController extends Controller {

    private static final String SYS_CONFIG_KEY = "sys_config";

    @Inject
    private AdminFileService adminFileService;

    /**
     * 设置系统配置
     * @author hmb
     */
    public void setSysConfig(){
        String prefix=BaseUtil.getDate();
        UploadFile file = getFile("file", prefix);
        Kv kv = getKv();
        if(file!=null){
            R r=adminFileService.upload(file,null,"file","/"+prefix);
            kv.set("logo",r.get("url"));
        }

        Cache cache = Redis.use();
        cache.set(SYS_CONFIG_KEY, JSON.toJSONString(kv));
        renderJson(R.ok());
    }

    /**
     * 查询系统配置
     * @author hmb
     */
    @Clear
    public void querySysConfig(){
        Cache cache = Redis.use();
        if (cache.get(SYS_CONFIG_KEY) == null){
            renderJson(R.ok().put("data",Kv.by("logo","").set("name","")));
            return;
        }
        String data = cache.get(SYS_CONFIG_KEY);
        Map map = JSON.parseObject(data, Map.class);
        renderJson(R.ok().put("data",map));
    }
}
