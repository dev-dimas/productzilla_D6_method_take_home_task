let namaDepan,
  namaTengah,
  namaBelakang,
  tanggalLahir,
  bulanLahir,
  tahunLahir,
  tempatLahir,
  umur,
  agama,
  asalKampus,
  asalFakultas,
  asalProdi,
  semester,
  ipk,
  sksKumulatif,
  alamatRumah,
  kodePos,
  nomorTelepon,
  email,
  isWNI;

const setNamaDepan = (argNamaDepan) => {
  namaDepan = argNamaDepan;
};

const setNamaTengah = (argNamaTengah) => {
  namaTengah = argNamaTengah;
};

const setNamaBelakang = (argNamaBelakang) => {
  namaBelakang = argNamaBelakang;
};

const setTanggalLahir = (argTanggalLahir) => {
  tanggalLahir = argTanggalLahir;
};

const setBulanLahir = (argBulanLahir) => {
  bulanLahir = argBulanLahir;
};

const setTahunLahir = (argTahunLahir) => {
  tahunLahir = argTahunLahir;
};

const setTempatLahir = (argTempatLahir) => {
  tempatLahir = argTempatLahir;
};

const setUmur = (argUmur) => {
  umur = argUmur;
};

const setAgama = (argAgama) => {
  agama = argAgama;
};

const setAsalKampus = (argAsalKampus) => {
  asalKampus = argAsalKampus;
};

const setAsalFakultas = (argAsalFakultas) => {
  asalFakultas = argAsalFakultas;
};

const setAsalProdi = (argAsalProdi) => {
  asalProdi = argAsalProdi;
};

const setSemester = (argSemester) => {
  semester = argSemester;
};

const setIpk = (argIpk) => {
  ipk = argIpk;
};

const setSksKumulatif = (argSksKumulatif) => {
  sksKumulatif = argSksKumulatif;
};

const setAlamatRumah = (argAlamatRumah) => {
  alamatRumah = argAlamatRumah;
};

const setKodePos = (argKodePos) => {
  kodePos = argKodePos;
};

const setNomorTelepon = (argNomorTelepon) => {
  nomorTelepon = argNomorTelepon;
};

const setEmail = (argEmail) => {
  email = argEmail;
};

const setIsWNI = (argIsWNI) => {
  isWNI = argIsWNI;
};

const getNamaDepan = () => {
  return namaDepan;
};

const getNamaTengah = () => {
  return namaTengah;
};

const getNamaBelakang = () => {
  return namaBelakang;
};

const getTanggalLahir = () => {
  return tanggalLahir;
};

const getBulanLahir = () => {
  return bulanLahir;
};

const getTahunLahir = () => {
  return tahunLahir;
};

const getTempatLahir = () => {
  return tempatLahir;
};

const getUmur = () => {
  return umur;
};

const getAgama = () => {
  return agama;
};

const getAsalKampus = () => {
  return asalKampus;
};

const getAsalFakultas = () => {
  return asalFakultas;
};

const getAsalProdi = () => {
  return asalProdi;
};

const getSemester = () => {
  return semester;
};

const getIpk = () => {
  return ipk;
};

const getSksKumulatif = () => {
  return sksKumulatif;
};

const getAlamatRumah = () => {
  return alamatRumah;
};

const getKodePos = () => {
  return kodePos;
};

const getNomorTelepon = () => {
  return nomorTelepon;
};

const getEmail = () => {
  return email;
};

const getIsWNI = () => {
  return isWNI;
};

setNamaDepan('Dimas');
setNamaTengah('Octa');
setNamaBelakang('Maulana');
setTanggalLahir('30');
setBulanLahir('Oktober');
setTahunLahir('2001');
setTempatLahir('Tokyo');
setUmur('21');
setAgama('Islam');
setAsalKampus('Universitas Pembangunan Nasional Veteran Jawa Timur');
setAsalFakultas('Ilmu Komputer');
setAsalProdi('Informatika');
setSemester('6');
setIpk('3.9');
setSksKumulatif('110');
setAlamatRumah('Jl. Rungkut Raya, Surabaya');
setKodePos('60293');
setNomorTelepon('085666777888');
setEmail('iniemaildimas@gmail.com');
setIsWNI('true');

console.log('Nama Depan :', getNamaDepan());
console.log('Nama Tengah :', getNamaTengah());
console.log('Nama Belakang :', getNamaBelakang());
console.log('Tanggal Lahir :', getTanggalLahir());
console.log('Bulan Lahir :', getBulanLahir());
console.log('Tahun Lahir :', getTahunLahir());
console.log('Tempat Lahir :', getTempatLahir());
console.log('Umur :', getUmur());
console.log('Agama :', getAgama());
console.log('Asal Kampus :', getAsalKampus());
console.log('Fakultas :', getAsalFakultas());
console.log('Program Studi :', getAsalProdi());
console.log('Semester :', getSemester());
console.log('IPK :', getIpk());
console.log('SKS Kumulatif :', getSksKumulatif());
console.log('Alamat Rumah :', getAlamatRumah());
console.log('Kode Pos :', getKodePos());
console.log('Nomor Telepon :', getNomorTelepon());
console.log('Email :', getEmail());
console.log('Status WNI :', getIsWNI());
