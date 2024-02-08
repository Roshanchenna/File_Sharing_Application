package mypack;
public class Encapsulation {
    private int a;
    private String b;

    public Encapsulation(int a,String b){
        this.a= a;
        this.b= b;
    }
    public void Getter(){
        System.out.println("value of int " + a);
        System.out.println("value of string " + b);
    }
     public void Set(int a){
        this.a = a;
     }
     public void Set(String b){
        this.b =b;
     }
}


