import { useState ,useCallback,useEffect,useRef} from 'react'
// import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++){
      let ind = Math.floor(Math.random() * str.length + 1);
      pass+= str.charAt(ind);
    }
    setPassword(pass);
  }, [length,numberAllowed,charAllowed,setPassword]);

  useEffect(() => {
    passwordGenerator();
  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 mb-3 py-8 text-center'>Password Generator
      <div className='flex shadow rounded-lg overflow-hidden mb-5'>
        <input
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
          <button className='ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed} 
              id='numberinput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed} 
              id='charinput'
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            />
            <label >charAllowed</label>
          </div>
        </div>
        </div>
      <h1 className='text-4xl text-center text-white '>Thank You for using Password Generator</h1>
      <p className=' text-center text-white '>suggestion: this is frequently used service , add it in your bookmakrs</p>
   </>
  )
}

export default App
