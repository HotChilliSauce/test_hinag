function calc()
{
	var rec=document.getElementById("rec").value;
	var a_one=rnum(document.getElementById("a_one").value,0);
	var a_two=rnum(document.getElementById("a_two").value,0);
	var a_three=rnum(document.getElementById("a_three").value,0);
	
	var fl_a=document.getElementById("fl_a").value;
	var fl_b=document.getElementById("fl_b").value;
	var fl_c=document.getElementById("fl_c").value;
	var fl_d=document.getElementById("fl_d").value;	
	var fl_e=document.getElementById("fl_e").value;	
	var fl_f=document.getElementById("fl_f").value;	
	var fl_g=document.getElementById("fl_g").value;	
	
	var a=rnum(document.getElementById("a").value,0);
	var b=rnum(document.getElementById("b").value,0);
	var c=rnum(document.getElementById("c").value,0);
	var d=rnum(document.getElementById("d").value,0);	
	var e=rnum(document.getElementById("e").value,0);	
	var f=rnum(document.getElementById("f").value,0);	
	var g=rnum(document.getElementById("g").value,0);	
	
	var a_mon=rnum(document.getElementById("a_mon").value,2);
	var b_mon=rnum(document.getElementById("b_mon").value,2);
	//var c_mon=rnum(document.getElementById("c_mon").value,2);
	var d_mon=rnum(document.getElementById("d_mon").value,2);	
	var e_mon=rnum(document.getElementById("e_mon").value,2);	
	var f_mon=rnum(document.getElementById("f_mon").value,2);	
	var g_mon=rnum(document.getElementById("g_mon").value,2);	
	var h_mon=rnum(document.getElementById("h_mon").value,2);
	var i_mon=rnum(document.getElementById("i_mon").value,2);
	var j_mon=rnum(document.getElementById("j_mon").value,2);
	
	var a_ml=rnum(document.getElementById("a_ml").value,0);
	var b_ml=rnum(document.getElementById("b_ml").value,0);
	//var c_ml=rnum(document.getElementById("c_ml").value,0);
	var d_ml=rnum(document.getElementById("d_ml").value,0);	
	var e_ml=rnum(document.getElementById("e_ml").value,0);	
	var f_ml=rnum(document.getElementById("f_ml").value,0);	
	var g_ml=rnum(document.getElementById("g_ml").value,0);	
	var h_ml=rnum(document.getElementById("h_ml").value,0);
	var i_ml=rnum(document.getElementById("i_ml").value,0);
	var j_ml=rnum(document.getElementById("j_ml").value,0);
	
	var drp=rnum(document.getElementById("drp").value,0);	
	var note=document.getElementById("note").value;	

	if(100-rnum(a_two*100/a_one,0)>=a+b+c+d+e+f+g)
	{

	document.getElementById("r_3_0").innerHTML=fl_a;
	document.getElementById("r_4_0").innerHTML=fl_b;
	document.getElementById("r_5_0").innerHTML=fl_c;
	document.getElementById("r_6_0").innerHTML=fl_d;
	document.getElementById("r_7_0").innerHTML=fl_e;
	document.getElementById("r_8_0").innerHTML=fl_f;
	document.getElementById("r_9_0").innerHTML=fl_g;
	
	document.getElementById("r_3_00").innerHTML=fl_a;
	document.getElementById("r_4_00").innerHTML=fl_b;
	document.getElementById("r_5_00").innerHTML=fl_c;
	document.getElementById("r_6_00").innerHTML=fl_d;
	document.getElementById("r_7_00").innerHTML=fl_e;
	document.getElementById("r_8_00").innerHTML=fl_f;
	document.getElementById("r_9_00").innerHTML=fl_g;
	
	document.getElementById("r_1_1").innerHTML=rnum((a_three*a_two)/a_one,2);
	document.getElementById("r_2_1").innerHTML=rnum(a_three*(100-rnum(a_two*100/a_one,0)-(a+b+c+d+e+f+g))/100,2);
	document.getElementById("r_3_1").innerHTML=rnum(a_three*a/100,2);
	document.getElementById("r_4_1").innerHTML=rnum(a_three*b/100,2);
	document.getElementById("r_5_1").innerHTML=rnum(a_three*c/100,2);
	document.getElementById("r_6_1").innerHTML=rnum(a_three*d/100,2);
	document.getElementById("r_7_1").innerHTML=rnum(a_three*e/100,2);
	document.getElementById("r_8_1").innerHTML=rnum(a_three*f/100,2);
	document.getElementById("r_9_1").innerHTML=rnum(a_three*g/100,2);
	
	document.getElementById("r_1_2").innerHTML=rnum(rnum(document.getElementById("r_1_1").innerHTML,2)*drp,0);
	document.getElementById("r_2_2").innerHTML=rnum(rnum(document.getElementById("r_2_1").innerHTML,2)*drp,0);
	document.getElementById("r_3_2").innerHTML=rnum(rnum(document.getElementById("r_3_1").innerHTML,2)*drp,0);
	document.getElementById("r_4_2").innerHTML=rnum(rnum(document.getElementById("r_4_1").innerHTML,2)*drp,0);
	document.getElementById("r_5_2").innerHTML=rnum(rnum(document.getElementById("r_5_1").innerHTML,2)*drp,0);
	document.getElementById("r_6_2").innerHTML=rnum(rnum(document.getElementById("r_6_1").innerHTML,2)*drp,0);
	document.getElementById("r_7_2").innerHTML=rnum(rnum(document.getElementById("r_7_1").innerHTML,2)*drp,0);
	document.getElementById("r_8_2").innerHTML=rnum(rnum(document.getElementById("r_8_1").innerHTML,2)*drp,0);
	document.getElementById("r_9_2").innerHTML=rnum(rnum(document.getElementById("r_9_1").innerHTML,2)*drp,0);
	
	document.getElementById("r_1_3").innerHTML=rnum(rnum(document.getElementById("r_1_1").innerHTML,2)*100/a_three,0);
	document.getElementById("r_2_3").innerHTML=rnum(rnum(document.getElementById("r_2_1").innerHTML,2)*100/a_three,0);
	document.getElementById("r_3_3").innerHTML=rnum(rnum(document.getElementById("r_3_1").innerHTML,2)*100/a_three,0);
	document.getElementById("r_4_3").innerHTML=rnum(rnum(document.getElementById("r_4_1").innerHTML,2)*100/a_three,0);
	document.getElementById("r_5_3").innerHTML=rnum(rnum(document.getElementById("r_5_1").innerHTML,2)*100/a_three,0);
	document.getElementById("r_6_3").innerHTML=rnum(rnum(document.getElementById("r_6_1").innerHTML,2)*100/a_three,0);
	document.getElementById("r_7_3").innerHTML=rnum(rnum(document.getElementById("r_7_1").innerHTML,2)*100/a_three,0);
	document.getElementById("r_8_3").innerHTML=rnum(rnum(document.getElementById("r_8_1").innerHTML,2)*100/a_three,0);
	document.getElementById("r_9_3").innerHTML=rnum(rnum(document.getElementById("r_9_1").innerHTML,2)*100/a_three,0);
	
	document.getElementById("r_1_4").innerHTML=rnum(rnum(document.getElementById("r_1_1").innerHTML,2)*a_mon/a_ml,2);
	document.getElementById("r_2_4").innerHTML=rnum(rnum(document.getElementById("r_2_1").innerHTML,2)*b_mon/b_ml,2);
	document.getElementById("r_3_4").innerHTML=rnum(rnum(document.getElementById("r_3_1").innerHTML,2)*d_mon/d_ml,2);
	document.getElementById("r_4_4").innerHTML=rnum(rnum(document.getElementById("r_4_1").innerHTML,2)*e_mon/e_ml,2);
	document.getElementById("r_5_4").innerHTML=rnum(rnum(document.getElementById("r_5_1").innerHTML,2)*f_mon/f_ml,2);
	document.getElementById("r_6_4").innerHTML=rnum(rnum(document.getElementById("r_6_1").innerHTML,2)*g_mon/g_ml,2);
	document.getElementById("r_7_4").innerHTML=rnum(rnum(document.getElementById("r_7_1").innerHTML,2)*h_mon/h_ml,2);
	document.getElementById("r_8_4").innerHTML=rnum(rnum(document.getElementById("r_8_1").innerHTML,2)*i_mon/i_ml,2);
	document.getElementById("r_9_4").innerHTML=rnum(rnum(document.getElementById("r_9_1").innerHTML,2)*j_mon/j_ml,2);
	
	document.getElementById("r_0_1").innerHTML=rnum(document.getElementById("r_1_1").innerHTML,0)+rnum(document.getElementById("r_2_1").innerHTML,0)+rnum(document.getElementById("r_3_1").innerHTML,0)+rnum(document.getElementById("r_4_1").innerHTML,0)+rnum(document.getElementById("r_5_1").innerHTML,0)+rnum(document.getElementById("r_6_1").innerHTML,0)+rnum(document.getElementById("r_7_1").innerHTML,0)+rnum(document.getElementById("r_8_1").innerHTML,0)+rnum(document.getElementById("r_9_1").innerHTML,0);
	document.getElementById("r_0_2").innerHTML=rnum(document.getElementById("r_1_2").innerHTML,0)+rnum(document.getElementById("r_2_2").innerHTML,0)+rnum(document.getElementById("r_3_2").innerHTML,0)+rnum(document.getElementById("r_4_2").innerHTML,0)+rnum(document.getElementById("r_5_2").innerHTML,0)+rnum(document.getElementById("r_6_2").innerHTML,0)+rnum(document.getElementById("r_7_2").innerHTML,0)+rnum(document.getElementById("r_8_2").innerHTML,0)+rnum(document.getElementById("r_9_2").innerHTML,0);
	document.getElementById("r_0_3").innerHTML=rnum(document.getElementById("r_1_3").innerHTML,0)+rnum(document.getElementById("r_2_3").innerHTML,0)+rnum(document.getElementById("r_3_3").innerHTML,0)+rnum(document.getElementById("r_4_3").innerHTML,0)+rnum(document.getElementById("r_5_3").innerHTML,0)+rnum(document.getElementById("r_6_3").innerHTML,0)+rnum(document.getElementById("r_7_3").innerHTML,0)+rnum(document.getElementById("r_8_3").innerHTML,0)+rnum(document.getElementById("r_9_3").innerHTML,0);
	var total_mon=rnum($id("r_1_4",2)+$id("r_2_4",2)+$id("r_3_4",2)+$id("r_4_4",2)+$id("r_5_4",2)+$id("r_6_4",2)+$id("r_7_4",2)+$id("r_8_4",2)+$id("r_9_4",2),2);
	document.getElementById("r_0_4").innerHTML=rnum(total_mon/$id("r_0_1",2),2);
	
	document.getElementById("r_text").innerHTML=""+rec+" = "+a_two+"mg - "+a_three+"ml&nbsp;&nbsp;-&nbsp;Total Cost $ "+total_mon;
	document.getElementById("table_b").style.display='';
	}
	else
	{
		alert('hight');
		}
		
	return false;
	}
