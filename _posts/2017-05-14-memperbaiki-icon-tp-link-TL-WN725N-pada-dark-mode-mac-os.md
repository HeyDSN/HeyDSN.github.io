---
layout: post
title:  "Memperbaiki icon TP-Link TL-WN725N pada dark mode MAC OS"
date:   2017-05-14 01:44:32 +0700
categories: [macOS, tutorial]
description: Cara memperbaiki warna icon Wireless USB TP-Link TL-WN725N yang gelap pada tema dark mode Mac OS X El Capitan
---

Singkat cerita, saya merupakan penggemar tema gelap sejak menggunakan Linux dan saat pertama menggunakan OS X juga saya langsung menggunakan tema gelap dan saya sangat menyukainya, sebelumnya saya tidak menggunakan wireless untuk terhubung ke internet lalu saya membeli Wireless USB dari TP-Link dengan model TL-WN725N, entah kenapa saya suka dengan bentuknya yang kecil tapi setelah menggunakannya saya terpaksa untuk tidak menggunakan tema gelap lagi karena icon sinyal TL-WN725N ini tidak terlihat pada menu bar.

![TL-WN725N Dark](/static/img/posts/2017-05/old.png "TL-WN725N Dark")

Setelah saya menggunakan tema terang, saya merasa rindu dengan tema gelap dan tidak tahan untuk mencari cara di internet untuk mengubah icon tersebut secara manual, dan saya menemukan titik terang karena saya menemukan sebuah tutorial cara mengubahnya yaitu cukup melakukan invert warna putih dan hitam, tapi sayang sekali cara tersebut tidak ampuh karena saya telah mecoba berbagai warna mulai putih, hitam, biru terang, kuning, dan berbagai warna terang lainnya.

Karena saya masih penasaran, akhirnya saya mecoba membongkar file installasi driver yang ada pada kaset driver dan saya menemukan 2 buah file dengan nama yang sama, file tersebut adalah app pada menubar.

![TL-WN725N Dark](/static/img/posts/2017-05/driver-tplink.png "TL-WN725N Dark")

Di dalamnya terdapat dua buah "StatusBarApp.app" dengan perbedaan ukuran yang sangat kecil yaitu 1 MB satu file berukuran.

![TL-WN725N Ukuran](/static/img/posts/2017-05/ukuran-tplink.png "TL-WN725N Ukuran")

Karena saya penasaran saya coba ekstrak kedua file tersebut dan saya bandingkan ukurannya dengan file yang ada pada "/Library/Application Support/WLAN/" dan saya coba untuk replace file yang ada dengan salah satu file yang saya dapatkan dari Installer.pkg tapi file yang ukurannya berbeda lalu saya hentikan aplikasi yang sedang berjalan dengan terminal `"sudo killall -c StatusBarApp"` cabut device lalu saya coba jalakan file yang baru saja saya copy dan ubah tema gelap lalu colok device kembali, dan berhasil warna icon sinyal tidak gelap seperti sebelumnya.

![TL-WN725N Dark](/static/img/posts/2017-05/new.png "TL-WN725N Dark")

![TL-WN725N Dark](/static/img/posts/2017-05/new-expand.png "TL-WN725N Dark")

Jika Anda tidak mempunyai file installasi atau malas untuk mencarinya silakan [download file ini](https://www.dropbox.com/s/slu0df82zgco7vo/Fix%20Dark%20Status%20Bar%20TL-WN725N.zip?dl=0) dan copy ke dalam folder "/Library/Application Support/WLAN/" dan gantikan file yang sudah ada.

***Baru di test pada El Capitan saja, jika Anda berhasil dengan cara yang sama pada versi OS X lainnya, misal Yosemite atau Sierra silahkan tinggalkan komentar Anda untuk memberitahukan yang lainnya :)
