
//iteration-
let number = [12,3,4,3,4,12,3,7,3,9,7,1];
let obj_num = {};
for(let i=0; i<number.length; i++)
{
    if(obj_num[number[i]])
    {
        obj_num[number[i]] = obj_num[number[i]] + 1;
    }
    else{
        obj_num[number[i]]=1;
    }
}
console.log(obj_num);
//till 13th Aug