import React from "react";

const AboutUs = () => {
  return (
    <main class="w-full lg:w-8/12">
      <div className="mt-8">
        <h1 class="font-semibold mb-4 text-4xl text-gray-800">About Us</h1>
        <div class="mx-auto break-words max-w-none space-y-4">
          <p>
            <strong>blog.fajrul.id</strong> adalah blog yang membahas seputar
            Kota Bengkulu , Teknologi informasi dan beberapa tutorial.
          </p>
          <p>
            Jangan ragu untuk memberikan komentar pada setiap artikel yang kami
            tayangkan jika terdapat kesalahan atau jika Anda tidak dapat
            memahaminya. Memberi masukan dan saran langsung melalui{" "}
            <a href="/contact">kontak</a> email juga sangat kami harapkan.
          </p>
          <p>
            Jika Anda merasa konten kami baik tulisan, gambar, video atau media
            lainya melanggar hak dan kekayaan intelektual atau hukum silahkan
            hubungi kami melalui <a href="/contact">email</a>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
