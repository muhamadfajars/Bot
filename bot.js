const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Halo, Perkenalkan nama saya FajarBot, Siapa nama kamu?",
    `Hallo ${data?.nama} berapa usia kamu?`,
    `Ohh ${data?.usia} tahun, hobi kamu apa?`,
    `Waw hobi kamu ${data?.hobi} keren banget, pekerjaan kamu apa ya?`,
    `ohhh ${data?.pekerjaan}, okey kalo gitu udahan dulu ya`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  if (jawaban.value.length < 1) return alert("Silahkan isi jawaban dahulu");
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pekerjaan: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, [1000]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Oke makasih ya ${usersData[0]} udah mencoba FajarBot😁`;
  jawaban.value = "Okey makasih juga";
}

function botEnd() {
  alert(`Terima kasih ${usersData[0]} terima kasih sudah mengunjungi Fajar Bot, anda akan diarahkan kembali kehalaman utama`);
  window.location.reload();
}
