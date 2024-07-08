package com.dailycoder.ecomm.productservice.util;

import java.util.Random;
import java.util.Stack;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class ProduerConsumerHLD {

    private static BlockingQueue<Integer> blockingQueue = new ArrayBlockingQueue<>(10);

    private static void produce() throws InterruptedException {
        Random random = new Random();
        while (true){
            var res = random.nextInt(100);
            blockingQueue.put(res);
            System.out.println("published val "+res);
        }
    }

    private static void consume() throws InterruptedException {
        Thread.sleep(100);
        Random random = new Random();
        while (true){
            if(random.nextInt()%10==0){
                var res = blockingQueue.take();
                System.out.println(String.format("Result is %d and q size is %d",res,blockingQueue.size()));
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {

//        Thread t1 = new Thread(()->{
//            try{
//                produce();
//            }
//            catch (InterruptedException interruptedException){}
//        });
//        Thread t2 = new Thread(()->{
//            try{
//                consume();
//            }
//            catch (InterruptedException interruptedException){}
//        });
//
//        t1.start();
//        t2.start();
//
//        t1.join();
//        t2.join();

        String[] ops = {"5","-2","4","C","D","9","+","+"};
        Stack<Integer> stack = new Stack<>();

        for(String s:ops){

            switch (s){

                case "C":
                    System.out.println(s);
                    stack.pop();
                    break;
                case "D":
                    Integer a = 2*stack.peek();
                    stack.push(a);
                    System.out.println(s);
                    break;
                case "+":
                    Integer a1 = stack.pop();
                    Integer b1 = stack.pop();
                    int res = a1+b1;

                    stack.push(b1);
                    stack.push(a1);
                    stack.push(res);
                    System.out.println(s);
                    break;
                default:
                    System.out.println(s);
                    stack.push(Integer.parseInt(s));
                    break;
            }

        }

        int result =0;
        while (!stack.isEmpty()){
            result += stack.pop();
        }

        System.out.println(result);
    }
}
