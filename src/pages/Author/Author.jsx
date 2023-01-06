import React from "react";

const Author = () => {
  return (
    <main className="w-full lg:w-8/12">
      <div className="mt-8">
        <h1 className="font-semibold mb-4 text-4xl text-gray-800">Hai...</h1>
        <div className="flex items-center space-x-4">
          <h1 className="font-semibold mb-4 text-xl text-blue-500">
            Saya Muhammad Fajrul Amin
          </h1>
          <h1 className="font-thin mb-4 text-xl text-gray-800">|</h1>
          <h2 className="font-semibold mb-4 text-base text-gray-800">
            Junior Frond-End Developer
          </h2>
        </div>
        <div className=" mx-auto break-words max-w-none space-y-4">
          <h1 className="font-semibold">
            Memulai karir sebagai seorang programer di tahun 2022.
          </h1>
          <p>
            Saya adalah anak ke-2 dari 4 bersaudara,lahir di{" "}
            <strong className="text-blue-500">Bengkulu,30 April 2000</strong>,
            dibesarkan di kota bernama Bengkulu. mempunyai Ayah seorang Da'i,
            membuat saya tidak jauh dari dunia Agama.
          </p>
          <p>
            Setelah lulus Sekolah Menengah Tingkat Pertama, di{" "}
            <strong className="text-blue-500">SMP 21 Kota Bengkulu</strong>,
            saya melanjutkan sekolah di{" "}
            <strong className="text-blue-500">
              SMK Negeri 1 Kota Bengkulu
            </strong>
            , dengan jurusan Teknik Komputer Jaringan.
          </p>
          <p>
            dan melanjutkan pendidikan tentang bahasa pemerograman di
            JemblonganValley{"(Jvalley)"} Bootcamp Juni 2022
          </p>
          <p>
            Dalam karier sebagai programer, saya pernah dipercaya beberapa
            Pekerjaan, yaitu membuat Website Koperasi Gala Indo Mandiri serta
            Beberapa Undangan Online,dan membuat Karya berupa Web Portfolio{" "}
            <strong className="text-blue-500">Fajrul.id</strong> dan Blog{" "}
            <strong className="text-blue-500">Fajrul.id</strong>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Author;
