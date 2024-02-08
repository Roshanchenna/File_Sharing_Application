
public class Main {
    public static void main(String[] args) {
        System.out.println(distanceTraveled(10,10));
        }
    public static int distanceTraveled(int mainTank, int additionalTank) {
        int ans = 0;
        if(additionalTank == 1){
            return ans;
        }
        if(mainTank >= 5 && additionalTank > 1){
            mainTank -= 5;
            ans += 50;
            distanceTraveled(mainTank+1, additionalTank-1);
        }else{
            ans += mainTank*10;
            distanceTraveled(mainTank,1);
        }
        return 0;
    }
}