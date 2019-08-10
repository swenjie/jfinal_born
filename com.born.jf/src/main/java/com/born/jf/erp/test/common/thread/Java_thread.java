package com.born.jf.erp.test.common.thread;

public class Java_thread extends Thread {
	public static void main(String args[]) {
		(new Java_thread()).run();
		System.out.println("main thread run ");
	}

	public synchronized void run() {
		System.out.println("sub thread run ");
	}

	void javaThread() {
		Thread t = new Thread(new Runnable() {
			public void run() {

			}
		});
		t.start();
	}

}
