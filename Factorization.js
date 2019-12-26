function primeFactors(n){
    //n이 2로 나눠지면 나눠질 수 있는 수만큼 2가 출력됨
    while(n%2===0){
        console.log(2);
        n/=2;
    }
    for(let i=3;i*i<=n;i+=2){
        //i가 n을 나눌 수 있는 한 계속해서 i 출력
        while(n%i===0){
            console.log(i);
            n/=i;
        }
    }
    //i가 prime일 때 
    if(n>2){
        console.log(n);
    }
}
primeFactors(10);