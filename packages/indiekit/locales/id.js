/* eslint-disable import/no-anonymous-default-export */
export default {
  error: "Kesalahan",
  errorSummaryTitle: "Ada masalah",
  errors: {
    noDatabase: {
      content: "Fitur ini membutuhkan database.",
    },
    notFound: {
      content:
        "Jika Anda memasukkan alamat web silakan periksa apakah alamat sudah benar.",
      title: "Halaman tidak ditemukan",
    },
  },
  guidance: {
    discovery:
      "Sehingga %s dapat ditemukan oleh klien Micropub dan meminta izin untuk memposting ke situs web Anda, tambahkan nilai berikut ke situs web Anda `<head>`:",
  },
  noValue: "Tidak ada",
  optionalValue: "(opsional)",
  session: {
    login: {
      description:
        "Masuk dengan IndieAuth untuk memverifikasi bahwa Anda memiliki %s",
      error: {
        validateRedirect: "Percobaan pengalihan tidak valid",
        validateState: "Tidak ada ketidakcocokan `code` atau `state`",
      },
      me: "Alamat web",
      submit: "Masuk dengan IndieAuth",
      title: "Masuk",
    },
    logout: {
      title: "Keluar",
    },
  },
  status: {
    application: {
      accessToken: "Akses Token",
      endpoints: "Titik akhir",
      installedPlugins: "Plug-in yang terpasang",
      locale: "Bahasa",
      localeNotAvailable: "{{app}} belum diterjemahkan ke {{locale}}",
      name: "Nama",
      scope: "Ruang lingkup yang disediakan",
      summaryTitle: "Pengaturan aplikasi",
      themeColor: "Warna tema",
      themeColorScheme: "Tema",
      themeColorSchemeValue: {
        automatic: "Otomatis",
        dark: "Gelap",
        light: "Terang",
      },
    },
    publication: {
      accessToken: "Akses Token",
      authorizationEndpoint: "Titik akhir Otorisasi",
      locale: "Bahasa",
      me: "Alamat web",
      mediaEndpoint: "Titik akhir media",
      micropubEndpoint: "Titik akhir Mikropub",
      postTypes: "Jenis postingan",
      preset: "Prasetel",
      store: "Penyimpanan Konten",
      summaryTitle: "Pengaturan publikasi",
      syndicationTargets: "Sasaran sindikasi",
      timeZone: "Zona Waktu",
      tokenEndpoint: "Titik akhir Token",
    },
    title: "Status server",
  },
};