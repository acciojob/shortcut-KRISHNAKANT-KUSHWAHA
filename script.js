function shortcut(s1, s2) {
  // your code here
 let str=""
	let str1=s1.char(0);
	let str2=s2.char(0);
	if(s1==='' || s2==='') return ''
	else return str+=s1+s2;
}

// Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(shortcut(s1, s2));