function $id(id,t)
{
	if(t==1)
	return rnum(document.getElementById(id).value,2);
	else
	return rnum(document.getElementById(id).innerHTML,2);
	}
function rnum(num,dec){
if(isNaN(num))
num=0.00;
		var result=Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);return result;
	
	}
function p_sev(num_a,num_b,num_c,num_d,num_e,num_f,num_g){var result=(num_a+num_b+num_c+num_d+num_e+num_f+num_g);return result;}
function mina(num_a,num_b){var result=(num_a-num_b);return result;}
var numExp=/^[0-9.]+$/;var myExp=/^[^<]+$/;var zoo=100;var drp;var a_one;var a_two;var a_three;var amount_make;var inonea;var intwoa;var inonear;var inoneal;var a;var b;var c;var d;var e;var f;var g;var tota;var totb;var toar;var toal;var table_b;var a_mon;var b_mon;var c_mon;var d_mon;var e_mon;var f_mon;var g_mon;var h_mon;var i_mon;var j_mon;var a_ml;var b_ml;var c_ml;var d_ml;var e_ml;var f_ml;var g_ml;var h_ml;var i_ml;var j_ml;var rec;var note;var fl_a;var fl_b;var fl_c;var fl_d;var fl_e;var fl_f;var fl_g;var fl_az;var fl_bz;var fl_cz;var fl_dz;var fl_ez;var fl_fz;var fl_gz;var nic_ha_l;var nic_ha;var nic_ha_r;var nic_hb;var amount_nic;var nic_lev;var pg_w_ad;var pg_a;var vg_a;var pg_ad;var vg_ad;function flavor_a(fl_a,fl_az,table_b)
{var y=document.getElementById("fl_a").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_a").value=z;document.getElementById("fl_az").innerHTML=z;document.getElementById("table_b").style.display='none';}
function flavor_b(fl_b,fl_bz,table_b)
{var y=document.getElementById("fl_b").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_b").value=z;document.getElementById("fl_bz").innerHTML=z;document.getElementById("table_b").style.display='none';}
function flavor_c(fl_c,fl_cz,table_b)
{var y=document.getElementById("fl_c").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_c").value=z;document.getElementById("fl_cz").innerHTML=z;document.getElementById("table_b").style.display='none';}
function flavor_d(fl_d,fl_dz,table_b)
{var y=document.getElementById("fl_d").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_d").value=z;document.getElementById("fl_dz").innerHTML=z;document.getElementById("table_b").style.display='none';}
function flavor_e(fl_e,fl_ez,table_b)
{var y=document.getElementById("fl_e").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_e").value=z;document.getElementById("fl_ez").innerHTML=z;document.getElementById("table_b").style.display='none';}
function flavor_f(fl_f,fl_fz,table_b)
{var y=document.getElementById("fl_f").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_f").value=z;document.getElementById("fl_fz").innerHTML=z;document.getElementById("table_b").style.display='none';}
function flavor_g(fl_g,fl_gz,table_b)
{var y=document.getElementById("fl_g").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_g").value=z;document.getElementById("fl_gz").innerHTML=z;document.getElementById("table_b").style.display='none';}
function notes(note,table_b)
{var y=document.getElementById("note").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("note").value=z;document.getElementById("table_b").style.display='none';}
function rec_x(rec,table_b)
{var y=document.getElementById("rec").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("rec").value=z;document.getElementById("table_b").style.display='none';}
function mil_a(a_ml,table_b)
{var y=document.getElementById("a_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("a_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_b(b_ml,table_b)
{var y=document.getElementById("b_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("b_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_c(c_ml,table_b)
{var y=document.getElementById("c_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("c_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_d(d_ml,table_b)
{var y=document.getElementById("d_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("d_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_e(e_ml,table_b)
{var y=document.getElementById("e_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("e_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_f(f_ml,table_b)
{var y=document.getElementById("f_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("f_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_g(g_ml,table_b)
{var y=document.getElementById("g_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("g_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_h(h_ml,table_b)
{var y=document.getElementById("h_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("h_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_i(i_ml,table_b)
{var y=document.getElementById("i_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("i_ml").value=z;document.getElementById("table_b").style.display='none';}
function mil_j(j_ml,table_b)
{var y=document.getElementById("j_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("j_ml").value=z;document.getElementById("table_b").style.display='none';}
function money_a(a_mon,table_b)
{var y=document.getElementById("a_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("a_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_b(b_mon,table_b)
{var y=document.getElementById("b_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("b_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_c(c_mon,table_b)
{var y=document.getElementById("c_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("c_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_d(d_mon,table_b)
{var y=document.getElementById("d_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("d_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_e(e_mon,table_b)
{var y=document.getElementById("e_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("e_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_f(f_mon,table_b)
{var y=document.getElementById("f_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("f_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_g(g_mon,table_b)
{var y=document.getElementById("g_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("g_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_h(h_mon,table_b)
{var y=document.getElementById("h_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("h_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_i(i_mon,table_b)
{var y=document.getElementById("i_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("i_mon").value=z;document.getElementById("table_b").style.display='none';}
function money_j(j_mon,table_b)
{var y=document.getElementById("j_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("j_mon").value=z;document.getElementById("table_b").style.display='none';}
function fix_one(a_one,table_b)
{var yz=document.getElementById("a_one").value;if(yz.match(numExp))
{var y=yz;}else{var y="";}
document.getElementById("a_one").value=y;document.getElementById("table_b").style.display='none';}
function fix_two(a_two,table_b)
{var yz=document.getElementById("a_two").value;if(yz.match(numExp))
{var y=yz;}else{var y="";}
document.getElementById("a_two").value=y;document.getElementById("a_two").style.backgroundColor="#ffffff";document.getElementById("table_b").style.display='none';}
function fix_three(a_three,table_b)
{var yz=document.getElementById("a_three").value;if(yz.match(numExp))
{var y=yz;}else{var y="";}
document.getElementById("a_three").value=y;document.getElementById("table_b").style.display='none';}
function chk_nic(a_two,amount_nic,nic_ha,nic_ha_l,nic_ha_r,nic_hb){var nic_lev=document.getElementById("a_two").value;if(nic_lev>36){var a="<font color=\"#ff0000\">Target Nicotine Too High!</font>";var b="*";var c="* * * DANGER * * *";var d="*";var e="Target Nicotine Level is "+nic_lev+"mg \"Extremely High!\"<br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}else if(nic_lev>24){var a="<font color=\"#cc0000\">Target Nicotine</font>";var b="*";var c="* * * Warning * * *";var d="*";var e="Target Nicotine Level is "+nic_lev+"mg \"Extra High!\"<br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}else{var a="Target Nicotine";var b="";var c="";var d="";var e="";}
document.getElementById("amount_nic").innerHTML=a;document.getElementById("nic_ha_l").innerHTML=b;document.getElementById("nic_ha").innerHTML=c;document.getElementById("nic_ha_r").innerHTML=d;document.getElementById("nic_hb").innerHTML=e;}
function chk_amount(a_three,amount_make,inonea,intwoa,inonear,inoneal){var y=document.getElementById("a_three").value;if(y==0){var a="<font color=\"#ff0000\">Enter Amount To Make</font>";var b="*";var c="Amount To Make = 0";var d="*";var e="You Must Enter An Amount To Make<br>To Make Calculator To Work!<br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}else{var a="Amount To Make";var b="";var c="";var d="";var e="";}
document.getElementById("amount_make").innerHTML=a;document.getElementById("inonear").innerHTML=b;document.getElementById("inonea").innerHTML=c;document.getElementById("inoneal").innerHTML=d;document.getElementById("intwoa").innerHTML=e;}
function add(a,b,c,d,e,f,g,tota,totb,toar,toal,table_b,fl_a)
{var ar=document.getElementById("a").value;var br=document.getElementById("b").value;var cr=document.getElementById("c").value;var dr=document.getElementById("d").value;var er=document.getElementById("e").value;var fr=document.getElementById("f").value;var gr=document.getElementById("g").value;if(ar.match(numExp))
{var ya=ar;}else{var ya="";}
if(ya>zoo)
{var as=zoo;}else{var as=ya;}
document.getElementById("a").value=as;if(br.match(numExp))
{var yb=br;}else{var yb="";}
if(yb>zoo)
{var bs=zoo;}else{var bs=yb;}
document.getElementById("b").value=bs;if(cr.match(numExp))
{var yc=cr;}else{var yc="";}
if(yc>zoo)
{var cs=zoo;}else{var cs=yc;}
document.getElementById("c").value=cs;if(dr.match(numExp))
{var yd=dr;}else{var yd="";}
if(yd>zoo)
{var ds=zoo;}else{var ds=yd;}
document.getElementById("d").value=ds;if(er.match(numExp))
{var ye=er;}else{var ye="";}
if(ye>zoo)
{var es=zoo;}else{var es=ye;}
document.getElementById("e").value=es;if(fr.match(numExp))
{var yf=fr;}else{var yf="";}
if(yf>zoo)
{var fs=zoo;}else{var fs=yf;}
document.getElementById("f").value=fs;if(gr.match(numExp))
{var yg=gr;}else{var yg="";}
if(yg>zoo)
{var gs=zoo;}else{var gs=yg;}
document.getElementById("g").value=gs;var az=rnum(as,2);var bz=rnum(bs,2);var cz=rnum(cs,2);var dz=rnum(ds,2);var ez=rnum(es,2);var fz=rnum(fs,2);var gz=rnum(gs,2);var y=p_sev(az,bz,cz,dz,ez,fz,gz);var geta=document.getElementById("fl_a").value;if(y>zoo)
{var a="*";var b="<font size=\"4\">"+geta+" + Flavor's Percent's = "+y+"%<br>Total Can Not Be Over 100%</font>";var c="*";var d="<font color=\"#0000ff\" size=\"4\">You Must Lower "+geta+" + Flavor's Percent's<br>To Make Calculator To Work!</font><br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}
else if(y>30)
{var a="*";var b="* * * Warning * * *";var c="*";var d=geta+" + Flavor's Percent's = "+y+"% \"Very High!\"<br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}
else
{var a="";var b="";var c="";var d="";}
document.getElementById("toar").innerHTML=a;document.getElementById("tota").innerHTML=b;document.getElementById("toal").innerHTML=c;document.getElementById("totb").innerHTML=d;document.getElementById("table_b").style.display='none';}
function drops(drp,table_b)
{var y=document.getElementById("drp").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("drp").value=z;document.getElementById("table_b").style.display='none';}