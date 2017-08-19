var c = 0;

function cc(){
    console.log(c)
}
// cc不能打印c的值--因为执行cc必须是cc()，麻痹的跟shell搞混了~

function printIt() {
    console.log('c is:',c);
}

function plusOne(){
    c += 1;
}

// sleep 3s后，回调xyz函数（也可以是匿名函数）对c+2，然后调用callback函数（callback是传进来的形参名字，是一个函数名字）
// 回调感觉就是管道，上一个的结果是下一个的参数
function plusTwo(callback){
    setTimeout(function xyz(){
        console.log('sleep done.start callback')
        c += 2;
        callback()
    },3000)
}

function main(){
    console.log('1st', c)
    plusOne()
    console.log('1st done,now c is:', c, '\n')
    
    console.log('2st', c)
    console.log('sleeping 3s')
    plusTwo(printIt)    //printIt作为回调函数传入plusTwo
    
    console.log('\n')
    console.log('3st done,now c is:', c, '\n')  //非阻塞，所以这里的c还是1st后的结果1
}

main()
