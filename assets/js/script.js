function entropy(a,b,c){
	let sum = a+b+c
	if(a==0) return -(b/sum*Math.log2(b/sum)+c/sum*Math.log2(c/sum))
	if(b==0) return -(a/sum*Math.log2(a/sum)+c/sum*Math.log2(c/sum))
	if(c==0) return -(a/sum*Math.log2(a/sum)+b/sum*Math.log2(b/sum))
	return -(a/sum*Math.log2(a/sum)+b/sum*Math.log2(b/sum)+c/sum*Math.log2(c/sum))
}
document.getElementById('tinh').onclick = () => {
	let tot = document.getElementById('tot').value;
	let kha = document.getElementById('kha').value;
	let kem = document.getElementById('kem').value;
	document.getElementById('ketqua').innerHTML = entropy(Number(tot), Number(kha), Number(kem))
	document.getElementById('soluong').innerHTML = Number(tot)+Number(kha)+Number(kem);
	document.getElementById('tot').value=''
	document.getElementById('kha').value=''
	document.getElementById('kem').value='';
}

document.getElementById('tinhIG').onclick = () => {
	let h = Number(document.getElementById('h').value);
	let i1 = Number(document.getElementById('i1').value);
	let ni1 = Number(document.getElementById('ni1').value);
	let i2 = Number(document.getElementById('i2').value);
	let ni2 = Number(document.getElementById('ni2').value);
	let i3 = Number(document.getElementById('i3').value);
	let ni3 = Number(document.getElementById('ni3').value);
	let res
	let sum = ni1+ni2+ni3
	if(!ni3){
		document.getElementById('ig').innerHTML = h-i1*ni1/sum-i2*ni2/sum
	}
	else{
		document.getElementById('ig').innerHTML = h-i1*ni1/sum-i2*ni2/sum-i3*ni3/sum
	}
}

