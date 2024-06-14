import React from 'react'
import { Download } from 'lucide-react'
const Btn = () => {
  return (
    <div>
      <div>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Download Resume
</button>
        <Download/>
      </div>
    </div>
  )
}

export default Btn
