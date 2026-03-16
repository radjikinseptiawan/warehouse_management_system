"use client"

import Link from "next/link"

export default function NotFound(){
    return(
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">404</h2>
      <h3 className="text-xl font-semibold text-gray-600 mb-4">
        Halaman Tidak Ditemukan
      </h3>
      <p className="text-gray-500 mb-8 text-center">
        Maaf, sepertinya kamu tersesat. Halaman yang kamu cari tidak ada.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Balik ke Beranda
      </Link>
    </div>
    )
}