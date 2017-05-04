/**
 * Created by Administrator on 2017/4/2 0002.
 */
function tab(a,b){
    var oDiv=document.getElementById(a);
    var oDiv2=document.getElementById(b);
    var aBtn=oDiv.getElementsByTagName('ul');
    var aDiv=oDiv2.getElementsByTagName('ul');
    //alert(aBtn.length);
    for(var i=0; i<aDiv.length; i++)//实现四个标签循环
    {
        aBtn[i].index=i;
        //alert(aBtn[i].index);
        //先这样记录，回头学面向对象，再理解
        aBtn[i].onclick=function()
        {
            //alert(this.value);//this当前发生事件的对象
            for(var i=0; i<aDiv.length; i++)
            {
                aBtn[i].className='';
                aDiv[i].style.display='none';
            }
            this.className='active';
            //index下标
            //alert(this.index);//当前点击按钮的index
            aDiv[this.index].style.display='block';
        }
    }
}
