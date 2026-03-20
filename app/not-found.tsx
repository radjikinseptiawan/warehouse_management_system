"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"

export default function NotFound(){
  const { status } = useSession()
  const response = (status === "authenticated")
  return(
   <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">404</h2>
      <h3 className="text-xl font-semibold text-gray-600 mb-4">
        Halaman Tidak Ditemukan
      </h3>
      {
        response ?       
      <p className="text-gray-500 mb-8 text-center">
        Maaf, sepertinya kamu tersesat. Halaman yang kamu cari tidak ada.
      </p>
        :
      <p className="text-gray-500 mb-8 text-center">
        Maaf, sistem tidak mengenali anda!, harap login terlebih dahulu.
      </p>
  
      }
      <Link
        href="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
      >
        {
          response ? 
          "Kembali ke halaman Home" 
          :
          "Kembali ke Halaman Login"
        }
      </Link>
    </div>
    )
}