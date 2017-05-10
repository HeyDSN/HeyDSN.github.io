---
layout: post
title:  "Cara Menggunakan Jekyll"
date:   2017-05-10 16:47:43 +0700
categories: [blogging, tutorial, jekyll]
---

Singkat saja, postingan ini akan memberikan sedikit tutorial singkat cara menggunakan jekyll mulai dari installasi sampai menggunakannya.

Mulai dari cara install, paling mudah untuk menggunakan jekyll adalah dengan _GitHub Page_ yang tersedia secara gratis tapi pada artikel akan mulai dari yang paling mendasar yaitu install pada perangkat komputer/laptop secara lokal sama seperti konsep XAMPP yang menjalankan apache server secara lokal. Perlu diketahui pada artikel ini hanya akan menjelaskan cara install secara lokal untuk perangkat Linux/Mac OS saja, jika menggunakan Windows silahkan di skip dan langsung membaca bagian ["Menggunakan jekyll pada _GitHub Page_"](#use-github).

## Install jekyll secara lokal {#lokal}
Menurut website resmi jekyll untuk menggunakannya pada perangkat Linux/Unix/Mac OS maka perangkat harus sudah terinstall _Ruby_ Versi 2 atau di atasnya, _RubyGems_ serta _GCC dan Make_.

```
Requirements

Installing Jekyll should be straight-forward if all requirements are met. Before you start, make sure your system has the following:

* GNU/Linux, Unix, or macOS
* Ruby version 2.0 or above, including all development headers
* RubyGems
* GCC and Make (in case your system doesn’t have them installed, which you can check by running gcc -v and make -v in your system’s command line interface)
```

Jika perangkat sudah terdapat program yang disebutkan tadi maka bisa langsung menginstall jekyll melalui terminal, jika belum maka install terlebih dahulu program yang disebutkan sebelumnya. Untuk sistem operasi Linux dapat menggunakan package manager masing-masing pada sistem operasi seperti _Ubuntu_ menggunakan `apt-get` atau _Arch Linux_ bisa menggunakan `pacman` atau `yaourt`, untuk Mac OS bisa menggunakan `Homebrew`.

Setelah yakin semua program yang dibutuhkan terinstall, ketik perintah di bawah pada terminal untuk memulai install hingga mejalankannya pada perangkat.

```
# Install Jekyll dan Bundler gems melalui RubyGems
~ $ gem install jekyll bundler

# Membuat website jekyll baru pada folder ./blog-jekyll
~ $ jekyll new blog-jekyll

# Masuk ke dalam folder website yang baru dibuat
~ $ cd blog-jekyll

# Setelah masuk, bangun website dan jalankan pada server lokal
~ $ bundle exec jekyll serve

# Sekarang buka http://localhost:4000 pada browser
```

Jika mendapatkan pesan seperti gambar di bawah ini maka jekyll telah berjalan secara lokal pada perangkat, setelah berjalan maka Jekyll telah siap untuk di ubah sesuai kreasi.

![Terminal Jekyll](/static/img/posts/2017-05/terminal-jekyll.png "Terminal Jekyll")

## Menggunakan jekyll pada _GitHub Page_ {#use-github}
Untuk menggunakan jekyll dengan _GitHub Page_ sebenarnya lebih mudah dibandingkan install secara lokal, dan cara pertama juga sebenarnya tidak terlalu diperlukan jika tidak inging melakukan kostumisasi yang terlalu banyak pada tampilan jekyll. Untuk menggunakan jekyll pada _GitHub Page_ tentunya harus memiliki akun _GitHub_ terlebih dahulu, silahkan daftar secara gratis di halaman ini [Join GitHub](https://github.com/join) setelah itu buka halaman [Jekyll Now](https://github.com/barryclark/jekyll-now) lalu klik tombol fork seperti gambar di bawah ini, fork adalah sebuah cara untuk melakukan duplikasi sebuah project pada GitHub sehingga kita dapat memberikan kontribusi terhadap project tersebut atau dimodifikasi untuk penggunaan pribadi.

[ ![Jekyll Now](/static/img/posts/2017-05/jekyll-now.png "Jekyll Now") ](/static/img/posts/2017-05/jekyll-now.png)

Setelah selesai fork, ubah nama repository sesuai dengan username _GitHub_ yang digunakan _(username.github.io)_, contoh akun blog ini memiliki username "zerosite" maka pada nama repository menjadi "zerosite.github.io", setelah mengganti nama repository lalu save maka blog sudah dapat diakses melalui alamat yang telah dimasukkan pada nama repository.

[ ![Rename Repository](/static/img/posts/2017-05/jekyll-rename.png "Rename Repository")](/static/img/posts/2017-05/jekyll-rename.png)

Jika ingin mengganti template bisa dilakukan dengan mengubah file CSS dasar sesuai dengan keinginan atau memakai template yang sudah jadi, misalnya [Template Hyde](http://hyde.getpoole.com/) merupakan salah satu template jekyll yang cukup terkenal karena desainnya yang sederhana tapi elegan, untuk menggunakannya silahkan fork template dari repository GitHub yang telah disediakan ([Hyde](https://github.com/poole/hyde)) atau menggunakan template blog ini silahkan form dari github [Zerosite](https://github.com/zerosite/zerosite.github.io/), sebenarnya template ini merupakan hasil modifikasi dari template lainnya dengan terinspirasi dari tampilan hitam putih template Hyde yang elegan hingga akhirnya seperti sekarang ini, silahkan baca bagian README pada repository blog ini untuk informasi lebih lanjut.