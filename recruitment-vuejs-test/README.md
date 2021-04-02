# vue-test-code (Soal 4)

## Debugging 
Mencari debugging pada soal nomor 4 dari clone github [refactory.id](https://github.com/refactory-id/recruitment-vuejs-test). Dari permaslahan tersebut diperlukan beberapa analisa dan pemecahan masalah untuk itu saya melakukannya dengan beberapa cara berikut.

1. Clone proejct dari https://github.com/refactory-id/recruitment-vuejs-test menggunakan perintah **git clone url taget**.
2. Install framework/library dari project **recruitment-vuejs-test** dengan mengetikan **npm i** atau **npm install** di terminal VSCode tunggu hingga proses selesai.
3. Terdapat problem setelah melakukan **npm install** seperti **pada Gambar 1**.

### Gambar 1
![bug1](https://user-images.githubusercontent.com/43200304/113403230-80e67680-93d0-11eb-99f7-f9b42e01289a.PNG)

4. Fix problem pada Gambar 1 dapat dilakukan dengan cara mengetikan **npm audit fix**  atau **npm audit** pada terminal VSCode, jika dijalankan maka akan menjadi seperti pada **Gambar 2**.

### Gambar 2
![bug2](https://user-images.githubusercontent.com/43200304/113403231-817f0d00-93d0-11eb-982b-516bcebf7190.PNG)

5. Kemudian jalankan program ini dengan mengetikan **npm run serve**. Alhasil ada **3 problems/error** yaitu pada bagian **mapState**, **INCREMENT** dan **error**. Untuk lebih jelasnya dapat dilihat pada **Gambar 3**.

### Gambar 3
![bug3](https://user-images.githubusercontent.com/43200304/113403234-8217a380-93d0-11eb-9a07-baf4319460f9.PNG)

6. Fix untuk pesan **error** line 57:15 dengan cara sebagai berikut (**Gambar 4**).
  - Menambahkan variabel **loading** di penampung **data vue**.
  - Menggunakan **error** dari **catch** dengan menampilkan pesan **error** kedalam alert dengan menambahkan **.message** dan nilai **loading** ke **false**.

### Gambar 4
![bug4](https://user-images.githubusercontent.com/43200304/113403236-82b03a00-93d0-11eb-8f7a-fa4388542d15.PNG)

7. Alhasil problem **error** sudah berhasil ditangani, selanjutnya adalah fix problem dari **mapState**. Untuk mempermudah simulasi ini, sementara saya beri tanda // (garis miring) untuk menonaktifkan **line 36: 10** berikut **import { INCREMENT } from "../mutation-types";**

### Gambar 5
![bug5](https://user-images.githubusercontent.com/43200304/113403238-8348d080-93d0-11eb-9de6-55519759c7d2.PNG)

8. Menambahkan variabel **text: ‘Users’** kedalam state pada file **store.js** (**Gambar 6**).

### Gambar 6
![bug6](https://user-images.githubusercontent.com/43200304/113403240-8348d080-93d0-11eb-9943-e1f54d2f7310.PNG)

9. Sedangkan untuk menggunakan **mapState** yaitu dengan menuliskan ke dalam **computed Vue**. Lalu didalam mapState akan saya panggil variabel **text** dari **state** dengan membuat inisial baru yaitu **stateText** seperti **Gambar 7**.

### Gambar 7
![bug7](https://user-images.githubusercontent.com/43200304/113403241-83e16700-93d0-11eb-9ad0-7e51845d4472.PNG)

10. Problems **mapState** telah berhasil diselesaikan, akan tetapi jika ingin menggunakan **stateText** untuk menampilkan tulisan **Users** ke **HTML** dengan menuliskan **{{stateText}}** ke dalam tag HTML **div** yang mempunyai nama class **user-count**. Hasil dapat dilihat pada **Gambar 8** dan tampilan untuk browser dapat dilihat pada **Gambar 9**.

### Gambar 8
![bug8](https://user-images.githubusercontent.com/43200304/113403243-8479fd80-93d0-11eb-9938-386323dc4822.PNG)

### Gambar 9
![bug9](https://user-images.githubusercontent.com/43200304/113403245-85129400-93d0-11eb-8cd7-9fe101e553f8.PNG)

11. Selanjutnya menampilkan data dari url https://jsonplaceholder.typicode.com/users di **mounted vue** menggunakan **Axios** dengan method **get**. Alhasil data belum dapat ditampilkan karena ada beberapa kesalahan yang ada di **store.js** dan **mutation-types.js**.
  - Pertama buka file **mutation-types.js** kemudian ubah nilai **‘SET_DATA’** dengan **‘setData’**.
  - Kedua buka file **store.js** kemudian ubah variable **list** dalam **state vuex** menjadi **ists**. Lalu ubah nama **setDatas** di dalam **actions vuex** menjadi **setData**. Hasil sebelum get data dapat dilihat pada **Gambar 10** sedangkan hasil setelah berhasil get data dapat dilihat pada **Gambar 11**.

### Gambar 10
![bug10](https://user-images.githubusercontent.com/43200304/113403247-85ab2a80-93d0-11eb-9174-bc8d6728ef87.PNG)

### Gambar 11
![bug11](https://user-images.githubusercontent.com/43200304/113403248-8643c100-93d0-11eb-8ea9-04bd21e4ec82.PNG)

12. Langkah selanjutnya membuat **styling Card** di **css** agar tampilan menjadi lebih menarik dan membuat responsive dengan menggunakan **media query**. Hasil dapat dilihat pada **Gambar 12**.

### Gambar 12
![bug12](https://user-images.githubusercontent.com/43200304/113403251-8643c100-93d0-11eb-9894-c4bae0a8613c.PNG)

13. Membuat loading dengan memanfaatkan perubahan data **loading** saat nilainya **true** maka akan menampilkan **halaman loading** dengan menambahkan directiv **v-if** dan **v-else** ke dalam tag htmlnya. Jika data benar dari hasil **response** maka setelah **halaman loading** akan menampilkan **halaman data**, sementara jika url diubah ke bentuk salah https://jsonplaceholder.typicode.com/usersxx maka akan menangkap **error** dari **catch** setelah **tampilan loading** akan menampilkan pesan **not found**. Tampilan **loading**, **halaman data**, dan **not found** (**Gambar 13**, **Gambar 14**, dan **Gambar 15**). Cara ini dapat dilakukan dengan sedikit perubahan sintaks code didalam **catch** seperti berikut.

```
Sebelumnya
.catch((error) => {
  alert(error.message)
  this.loading = false
})

Perbuhan
.catch((error) => {
  this.loading = true
  setTimeout(() => {
    this.loading = false
    this.statusCode = error.response.status
  }, 3000)
})
```

### Gambar 13
![bug13](https://user-images.githubusercontent.com/43200304/113403254-86dc5780-93d0-11eb-9faf-5022a51fac57.PNG)

### Gambar 14
![bug12](https://user-images.githubusercontent.com/43200304/113403251-8643c100-93d0-11eb-9894-c4bae0a8613c.PNG)

### Gambar 15
![bug15](https://user-images.githubusercontent.com/43200304/113403226-7f1cb300-93d0-11eb-8cc1-c45dbb29002f.PNG)



