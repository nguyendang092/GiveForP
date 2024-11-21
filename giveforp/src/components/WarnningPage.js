import React, { Component } from 'react'


export default class WarnningPage extends Component {
  render() {
    return (
        <div className='bg-stone-950 h-full flex items-center justify-center'>
      <div className='w-3/5 mx-auto mb-12'>
        <h1 className='text-red-900 text-8xl text-center font-bold mb-12'>WARNING</h1>
        <p className='text-white font-bold text-center text-2xl my-3'>Nội dung sau đây có chứa ngôn từ mạnh và có thể không phù hợp với mọi đối tượng. Quý vị khán giả nên cân nhắc trước khi nghe để có trải nghiệm phù hợp.</p>
        <p className='text-white font-bold text-center text-2xl my-3'>The following content contains strong language and may not be suitable for all audiences. Viewers are advised to consider this before listening for an appropriate experience.</p>
        <div className='w-full text-center'>
            <button className='bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 my-3'>OK! Let's go!</button>
        </div>
      </div>
      </div>
    )
  }
}
