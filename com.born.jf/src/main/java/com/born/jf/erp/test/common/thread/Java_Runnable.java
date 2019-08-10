package com.born.jf.erp.test.common.thread;

public class Java_Runnable implements Runnable {

	public static void main(String args[]) {
		(new Thread(new Java_Runnable())).start();
		System.out.println("main thread run ");
	}

	public void run() {
		System.out.println("sub thread run ");
	}

}
