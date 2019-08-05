package com.born.jf.common.config;

import com.born.jf.erp.test.common.TestRouter;
import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.kit.Prop;
import com.jfinal.kit.PropKit;
import com.jfinal.server.undertow.UndertowServer;
import com.jfinal.template.Engine;

public class JfinalConfig extends JFinalConfig {

	public static Prop prop = PropKit.use("config/born-config.txt");
	
	public static void main(String[] args) {
		UndertowServer.start(JfinalConfig.class, 80, true);
	}

	public void configConstant(Constants me) {
		me.setDevMode(true);
	}

	//设置路由 
	public void configRoute(Routes me) {
		 me.add(new TestRouter());
	}

	@Override
    public void configEngine(Engine me) {
        me.addSharedMethod(new com.jfinal.kit.StrKit());
    }

	public void configPlugin(Plugins me) {
	}

	public void configInterceptor(Interceptors me) {
	}

	public void configHandler(Handlers me) {
	}

}
