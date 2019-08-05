package com.born.jf;

import com.born.jf.common.config.JfinalConfig;
import com.born.jf.common.constant.BaseConstant;
import com.jfinal.server.undertow.UndertowServer;


public class Application {
    public static void main(String[] args) {
        UndertowServer
                .create(JfinalConfig.class,"config/undertow.txt")
                .setResourcePath("src/main/webapp,"+ BaseConstant.UPLOAD_PATH)
                .start();
    }
}
