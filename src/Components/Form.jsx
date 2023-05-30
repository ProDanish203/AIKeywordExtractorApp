import React, { useState } from 'react'
import { message } from 'antd';

export const Form = ({ extract }) => {
  
  const [messageApi, contextHolder] = message.useMessage();
  const [text, setText] = useState("");


    const submitText = () => {
      if(text === ""){
        messageApi.open({
          type: 'error',
          content: 'Text field is empty',
        });
        return;
      }

      extract(text)
    }

  return (
    <>
    <div className="flex justify-center items-center flex-col gap-5">
    {contextHolder}
    <textarea 
    name="text" 
    id="text" 
    placeholder="Enter text here"
    className="border-2 shadow-lg border-gray-400 outline-none rounded-[4px] p-2 resize-none overflow-y-scroll min-h-[350px] max-w-[500px] w-full"
    value={text}
    onChange={(e) => {setText(e.target.value)}}
    ></textarea>

    <button className="max-w-[500px] shadow-2xl w-full bg-red-400 py-3 text-white cursor-pointer " onClick={submitText}>Extract Keywords</button>

    </div>
    </>
  )
}
