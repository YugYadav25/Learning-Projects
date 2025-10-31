  import React,{ useState } from 'react'

  const App = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [task, setTask] = useState([])


    function NoteDel(idx){
       let c = [...task]
  c.splice(idx, 1)   // remove note at that index
  setTask(c) 
    }
    function formsubmit(e){
      e.preventDefault();
      let copytask =[...task]
      copytask.push({title,details})

      setTask(copytask)

      console.log(copytask)
      setTitle('')
      setDetails('')

    }
    return (
    <div>
      <form action="" onSubmit={(e)=>{
              formsubmit(e)
            }}>
        <div className='text-white '>
        <div className='sm:flex justify-center '>

        
        
          <div className='flex flex-col  m-8  '>
            <h1 className='font-medium mb-6'>Add Notes: </h1>

            <input type="text" placeholder='Enter Header: ' className='border-b-red-100 border-2 lg:w-full'
            value={title} 
            onChange={(e)=>{
              setTitle(e.target.value)
              
            }
              
            } />

            <input type="text" placeholder='Your Note: ' className='border-b-red-100 border-2 lg:w-full my-4' 
            value={details} 
            onChange={(e)=>{
              setDetails(e.target.value)
            }
          }
            />

            <button className='bg-white text-black font-medium  rounded-2xl my-2' 
          >Add Note</button>
            
          </div>
          <div className=' my-5 flex flex-col p-3 justify-center items-center '>
                  <div className=' flex flex-wrap flex-col gap-5'>
                <h1 className='font-medium'>Recent Notes</h1>
                <div className='flex flex-wrap gap-5 ' >
                
                  {
                    task.map(function(elem,idx){
                      return     <div className="card bg-white h-52 w-40 rounded-2xl
                      bg-[url('https://www.pngmart.com/files/7/Note-PNG-Clipart.png')] bg-cover 
                      flex flex-col justify-between items-center">
                        <div className='text-black flex justify-center p-3
                        flex-col items-center
                        '>
                                <h3 className='font-bold'>{elem.title}</h3>
                        <p className='text-gray-600'>{elem.details}</p>
                        </div>
                        <div>
                          <button 
                          onClick={
                            ()=>{
                              NoteDel(idx)
                                
                              
                            
                            }
                          }
                          className='bg-red-600 mb-4 w-30 cursor-pointer scale-50'>Delete</button>
                        </div>
                
                      </div>
                    })
                  }
              
                </div>
            
                    </div>    

          </div>
        
        </div>
      </div>
      </form>
    </div>
    )
  }

  export default App
