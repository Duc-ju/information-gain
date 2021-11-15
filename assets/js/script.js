function entropy(a,b,c){
	let sum = a+b+c
	return -(a/sum*Math.log2(a/sum)+b/sum*Math.log2(b/sum)+c/sum*Math.log2(c/sum))
}
document.getElementById('tinh').onclick = () => {
	let tot = document.getElementById('tot').value;
	let kha = document.getElementById('kha').value;
	let kem = document.getElementById('kem').value;
	document.getElementById('ketqua').innerHTML = entropy(Number(tot), Number(kha), Number(kem))
	document.getElementById('soluong').innerHTML = Number(tot)+Number(kha)+Number(kem);
}