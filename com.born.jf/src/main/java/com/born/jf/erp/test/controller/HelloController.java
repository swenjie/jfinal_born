package com.born.jf.erp.test.controller;

import com.born.jf.erp.test.bean.TestBean;
import com.jfinal.core.Controller;

public class HelloController extends Controller {
	public void index() {
		renderText("Hello JFinal World.");
	}

	public void getBean() {
		TestBean testBean = new TestBean();
		testBean.setAge("0");
		testBean.setName("lb");
		testBean.setSex("M");
		renderJson(testBean);
	}
}
