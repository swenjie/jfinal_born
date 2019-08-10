package com.born.jf.erp.test.common.jvm;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import java.util.List;

public class TestJvm {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("打印所有的参数:");
		if (args.length > 0) {
			for (int i = 0; i < args.length; i++) {
				System.out.println("第" + i + "个参数为:" + args[i]);
			}
		}
		System.out.println("打印系统变量:");
		String env = System.getProperty("service.env");
		System.out.println("service.env:" + env);
		String logpath = System.getProperty("logfile.path");
		System.out.println("logfile.path:" + logpath);

		List<String> arguments = ManagementFactory.getRuntimeMXBean().getInputArguments();

		for (String string : arguments) {
			System.out.println(string);
		}

		MemoryMXBean  memoryMXBean = ManagementFactory.getMemoryMXBean();
		
		Long yu=1024*1024L;
		while(true) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println("memoryMXBean");
			System.out.println("used:"+memoryMXBean.getHeapMemoryUsage().getUsed()/yu);
			System.out.println("init:"+(memoryMXBean.getHeapMemoryUsage().getInit())/yu);
			System.out.println("commited:"+(memoryMXBean.getHeapMemoryUsage().getCommitted())/yu);
			System.out.println("max:"+memoryMXBean.getHeapMemoryUsage().getMax()/yu);
			
			System.out.println("memoryUsage");
			System.out.println("used:"+memoryMXBean.getNonHeapMemoryUsage().getUsed()/yu);
			System.out.println("init:"+(memoryMXBean.getNonHeapMemoryUsage().getInit())/yu);
			System.out.println("commited:"+(memoryMXBean.getNonHeapMemoryUsage().getCommitted())/yu);
			System.out.println("max:"+memoryMXBean.getNonHeapMemoryUsage().getMax()/yu);
			
			System.out.println("ObjectPendingFinalizationCount"+memoryMXBean.getObjectPendingFinalizationCount());
			
			System.out.println("domain:"+memoryMXBean.getObjectName().getDomain());
			
		}
		
	}

}
