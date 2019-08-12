package com.born.jf.erp.test.common.thread_pool;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
 
public class FixedThreadPoolTest {
	public static void main(String[] args) {
		ExecutorService exec = Executors.newFixedThreadPool(3);
		for(int i=0;i<20;i++){
			exec.execute(new WorkTask());
		}
		exec.shutdown();
		
	}
}