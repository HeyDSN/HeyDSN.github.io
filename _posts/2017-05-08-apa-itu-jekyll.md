---
layout: post
title:  "Jekyll"
date:   2017-05-08 21:54:00 +0700
categories: [blogging, jekyll]
image: file-by-file.png
---

Apa itu jekyll?, kenapa jekyll? Apa kelebihannya dibanding blogger? :grimacing:

Sudah bertahun-tahun yang lalu sejak saya pertama kali memulai dunia blogging, berawal dari tugas masa SMP yang awalnya hanya 2 buah artikel sampai mengenal dasar-dasar sintaks _HTML,CSS, dan JavaScript_.

Blogger merupakan sebuah platform blogging gratis dari google, selain blogger juga terdapat satu lagi platform blogging yang cukup terkenal yaitu wordpress yang juga tersedia secara gratis, akan tetapi wordpress ini memerlukan sebuah server untuk mejalankannya, jadi wordpress merupakan bukan pilihan yang tepat bagi semua orang karena alasan "membutuhkan server" ini, dengan sedikit melakukan googling lalu saya mendapatkan "Jekyll" yang hanya cukup menggunakan _GitHub page_, jujur pertama saya mendengarnya berasa aneh bahkan saya berkali-kali salah mengetiknya dengan "Jekly".

Setelah saya menggunakannya walau baru beberapa jam saya tertarik untuk menuliskan tentang jekyll sebagai postingan pertama saya di blog baru ini.

Pada posting pertama ini saya akan menuliskan alasan saya mengapa saya pindah dari blogger ke jekyll.

### Pertama, alasan saya mengapa sekarang memilih jekyll walau sudah bertahun-tahun menggunakan blogger.

Kelebihan Jekyll:

1. Harga<br/>
	Blogger dan jekyll sama-sama tersedia secara gratis, tapi ada satu hal yang paling mendasar yaitu akses ke dalam setiap baris kode blog Anda, jika Anda merupakan seorang yang suka dengan programming mungkin hal ini akan terlihat lebih baik untuk Anda, tapi jika Anda seorang penulis blog profesional yang hanya fokus pada konten yang Anda bagikan jelas jekyll ini bukan merupakan pilihan yang tepat.

2. Markdown<br/>
	Berbeda dengan blogger yang menggunakan HTML sebagai bahasa yang digunakan dalam postingan, jekyll memberikan beberapa bahasa _markup_ dalam menulis artikel seperti HTML, Latex, Markdown dan yang mempunya fitur lebih banyak, MultiMarkdown. Saya sendiri menggunakan markdown dalam menuliskan artikel ini, awalnya ini merupakan tantangan untuk saya karena saya biasa menuliskan artikel menggunakan HTML pada blogger, jujur saja saya tidak suka dengan text editor bawaan blogger menurut saya teks editor bawaan wordpress jauh lebih baik, jadi ketika saya mencoba menggunakan markdown dalam menuliskan artikel ini terasa lebih cepat dibanding menggunakan HTML karena tidak perlu menuliskan tag-tag HTML lagi.<br/>
	Kelebihan menggunakan markdown:
	* Mudah dibaca - Markdown menggunakan semacam kode untuk memformat text menggunakan simbol non-alfanumerik, walau menggunakan kode untuk melakukan format text, akan tetapi markdown sangat mudah untuk dibaca.
	* Kecepatan - Kita dapat mengetik artikel tanpa perlu berurusan dengan WYSIWYG editor yang berat, serta dengan tidak adanya tag-tag khusus HTML kecepatan dalam menulis artikel menjadi lebih cepat, misal untuk menuliskan huruf tebal cukup dengan mengetik `**Text Bold**` dan akan menghasilkan **Text Bold**.
	* Editor -  Dengan menggunakan markdown saya jadi bebas memilih editor dalam menuliskan artikel, di Windows saya biasa menggunakan Notepad++ dan di Mac/Linux menggunakan SublimeText untuk menulis artikel. Saya juga biasa mencobanya secara lokal di device saya sebelum melakukan posting.
	* Pencarian - Markdown pada dasarnya hanya sebuah file teks biasa, hal memungkinkan kita untuk mencari konten dalam file dengan mudah dengan dengan Spotlight pada Mac OS atau Search di File Explore pada Windows.

3. Dropbox dan GitHub<br/>
	Karena sifat dasar dari jekyll merupakan sebuah file statis, maka file dengan sangat mudah dipindahkan, blog saya ini di host pada GitHub dan pada device saya file di sinkron dengan dropbox jadi ketika saya pindah dari laptop atau pc saya akan dengan mudah mengakasesnya secara lokal karena sudah sinkron dengan dropbox.

