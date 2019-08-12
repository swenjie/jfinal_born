package com.born.jf.erp.test.common.thread_pool;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
 
 
public class test {
	public static void main(String[] args) {
		ExecutorService exec = Executors.newCachedThreadPool();
		for(int i=0;i<20;i++){
			Future<String> f = exec.submit(new TaskResult(i));
			try {
				String v=f.get();
				System.out.println(v);
			} catch (Exception e) {
			}
		}
	}
}
 
class TaskResult implements Callable<String>{
	private int i;
	public TaskResult(int i){
		this.i=i;
	}
	public String call(){
		try {
			Thread.sleep(200*(20-i));
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return Thread.currentThread().getId()+"'s result is "+i;
	}
}