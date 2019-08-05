package com.born.jf.erp.test.common;

import com.born.jf.erp.test.controller.HelloController;
import com.jfinal.config.Routes;

public class TestRouter extends Routes {
    @Override
    public void config() {
        addInterceptor(new TestInterceptor());
        add("/", HelloController.class);
    }
}
