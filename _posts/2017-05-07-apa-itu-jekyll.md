---
layout: post
title:  "Jekyll"
date:   2017-05-07 21:13:00 +0700
categories: [blogging, tutorial, jekyll]
---

Apa itu jekyll, kenapa jekyll? :grimacing:

Sudah bertahun-tahun yang lalu sejak saya pertama kali memulai dunia blogging, berawal dari tugas masa SMP yang awalnya hanya 2 buah posting sampai mengenal dasar-dasar sintaks _HTML,CSS, dan JavaScript_.

Blogger merupakan sebuah platform blogging gratis dari google, selain blogger juga terdapat satu lagi platform blogging yang cukup terkenal yaitu wordpress yang juga tersedia secara gratis, akan tetapi wordpress ini memerlukan sebuah server untuk mejalankannya, jadi wordpress merupakan bukan pilihan yang tepat bagi semua orang karena alasan "membutuhkan server" ini, dengan sedikit melakukan googling lalu saya mendapatkan "Jekyll" yang hanya cukup menggunakan _GitHub page_, jujur pertama saya mendengarnya berasa aneh bahkan saya berkali-kali salah mengetiknya dengan "Jekly".

Setelah saya menggunakannya walau baru beberapa jam saya tertarik untuk menuliskan tentang jekyll sebagai postingan pertama saya di blog baru ini.

Pada posting pertama ini saya akan menuliskan alasan saya mengapa saya pindah dari blogger ke jekyll serta memberitahukan dasar bagaimana cara membuat blog pada GitHub menggunakan jekyll ini.

Pertama, alasan saya mengapa sekarang memilih jekyll walau sudah bertahun-tahun menggunakan blogger.

1. Harga<br/>
	Blogger dan jekyll sama-sama tersedia secara gratis, tapi ada satu hal yang paling mendasar yaitu akses ke dalam setiap baris kode blog Anda, jika Anda merupakan seorang yang suka dengan programming mungkin hal ini akan terlihat lebih baik untuk Anda, tapi jika Anda seorang penulis blog profesional yang hanya fokus pada konten yang Anda bagikan jelas jekyll ini bukan merupakan pilihan yang tepat
2. Markdown<br/>
	Berbeda dengan blogger yang menggunakan HTML sebagai bahasa yang digunakan dalam postingan, jekyll memberikan beberapa bahasa _markup_ dalam menulis artikel seperti HTML, Latex, Markdown dan yang mempunya fitur lebih banyak, MultiMarkdown. Saya sendiri menggunakan markdown dalam menuliskan artikel ini, awalnya ini merupakan tantangan untuk saya karena saya biasa menuliskan artikel menggunakan HTML pada blogger, jujur saja saya tidak suka dengan text editor bawaan blogger menurut saya text editor bawaan wordpress jauh lebih baik, jadi ketika saya mencoba menggunakan markdown dalam menuliskan artikel ini terasa lebih cepat dibanding menggunakan HTML karena tidak perlu menuliskan tag-tag HTML lagi.<br/>
	Kelebihan menggunakan markdown:
	* Mudah dibaca - Markdown menggunakan semacam kode untuk memformat text menggunakan simbol non-alphanumerik, walau menggunakan kode untuk melakukan format text, akan tetapi markdown sangat mudah untuk dibaca.
	* Kecepatan - Kita dapat mengetik artikel tanpa perlu berurusan dengan WYSIWYG editor yang berat, serta dengan tidak adanya tag-tag khusus HTML kecepatan dalam menulis artikel menjadi lebih cepat, misal untuk menuliskan huruf Bold cuku dengan mengetik `**Text Bold**` dan akan menghasilkan **Text Bold**
	* Editor -  Dengan menggunakan markdown saya jadi bebas memilih editor dalam menuliskan artikel, di Windows saya biasa menggunakan Notepad++ dan di Mac/Linux menggunakan SublimeText untuk menulis artikel. Saya juga biasa mencobanya secara lokal di device saya sebelum posting.
	* Pencarian - Markdown pada dasarnya hanya sebuah file teks biasa, hal memungkinkan kita untuk mencari konten dalam file dengan mudah dengan dengan Spotlight pada Mac OS atau Search di File Explore pada Windows.
3. Dropbox dan GitHub<br/>
	Karena sifat dasar dari jekyll merupakan sebuah file statis, maka file dengan sangat mudah dipindahkan, blog saya ini di host pada GitHub dan pada device saya file di sinkron dengan dropbox jadi ketika saya pindah dari laptop atau pc saya akan dengan mudah mengakasesnya secara lokal karena sudah sinkron dengan dropbox.
4. Menjalankan versi development di lokal<br/>
	Dengan jekyll Anda dapat menjalankan blog secara online atau offline semudah _copy and paste_ cukup jalankan _terminal_, pindah ke folder tempat jekyll Anda berada dan jalankan perintah:

	`bundle exec jekyll serve`

	Maka blog Anda sudah dapat diakses secara offline, tentu saja sebelumnya pastikan bahwa jekyll sudah terinstall pada Mac/Linux Anda, silahkan lihat _[Cara install jekyll](http://jekyllrb.com/docs/installation/)_ untuk memulainya dan untuk Windows silahkan lihat _[Cara install jekyll pada Windows](https://jekyllrb.com/docs/windows/)_. Setelah jekyll terinstall dah Anda sudah selesai melakukan konfigurasi blog sesuai keinginan cukup _commit_ file Anda ke akun GitHub milik Anda dan blog dapat dilihat secara online.
5. Fleksibilitas<br/>
	