package com.dailycoder.ecomm.productservice.util;

import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class Processor {

    private  void produce() throws InterruptedException{
        synchronized (this){
            System.out.println("Producer Thread running");
            wait();
            System.out.println("Producer Thread resumed");
        }
    }

    private  void consume() throws InterruptedException{
        Scanner scanner = new Scanner(System.in);
        Thread.sleep(2000);
        synchronized (this){
            System.out.println("Waiting for return key");
            scanner.nextLine();
            System.out.println("Return key pressed");
            notify();
        }
    }

    public static void main(String[] args) throws InterruptedException {

        final Processor processor = new Processor();
        Thread t1 = new Thread(()->{ try{
            processor.produce();
        }catch (InterruptedException interruptedException){}});

        Thread t2 = new Thread(()->{ try{
            processor.consume();
        }catch (InterruptedException interruptedException){}});

        t1.start();
        t2.start();

        t1.join();
        t2.join();
    }
}
