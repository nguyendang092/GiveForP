import React, { Component } from 'react'

export default class WarnningPage extends Component {
  render() {
    return (
        <div className='bg-stone-950 h-full'>
      <div className='w-4/5 mx-auto'>
        <h1 className='text-red-900 text-6xl text-center font-bold'>WARNNING</h1>
        <p className='text-white font-bold text-center text-2xl'>Bên dưới có chứa ngôn từ thô tục và nội dung không phù hợp với trẻ em hoặc 1 số đối tượng người xem. Vui lòng cân nhắc kỹ trước khi xem.</p>
        <p className='text-white font-bold text-center text-2xl'>The following content contains coarse language and material not suitable for children or certain audiences. Please consider carefully before watching.</p>
        <div className='w-full text-center'>
            <button className='bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300'>OK! Let's go!</button>
        </div>
      </div>
      </div>
    )
  }
}