4. Menjalankan versi development di lokal<br/>
	Dengan jekyll Anda dapat menjalankan blog secara online atau offline semudah _copy and paste_ cukup jalankan _terminal_, pindah ke folder tempat jekyll Anda berada dan jalankan perintah:

	`bundle exec jekyll serve`

	Maka blog Anda sudah dapat diakses secara offline, tentu saja sebelumnya pastikan bahwa jekyll sudah terinstall pada Mac/Linux Anda, silahkan lihat _[Cara install jekyll](http://jekyllrb.com/docs/installation/)_ untuk memulainya dan untuk Windows silahkan lihat _[Cara install jekyll pada Windows](https://jekyllrb.com/docs/windows/)_. Setelah jekyll terinstall dah Anda sudah selesai melakukan konfigurasi blog sesuai keinginan cukup _commit_ file Anda ke akun GitHub milik Anda dan blog dapat dilihat secara online.
5. Fleksibilitas<br/>
	Karena jekyll menggunakan file statis dan tidak menggunakan database menjadikannya tidak hanya lebih ramah resource tetapi juga lebih mudah untuk melakukan banyak kostumisasi yang tidak mungkin dilakukan pada blogger, misalnya menggunakan tema yang berbeda pada suatu halaman yang tidak mungkin dapat dilakukan pada blogger.
	
	Sebagai contoh, saya ingin menuliskan sebuah _resume_ online menggunakan alamat khusus, misalnya `https://zerosite.github.io/my-resume` dan ingin menggunakan tampilan khusus saya cukup membuat sebuah file HTML baru dengan CSS dan selesai, hal yang tidak mungkin untuk dilakukan pada blogger.

### Selain kelebihan jekyll di atas, ada juga beberapa kekurangan yang dimiliki jekyll.

Selain banyak kelebihan yang dimiliki oleh jekyl, terdapat juga beberapa kekurangan yang mungkin jadi pertimbangan untuk menggunakannya:

1. Template sedikit - Berbeda dengan blogger yang memiliki ratusan bahkan ribuan template siap pakai yang tersebar di internet, jekyll memiliki sedikit varian template yang tersedia, jadi jika ingin menggunakan jekyll bersiap untuk terlihat memiliki template yang mirip dengan blog jekyll lainnya, kecuali Anda sudah siap untuk menggali style CSS bawaan dari jekyll untuk dimodifikasi.
2. Perlu belajar hal baru - Untuk menggunakan jekyll kita harus mengerti menggunakan GitHub dan GitHub Page. Mungkin ini tidak sepenuhnya kekurangan karena ini bisa juga sekalian belajar tentang GitHub karena sangat berguna pada dunia programming dalam team, dan juga GitHub memiliki aplikasi desktop yang sangat mudah untuk digunakan.
3. Tidak ada dashboard - Pada blogger mungkin Anda terbiasa membuat posting menggunakan tools yang disediakan secara online dalam dashboard blogger. Dengan menggunakan jekyll, berarti Anda harus membuat file posting secara manual file demi file.
![File by file](/static/img/posts/2017-05/file-by-file.png "File by File")

### Kesimpulan

Blogger merupakan platform yang bagus untuk menghemat waktu, cukup dengan mendaftar Anda langsung bisa menuliskan artikel di blog baru Anda. Menggunakan jekyll berarti Anda harus melakukan beberapa setup terlebih dahulu sebelum dapat menuliskan sebuah artikel. Bagi Anda yang ingin membangun sebuah blog dengan akses penuh ke dalamnya jekyll dan GitHub Page merupakan sebuah pilihan yang tepat. Jika Anda ingin melakukan mengelola blog Anda di server sendiri dengan murah dan resource rendah serta memiliki kemampuan menggunakan teks/kode editor, maka Anda akan menyukainya. Seperti saya katakan sebelumnya untuk menggunakan jekyll harus memiliki sedikit kemampuan dan kemauan belajar menggunakan GitHub, jika Anda telah memilih pindah dari blogger atau lainnya seperti wordpress, maka website jekyll telah menyediakan semua [tools yang Anda butuhkan](http://jekyllrb.com/docs/migrations/).

Jika Anda migrasi dari platform blogging Anda ke jekyll atau sudah menjadi pengguna jekyll, tuliskan komentar di bawah dan bagikan pengalaman Anda menggunakan jekyll. Saya ingin melihat apa yang orang lain lakukan pada jekyll mereka, seperti saya yang mengubah template dari [template ini](https://agusmakmun.github.io/) hingga menjadi seperti sekarang ini dengan kemampuan HTML dan CSS saya yang seadanya.
