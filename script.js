const DICTIONARY_DATA = [
  { term: "Gua / Gue", definition: "Panggilan santai untuk menyebut diri sendiri. Biasanya digunakan untuk berbicara dengan orang yang seumuran.", example: "Gua pergi ke rumah Sinta kemarin." },
  { term: "Lo", definition: "Panggilan santai untuk menyebut orang lain, biasanya digunakan saat berbicara dengan orang yang seumuran.", example: "Lo temenin gue ke mal, yuk." },
  { term: "Bestie", definition: "Panggilan akrab untuk teman dekat atau sahabat; terkadang digunakan secara sarkas.", example: "Sinta mah bestie gue, ke mana-mana juga bareng." },
  { term: "Gas", definition: "Ajakan ke suatu tempat atau persetujuan untuk melakukan suatu kegiatan.", example: "Gas pantai, yuk!" },
  { term: "Nongki", definition: "Plesetan dari kata nongkrong, yaitu aktivitas mengobrol santai dengan teman di sebuah tempat (kafe, burjo, dsb).", example: "Nongki ke kafe Seturan, yuk." },
  { term: "Skena", definition: "Istilah yang menggambarkan gaya berpakaian vintage, selera musik indie, dan kebiasaan nongkrong di kafe vintage.", example: "Santi mah anak skena abis, nongkrong di kafe vintage mulu dia." },
  { term: "BTW", definition: "By the way (ngomong-ngomong); ungkapan untuk menyisipkan suatu informasi baru.", example: "BTW, Santi juara 1 kelas loh." },
  { term: "OTW", definition: "On the way (menuju); ungkapan keterangan menuju suatu tempat.", example: "Gue OTW ke kampus sekarang." },
  { term: "LOL", definition: "Laughing out loud (tertawa keras); ekspresi tertawa karena suatu hal yang sangat lucu.", example: "LOL, kocak banget!" },
  { term: "CMIIW", definition: "Correct me if I'm wrong (benarkan saya jika salah); ungkapan untuk memastikan kebenaran informasi.", example: "Setahu aku besok kita ke kampus lagi, tapi CMIIW ya." },
  { term: "FYI", definition: "For your information (sekadar informasi); digunakan untuk memberikan informasi tambahan.", example: "FYI aja nih, katanya Santi nyewa helikopter di Swiss." },
  { term: "IMO", definition: "In my opinion (menurutku); digunakan untuk menyampaikan opini pribadi.", example: "IMO, filmnya garing banget." },
  { term: "TMI", definition: "Too much information (terlalu banyak informasi); sebutan untuk seseorang yang terlalu detail menceritakan hingga membuat orang lain tidak nyaman.", example: "Dia ceritanya kepanjangan, TMI banget sumpah." },
  { term: "Nolep", definition: "No life (jarang bersosialisasi); sebutan untuk orang yang tidak banyak bersosialisasi.", example: "Dia mah nolep, gak punya temen." },
  { term: "Baper", definition: "Bawa perasaan; digunakan untuk seseorang yang terlalu perasa terhadap candaan atau hal romantis.", example: "Santi orangnya baperan, gak bisa diajak bercanda." },
  { term: "Mager", definition: "Malas gerak; ungkapan saat seseorang enggan melakukan sesuatu.", example: "Nanti deh ngerjain tugasnya, lagi mager." },
  { term: "Gabut", definition: "Ungkapan untuk menggambarkan keadaan saat seseorang tidak tahu harus melakukan apa (bosan).", example: "Libur ngapain ya, gabut banget di rumah." },
  { term: "Bucin", definition: "Budak cinta; sebutan untuk seseorang yang terlalu terobsesi dengan pasangannya.", example: "Santi bucin banget, sampai gak tidur demi nemenin pacarnya." },
  { term: "CLBK", definition: "Cinta lama bersemi kembali; ungkapan untuk hubungan lama yang kembali terjalin.", example: "Santi CLBK sama mantannya." },
  { term: "PHP", definition: "Pemberi harapan palsu; menggambarkan seseorang yang memberi harapan tanpa niat serius.", example: "Santi di-PHP-in sama cowok, eh cowoknya malah jadian sama cewek lain." },
  { term: "HTS", definition: "Hubungan tanpa status; menggambarkan hubungan dekat tanpa komitmen resmi.", example: "Gue di-HTS-in sama gebetan gue." },
  { term: "AFK", definition: "Away from keyboard; digunakan untuk menunjukkan seseorang sedang tidak aktif (biasanya dalam game).", example: "Gue AFK dulu, mau beli barang." },
  { term: "FOMO", definition: "Fear of missing out; menggambarkan seseorang yang takut ketinggalan tren atau berita.", example: "Bikin tren TikTok velocity yuk, FOMO nih." },
  { term: "KEPO", definition: "Dari bahasa Hokkien 'kaypoh' (ingin tahu); berarti terlalu penasaran terhadap sesuatu.", example: "Kamu tahu berita soal Santi gak? Ceritain dong, kepo banget!" },
  { term: "Lurking", definition: "Aktivitas memantau media sosial seseorang tanpa meninggalkan jejak (like atau komentar).", example: "Ketahuan kamu lurking IG mantan!" },
  { term: "Ghosting", definition: "Tindakan menghilang tanpa kabar dalam hubungan.", example: "Dia ghosting aku setelah deket 3 bulan." },
  { term: "Noob", definition: "Newbie (pemula); digunakan untuk menyebut orang yang belum berpengalaman.", example: "Bantuin aku dong, masih noob nih." },
  { term: "Flexing", definition: "Aktivitas memamerkan barang, gaya hidup, atau prestasi di media sosial.", example: "Santi suka flexing sepatu branded di TikTok." },
  { term: "Receh", definition: "Lawakan atau candaan yang garing tapi lucu.", example: "Humor gue receh banget, kocak!" },
  { term: "Salfok", definition: "Salah fokus; digunakan saat perhatian seseorang teralihkan dari hal utama.", example: "Gue salfok sama bajunya, bukan sama materinya." },
  { term: "Rizz", definition: "Singkatan dari charisma; digunakan untuk menggambarkan seseorang yang pandai menggoda lawan jenis.", example: "Anak itu rizz-nya parah banget, baru ngobrol bentar udah bikin cewek-cewek senyum." },
  { term: "Gyat", definition: "Ekspresi kagum (biasanya laki-laki kepada perempuan dengan fisik menarik); memiliki konotasi negatif.", example: "Gyat, cantik banget dia!" },
  { term: "Mewing", definition: "Tindakan meletakkan lidah di langit-langit mulut untuk membentuk garis rahang lebih tajam.", example: "Katanya kalau rajin mewing bisa bikin rahang makin tegas." },
  { term: "Fanum Tax", definition: "Situasi ketika makanan atau barang seseorang diambil orang lain secara bercanda.", example: "Tadi ayam gue lima potong, kok hilang? Jangan-jangan fanum tax?" },
  { term: "Skibidi", definition: "Tidak memiliki arti khusus; digunakan untuk menggambarkan sesuatu yang lucu, viral, atau absurd.", example: "Eh, kamu lihat video dance skibidi itu? Gila, gokil banget!" },
  { term: "Ohio", definition: "Istilah untuk menggambarkan sesuatu yang aneh atau tidak biasa.", example: "Hati-hati ke mal itu, katanya suasananya Ohio banget." },
  { term: "Sigma", definition: "Menggambarkan seseorang yang independen, dominan, dan percaya diri.", example: "Kalau mau jadi sigma, harus mandiri dan yakin sama diri sendiri." },
  { term: "Looksmaxxing", definition: "Upaya seseorang untuk memaksimalkan penampilan agar terlihat lebih menarik.", example: "Kalau pengen tampil lebih baik, coba fokus ke looksmaxxing yang sehat." },
  { term: "Bet", definition: "Ungkapan kesepakatan atau kesiapan melakukan sesuatu.", example: "Besok nongkrong di mal? Bet!" },
  { term: "GOAT", definition: "Greatest of all time; digunakan untuk menggambarkan seseorang atau hal yang terbaik sepanjang masa.", example: "Michael Jordan itu GOAT-nya bola basket dunia." },
  { term: "Sus", definition: "Suspect atau suspicious; digunakan untuk menggambarkan sesuatu yang mencurigakan.", example: "Kenapa tiba-tiba dia diem terus? Kayaknya sus deh." },
  { term: "Bussin", definition: "Menggambarkan sesuatu yang keren, memuaskan, atau sangat enak.", example: "Outfit kamu hari ini bussin, cocok banget." },
  { term: "Cap", definition: "Menggambarkan seseorang yang berbohong atau membual.", example: "Dia bilang bisa lari 100 meter di bawah 10 detik, itu cap banget sih." },
  { term: "No cap", definition: "Kebalikan dari cap; berarti jujur atau sungguh-sungguh.", example: "No cap, aku gak bohong, dia jago banget main game." },
  { term: "Lore", definition: "Cerita latar belakang atau mitologi di balik suatu karakter, tempat, atau peristiwa.", example: "Kalau mau ngerti karakter ini, baca dulu lore-nya." },
  { term: "Ratio'd", definition: "Kondisi ketika komentar seseorang mendapat lebih banyak like daripada postingan aslinya.", example: "Dia kena ratio parah, komentarnya lebih banyak dari like." },
  { term: "Mad Lit", definition: "Ekspresi untuk sesuatu yang sangat keren atau menarik, biasanya terkait musik atau gaya hidup.", example: "Konser semalam mad lit banget, gak mau pulang rasanya." },
  { term: "Gucci", definition: "Slang untuk menggambarkan sesuatu yang baik, hebat, keren, atau santai.", example: "Santai aja, semuanya gucci kok!" },
  { term: "ICK", definition: "Istilah untuk menggambarkan rasa jijik atau hilang ketertarikan dalam hubungan romantis.", example: "Pas dia ngomong gitu, aku langsung ick dan pengen pergi." },
  { term: "BOP", definition: "Istilah untuk lagu yang sangat bagus dan enak didengar.", example: "Lagu barunya bop banget, aku suka banget!" }
];

const container = document.getElementById('dictionaryContainer');
const searchInput = document.getElementById('searchInput');

function render(data) {
  container.innerHTML = '';
  if (data.length === 0) {
    container.innerHTML = '<p style="padding:1rem; font-style:italic;">Tidak ada hasil yang cocok.</p>';
    return;
  }
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="term">${item.term}</div>
      <div class="definition">${item.definition}</div>
      <div class="example">"${item.example}"</div>
    `;
    container.appendChild(card);
  });
}

searchInput.addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const filtered = DICTIONARY_DATA.filter(item => 
    item.term.toLowerCase().includes(q) ||
    item.definition.toLowerCase().includes(q) ||
    item.example.toLowerCase().includes(q)
  );
  render(filtered);
});

// tampilkan semua saat load
render(DICTIONARY_DATA);
