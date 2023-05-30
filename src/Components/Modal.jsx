export const Modal = ({ keywords, loading, modal, closeModal }) => {
  return (
    <>
    <div className="w-full h-full absolute top-0 left-0 modal flex items-center justify-center p-2"> 
        <div className="box m-auto w-full max-w-[500px] p-4 bg-white min-h-[300px] shadow-2xl rounded-[4px] relative">
            <div className="flex justify-between items-center text-xl pb-2 border-b-2 border-b-gray-300">
              <h3 className="font-bold">Keywords</h3>
              <i className="fas fa-times cursor-pointer" onClick={closeModal}></i>
            </div>

            {
              loading ? (
                <p>Generating Keywords...</p>
              ) : (
                <p className="my-5">
                  {keywords.map((word, i) => (
                    <span key={i}>{word}, </span> 
                  ))}
                </p>                
              )
            }                                 
        </div>
    </div>
    </>
  )
}
