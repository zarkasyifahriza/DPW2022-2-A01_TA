//Deklarasi Variabel
var nama=document.getElementById("nama");
var namaError=document.getElementById("namaError");
var tempatLahir=document.getElementById("tempatLahir");
var tempatLahirError=document.getElementById("tempatLahirError");
var tanggalLahir=document.getElementById("tanggalLahir");
var tanggalLahirError = document.getElementById("tanggalLahirError");
var perempuan = document.getElementById("pr");
var laki2 = document.getElementById("lk");
var jenisKelaminError = document.getElementById("genderError");
var alamat = document.getElementById("alamat");
var alamatError = document.getElementById("alamatError");
var email = document.getElementById("email");
var emailInput = document.getElementById("email");
var email = emailInput.value;
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var tipekamar = document.getElementById("tipekamar");
var tipekamarError = document.getElementById("tipekamarError");
var foto = document.getElementById("file-upload");
var foto_Error = document.getElementById("file-uploadError");

//FUNGSI VALIDASI
function validate(){
	//validasi NIK
	if(nik.value!=""){
		var x = nik.value;
		var status = true;
		var list = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
		for (i=0; i<=x.length-1; i++){
			if (x[i] in list){
				cek = true;
				}
			else {
				cek = false;
				}
			status = status && cek;
		}
		if (status == false){
			nikError.style.color="red";
			nikError.textContent="NIK hanya dapat di isi  angka!";
			nik.focus();
			return false;
		}
	}
	else{
		nikError.style.color="red";
		nikError.textContent="NIK harus diisi!";
		nik.focus();
		return false;
	}
	//validasi Nama
	if (nama.value == ""){
		namaError.style.color="red";
		namaError.textContent="Nama lengkap harus diisi!";
		nama.focus();
		return false;
	}
	if (!isNaN(nama.value)){
		namaError.style.color="red";
		namaError.textContent="Nama lengkap harus diisi karakter!";
		nama.focus();
		return false;
	}
	//validasi Tempat Lahir
	if (tempatLahir.value == ""){
		tempatLahirError.style.color="red";
		tempatLahirError.textContent="Tempat Lahir harus diisi!";
		tempatLahir.focus();
		return false;
	}
	if (!isNaN(tempatLahir.value)){
		tempatLahirErrorError.style.color="red";
		tempatLahir.textContent="Nama lengkap harus diisi karakter!";
		tempatLahir.focus();
		return false;
	}
	//validasi Tanggal Lahir
	if (tanggalLahir.value == ""){
		tanggalLahirError.style.color="red";
		tanggalLahirError.textContent="Tanggal Lahir harus diisi!";
		tanggalLahir.focus();
		return false;
	}
	//validasi Jenis Kelamin
	if(document.forms["myForm"]["gender"].value==""){
		document.getElementById("genderError").style.color="red";
		document.getElementById("genderError").textContent="anda belum memilih jenis kelamin!";
		return false;
	}
	
	//validasi Alamat
	if (alamat.value == ""){
		alamatError.style.color="red";
		alamatError.textContent="Alamat harus diisi!";
		alamat.focus();
		return false;
	}
	//validasi Email
	if (emailPattern.test(email)) {
        emailInput.setCustomValidity(""); // Email valid, menghapus pesan kesalahan
    } 
    else {
        emailInput.setCustomValidity("Email tidak valid"); // Menetapkan pesan kesalahan
    }
	//validasi Tipe Kamar (dropdown)
	if (tipekamar.value =="1"){
		tipekamarError.style.color="red";
		tipekamarError.textContent="Anda belum memilih tipe kamar!";
		tipekamar.focus();
    	return (false);
	}
	//validasi Foto
	if (foto.value ==""){
		foto_Error.style.color="red";
		foto_Error.textContent="Anda belum mengunggah foto!";
		foto.focus();
		return false;
		}
}
